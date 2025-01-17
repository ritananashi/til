setTimeout(() => {
//  console.log(2);
}, 1000);//1000ミリ秒待ってから実行される。非同期的

window.addEventListener('click', () => {
//  console.log(2);
})//クリックイベントが発生してから処理が実行される。非同期的
//alert('not async');OKを推すまで次の処理が実行されない。同期的
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position);
// });
console.log(1);//基本的に最初に実行される

// window.addEventListener('click', (e) => {
//   console.log(e);
//   setTimeout(() => {
//     console.log('setTimeout');
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//       setInterval(() => {
//         console.log('setInterval');
//       }, 1000);
//     });
//   }, 1000);
// });
//コールバック地獄、あるいは破滅のピラミッドと呼ばれるよくないコード
//エラー処理もうまく動かない

// try {
//   setTimeout(() => {
//     try {
//       throw new Error('error');
//     } catch {
//       console.log(error.message);
//     }
//   }, 1000)
// } catch(error) {
//   console.log(error);
// }
//非同期的な処理は、try文から抜けてから実行されるのでうまくエラー処理ができない。
//非同期的な処理の中にtry-catch文を書けばエラー処理ができる。

let promise = new Promise((resolve, reject) => {
  resolve('hello');//promiseResultに値が入る。
  reject('error');//promiseStateがrejectedになり、promiseResultに値が入る
  throw 'error' //内部的に暗黙的にtry-catch文になる
  console.log('new promise!')
});
//ECMAスクリプトに標準ビルドインオブジェクトとして書かれている。
//非同期の処理と密接にかかわっているけど、あくまでもECMAスクリプトの独立した機能
//コールバック関数の引数にはオブジェクトがはいる。
//一度でもresolveやrejectされたら値は変わらなくなる。

promise = new Promise((resolve, reject) => {
  reject();
});
promise.then((value) => {
  console.log('then'. value)
});
//promiseStateがfulfilledだと実行される
//引数にはpromiseResultの値が入る
//第二引数にコールバック関数を渡せる
//catchで登録するコールバック関数とまったく同じ意味になるので。rejectされたら第二引数が実行される。
promise.catch((error) => {
  console.log('catch', error.message)
});
//promiseStateがrejectedだと実行される
//引数にはpromiseResultの値が入る
promise.finally((value) => {
  console.log('finally', value)
});
//promiseStateがfulfilledかrejectedだと実行される
//引数にはpromiseResultの値が入る

navigator.mediaDevices
  .getUserMedia({ video: true})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  })
//カメラ取得をOKしたらthenの処理、拒否したらcatchの処理
  .then(() => {
  return navigator.clipboard.readText();
  })
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
    console.log(error.message);
  });
//クリップボードへの保存をOKしたらthenの処理、拒否したらcatchの処理

let promisifiedSetTimeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
promisifiedSetTimeout(1000)
  .then(() => {
    console.log('promisifiedSetTimeout1');
    return promisifiedSetTimeout(1000)
  })
  .then(() => {
    console.log('promisifiedSetTimeout2');
    return promisifiedSetTimeout(1000)
  })
  .then(() => {
    console.log('promisifiedSetTimeout3');
    return promisifiedSetTimeout(1000)
  })
//Promise化することでコールバック地獄を回避してきれいに書くことができる。
//Promiseは将来起こることが一回だけの物にしか使えない。
//クリックイベントとかはPromise化できない。

let promisifiedCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
window.addEventListener('click', (e) => {
  console.log(e);
  promisifiedSetTimeout(1000)
  .then(() => {
    console.log('setTimeout');
    return promisifiedCurrentPosition()
  })
  .then((position) => {
    console.log(position);
    setInterval(() => {
      console.log('setInterval');
    }, 1000);
  })
  .catch((error) => {
    console.log(error.message)
  })
});

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 500)
});
Promise.all([promise, promise2, promise3]).then((value) => {
  console.log('Promise.all() then:', value);
})
.catch((error) => {
  console.log('Promise.all() catch:', error);
});
//引数に異寺ぶるオブジェクトをとる。
//指定したpromiseがすべてresolveされたあとにresolveする
Promise.allSettled([promise, promise2, promise3]).then((value) => {
  console.log('Promise.all() then:', value);
})
.catch((error) => {
  console.log('Promise.all() catch:', error);
});
//rejectがふくまれててもthenが実行される。

Promise.race([promise, promise2, promise3]).then((value) => {
  console.log('Promise.all() then:', value);
})
.catch((error) => {
  console.log('Promise.all() catch:', error);
});
//一番初めにresolveかrejectしたものだけ返す

Promise.any([promise, promise2, promise3]).then((value) => {
  console.log('Promise.all() then:', value);
})
.catch((error) => {
  console.log('Promise.all() catch:', error);
});
//最初にresolveされたものだけ返る

Promise.resolve('value');
//new Promise((resolve) => resolve('value'));とおなじ

Promise.reject(new Error('reject'));
//new Promise((resolve, reject) => reject(new Error('reject')));とおなじ

const {promise1, resolve, reject} = Promise.withResolvers();
setTimeout(resolve, 1000)
/*
let resolve, reject
const promise = new Promise((res. rej) => {
  resolve = res
  reject = rej
})
と内部的には同じ
*/

function func() {
  throw 'hello'
}
Promise.try(func, 'a', 'b').then(value => console.log(value)).catch(error => console.log(error));
/*
new Promise((resolve) => {resolve(func('a', 'b'))})
と内部的にはおなじ。
関数の返り値がなんであっても処理できる。
第二、第三引数を入れることもできる、その場合は関数の引数になる。
*/

setTimeout(() => {
  console.log('after 1000ms');
}, 1000);
for (let i = 0; i < 1e9; i++);
console.log('after for');
//コールバック関数はmain.jsのすべての処理が終わってから実行される

for (let i = 0; i <= 1e5; i++) {
  setTimeout(() => {
    document.body.textContent = i;
  });
}
//JSの処理が終わってからレンダリングされる。
//setTimeoutを使うとJSの処理の様子がアニメーションでみれる（10万が処理が終わるまでカウントされるアニメーション）。
/*
1.ディスプレイがレンダリングできないとき
2.パソコンが重いとき
3.表示させたい画面がディスプレイ上にないとき、
4.レンダリングをしたところで見た目の変更が何もないとき、かつ、animation frame callbacksに何も処理がないとき
5.ブラウザがスキップしたとき
にレンダリングがスキップされる。
*/
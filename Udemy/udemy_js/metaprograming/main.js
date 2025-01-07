let arryLikeObject = {
  0: 0,
  1: 1,
  length: 2,
};
arryLikeObject = new Proxy(arryLikeObject, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
  },
  set(target, prop, value) {
    target[prop] = value;
    const index = Number(prop);
    if (index >= target.length) {
      target.length =index + 1;
    }
    return true;
  },
});
arryLikeObject[10] = 10;
//proxy
//target = arryLikeObject
//prop = [10]
//value = 10
//処理を書き換える。
let obj = {
  hello: 'hello',
};
let proxy = new Proxy(obj, {});
console.log(proxy)
//ハンドラー（{}のとこ）に例えばGETメソッドが定義されていれば
//メソッドを実行し、定義されていなければ普通にオブジェクトをProxyの代わりとしてつかう。
//Reflect.set(target, prop, value);みたいな書き方もできる。

let symbol = Symbol.for('symbol1');
let symbol2 = Symbol.for('symbol1');
console.log(symbol === symbol2)
//シンボル
//シンボル関数を使って返ってきた値がシンボルになる。
//他のどんな値ともかぶらないことが保証された値。
//.for(同じ引数)で同じシンボルを引っ張ってこれる。
//シンボルをオブジェクトのプロパティにいれると、文字列にならずにシンボルのまま
//保存される。

let items = [0, 1, 2]
arryLikeObject = {
  0: 6,
  1: 7,
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
let result = items.concat([3, 4, 5], arryLikeObject);
console.dir(result)
//Symbol.isConcatSpreadableを使えば、concatで配列のようなオブジェクトと配列を合体させることができる。

obj = {
  a: 'a',
  b: 'b',
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        count += 1;
        return count > 3
        ? { done: true }
        : {
          value: 1,
          done: false,
        };
      }
    };//ここまでイテレータ
  }
};
for (const item of obj) {
  console.log(item)
}
//配列のようなオブジェクトでも配列みたいにループ処理できる。

function* generatorFunc() {}
let iterator = generatorFunc();
console.log(iterator);
//イテレータを簡単に作れる

let newIterator = [1, 2, 3, 4, 5].values().map((value) => {
  console.log('map');
  return value * 2;
});
//.next()を実行したときに処理が呼び出される。
//必要な時に必要なものしか実行されないので効率がいい。

const myTag = (strings) => {
  return `${strings[0]}${age}${strings[2]}${strings[1]}${name}`
};
let name = 'Rita';
let age = 20;
myTag`Hello! I am \`${name} and \`${age} years old`;
//タグ付きテンプレート
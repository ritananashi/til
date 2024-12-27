let generatePerson = (name) => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age,
    incrementAge: () => {
      age += 1;
    }
  };
};
const rita = generatePerson('Rita');
console.log(rita.getAge());
rita.incrementAge()
rita.incrementAge()
console.log(rita.getName());
const tom = generatePerson('Tom');
tom.incrementAge()
tom.incrementAge()
tom.incrementAge()
console.log(tom.getAge());

/*
定数で定義しても、中身は変更できてしまうが、
関数で定義すると中身は変更できなくなる。
*/

const counter = (function () {
  let count = 0;
  return () => {
    // count += 1;
    // debugger;
    // return count;
  };
})();
counter();
/*
こうするとすぐに関数を実行できる。
ブロック文と似た性質を持っている。
昔はverしかなかったので、()で囲んでブロック文みたいに関数を
すぐに実行できるようにしていた。
即時実行関数式という。
*/

let factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(0));
// 3! = 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1
// factorial = 階乗
// 再起関数
/*
階乗のようなループ処理をシンプルに書くことができる。
自分自身を呼び出して処理をする。
*/
const c = () => {
  return'hello';
};
const b = () => {
  return c();
};
const a = () => {
  return b();
};
// debugger;
a();
// スタックの動きを確認
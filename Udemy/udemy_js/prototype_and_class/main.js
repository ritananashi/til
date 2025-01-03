const obj = {
  a: 1,
  b: 2,
};
//obj.__proto__ = {
//  c: 3,
//};
Object.setPrototypeOf(obj, {
  c: 3,
});
console.log(Object.getPrototypeOf(obj));
// プロトタイププロパティ
/*
すべてのオブジェクトはプロトタイププロパティというものを内部的に持っている。
値にはobjectかnullしか入れられない。
オブジェクトの値を呼び出すときに、オブジェクト内に値がなかったら、
プロトタイプオブジェクトの中の値のオブジェクトの中にそのプロパティがないか
どうかまで調べる。
最後にプロトタイプがnullだったらundefinedが返る
Object.setPrototypeOfでプロトタイプオブジェクトの値を返られる。
Object.getPrototypeOfでプロトタイプオブジェクトをみれる。
Object.create()の第一引数にプロパティオブジェクトにしたい値を入れて
オブジェクトを作れる。
*/
const UserConstructor = function(name, age) {
  // this = object.create(UserConstructor.prototype)
  this.name = name;
  this.age = age;
  //return this;
};
UserConstructor.prototype.greeting = function () {
  return 'Hi! This is ${this.name}. I am ${this,age} years old.'
}
//const user1 = new UserConstructor('rita', 30);
const user2 = new UserConstructor('nanashi', 32);
const user3 = new UserConstructor('mary', 31);
//console.log(user1);
console.log(user2);
console.log(user3);
/*
newで関数を呼び出した時は、新しいオブジェクトが作られてthisに代入される。
すべての関数はプロトタイプというプロパティを持っている。
*/

let o = new Object();
Object.prototype.hello = 'hello';
console.log(o);
//コンストラクタ関数
/*
new Objectでからっぽのオブジェクトが作れる。
初期値として引数にデータを入れることもできる。
o.__proto__ === Object.prototype
newは使わずに{}を使った方がいい（わかりやすいので）
*/

o = {
  a: 1,
};
//console.log(o);
//console.log(o.hasOwnProperty('hello'));
//console.log('hello' in o);
//hasOwnProperty
/*
そのオブジェクトにそのプロパティがあるかどうかを調べる。
in演算子と違って、hasOwnPropertyはプロトタイプチェーンまでみない。
Object.prototype.hasOwnProperty.call(o, 'hello')ならプロトタイプチェーンまでみる。
hasOwnPropertyは内部的にthisを使っているので、引数にオブジェクトを渡すと動く。
*/

class User {
  static id;
  static {
    let ok = true;
    if (ok) {
      User.id = 120
    } else {
      User.id = 40;
    }
  }
  // 動的にidの値を変更できる

  #age = 0
  //プライベートプロパティを定義。
  //必ず頭に#をつける。
  //クラスのフィールド内じゃないと定義できない。
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  birthday = '1990/1/1'
  greeting() {}
  post() {}
}
const user1 = new User('Rita', 30);
console.dir(user1)
//クラス
/*
内部的にはただの関数オブジェクト。
呼び出すときは必ずnewを使う。
基本的には省略記法のメソッドのみ掛ける。
constructor(){}メソッドの中で定義されたものは、new時に真っ先に実行される。
thisなどの設定もここで行える。
メソッド名にget、setをつけるとgetterとsetterを簡単に設定できる。
クラスの中はストリクトモードになる。
*/

class Animal {
  age = 0;
  constructor(age) {
    this.age = age;
  }
  eat(){}
}
class Bird extends Animal {
  name = 'pi'
  constructor(age, name) {
    super(age)
    this.name = name;
  }
  fly(){}
}
const bird = new Bird(3);
console.log(bird);
//継承
/*
extendsで別のクラスを継承できる。
継承先のことを子クラスと呼ぶこともある。
親クラスにコンストラクター関数があって、
子クラスでコンストラクター関数を使いたいときはsuper()で呼び出す。
スタティックメソッドも継承されるので、bird.eat()みたいにできる。
superはthisよりも上にかく。thisはsuperが作られるときに作られるので。

*/
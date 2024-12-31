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
const user1 = new UserConstructor('rita', 30);
const user2 = new UserConstructor('nanashi', 32);
const user3 = new UserConstructor('mary', 31);
console.log(user1);
console.log(user2);
console.log(user3);
/*
newで関数を呼び出した時は、新しいオブジェクトが作られてthisに代入される。
すべての関数はプロトタイプというプロパティを持っている。
*/

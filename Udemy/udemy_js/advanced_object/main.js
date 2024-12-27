const interests = 'interest'
const person = {
  name: 'Rita',
  age: 30,
  greeting: function() {},
  const: 'const',
  'current city': 'Tokyo',
  3: 3,
  [interests]: ['music', 'travel']
};
console.log(person['current city']);
for (const key in person) {
  console.log(key);
}
/*
objectの中なら予約語を使用することができる。
キーを文字列にすることもできる。文字列にすれば、空白が使える。
数字のみも使える。マイナスの値はエラーになってしまう。
変数をキーにしたいときは[]でかこむ。
よびだす時は[]を使えば指定できる。
通常のキーを呼び出したいときは文字列にする。
関数を呼び出すときは[]の後ろに()をつけると呼び出せる。
オブジェクトのキーはすべて文字列（String）で管理されている。
*/
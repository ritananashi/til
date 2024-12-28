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
delete person.age;
// delete演算子
/*
プロパティを削除するときに使う。
.でつなげて指定することでプロパティを削除できる。
[]も使える。
*/
const name = 'Espresso';
const size = 350;
const coffee = {
  name,
  size,
  nutritions: {
    calories: 5,
    sugars: 0,
  },
};
console.log(coffee);
// 省略記法
/*
あらかじめ定数で定めた値をオブジェクトで使いたいとき、定数名のみで定義できる。
*/

const coffee2 = {
  ...coffee,
  isHot: true,
  name: 'Latte',
};
coffee2.nutritions.calories = 180;
console.log(coffee);
// スプレッド構文
/*
オブジェクトを別のオブジェクトとしてコピーする。
単純に別の定数にオブジェクトを定義している定数を代入しても、コピーにはならない
{}でくくると新しいオブジェクトを作る。
定数の前に...をつけると、コピーしたいオブジェクトのそれぞれのプロパティを展開する
もともとあるキーと同じキーを定義して新しい値を設定した場合は、新しいほうが優先される。
後から宣言されたものが優先される。
元のオブジェクトにないプロパティも追加できる。
Shallow copyになるので、コピー元のオブジェクト内のオブジェクトに対しては、
展開せずに同じアドレスを共有する形になる。
なので、値を更新すると、元のオブジェクトとコピーした方のオブジェクト両方とも更新されてしまう。
Deep Copyの正式なやり方はないので、コピー元の方のオブジェクトに新しくオブジェクトを作るなどの
工夫が必要になる。
*/

const o1 = { a: 1 };
const o2 = { a: 2, b: 2 };
Object.assign(o1, o2);
console.log(o1);
// {a: 2, b: 2}
/*
Object.assignでオブジェクトを合体できる。
新しいオブジェクトを作るのではなく、既存のオブジェクトに別のオブジェクトを入れ込む。
オブジェクト自体を変更している。
後からくっつける方が優先される。
左が基準のオブジェクトで、右側は何個でも撮ることができる。
Object.assignは拡張された左のオブジェクトを返している。
*/

const book = {
  title: 'JavaScript course',
  price: 9.99,
  author: {
    firstName: 'Rita',
    lastName: 'nanashi',
  },
};
const {
  title: bookTitle,
  price,
  author: { firstName, lastName },
  publisher: pub = 'Rita inc', // プロパティがないときのデフォルトの値を設定
  ...etc // 残りすべて
} = book;
const sayBook = ({
  title: bookTitle,
  price,
  author: { firstName, lastName },
  publisher: pub = 'Rita inc', // プロパティがないときのデフォルトの値を設定
  ...etc // 残りすべて
}) => {
  console.log(bookTitle, price, firstName, lastName);
}
sayBook(book);

// 分割代入
/*
const title = book.titleとかと同じような動きをする。
constの後に{}を書いて、オブジェクトから取り出したいキーを書いていく。
キー: 別な名前,できーとは違う名前で呼び出せるようになる。
オブジェクトの中にプロパティがないときのデフォルトの値を設定することもできる。
関数のパラメータで分割代入をすることもある。
*/

console.log('hello' in book);
// in演算子
/*
オブジェクト等の中に指定した要素があるかどうかを判定する。
あればtrue、なければfalse。
*/

let user = null
user?.address
// オプショナルチェーン
/*
?がついている変数がundefinedかnullだったら、後ろの部分を評価せずにundefinedを返す。
複数つなげることもできる。
バグに気づきにくくなるので使いすぎない方がいい。
存在しないデータの時は単純にエラーになる。
メソッドにも使うことが出来て、nullやundefinedじゃなければメソッドを実行するみたいにできる。
user?.()でuser関数があるかないか、undefinedじゃなければ関数を実行するみたいにできる。
*/

let sayThis = function () {
  console.log(this);
  };
const car = {
  color: 'red',
  sayThis,
  changeColor: function(color) {
    this.color = color; // thisにすると、オブジェクトをコピーした時にコピー先のみ変更するみたいにできる。
  }
};
const car2 = { ...car };
car2.changeColor('white');
console.log(car2);
// this
/*
オブジェクトに登録したメソッドとしてthisを呼び出すとthisはそのオブジェクトになる。
thisは.の左側の値が返る。
アロー関数はthisを持たない。のでグローバルオブジェクトが返る。
メソッドの中にある関数呼び出しの引数がコールバック関数になっている時にthisを使いたいときは、
アロー関数にすると、アロー関数はthisを持たないので、その一つ外側にあるthisを採用する。
thisの制限があるので、なるべくメソッドはfunctionで書いたほうがいい。
*/

const pastaCalculator = {
  servingSize: 60,
  member: 4,
  get total() {
    return this.servingSize * this.member;
  },
  set total(newValue) {
    this.member = newValue / this.servingSize;
  }
};
pastaCalculator.total = 600; // 600がnewValueに入る
console.log(pastaCalculator.total);
// getterとsetter
/*
getter・・・関数をプロパティみたいに使うことができる。
setter・・・getterになにか代入したいときに使う。
アクセサプロパティはキーと一つか二つの関数で一つのアクセサプロパティと扱われる。
*/

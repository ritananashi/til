alert('hello');

let count = 0; let newCount = 0
/*変数はletで設定する。
;はあってもなくてもいいけど、同じ行に別の変数を用意するときは必ず;が必要。
予期しない動きにつながることがあるので、;は書いておいた方がいい。*/
console.log(count);
count = 30;
console.log(count);

let sampleCount;
console.log(sampleCount);
/*変数宣言をするときは初期値を省略することもできる。
初期化するときに初期値を与えなかった場合、初期値はundefinedとなる。
undefined = 未定義の意味*/

/*同じ変数を再定義することはできない。↓のエラーがでる。
Uncaught SyntaxError: Identifier 'count' has already been declared
`count`はすでに宣言されているの意味
VScode上でもエラー出してくれる。*/

/*変数宣言前に変数を出力しようとすると↓のエラーが起こる
Uncaught ReferenceError: Cannot access 'count' before initialization
初期化する前に`count`にはアクセスできないの意味*/

const daysInWeek = 7;
/*定数はconstで定義する
定数に再代入することはできない。↓のエラーがでる。
Uncaught TypeError: Assignment to constant variable.
定数に代入することはできないの意味
初期値を省略することもできない。↓のエラーが出る。
Uncaught SyntaxError: Missing initializer in const declaration
const宣言の中で初期値を忘れているぞの意味
何かの拍子に値が変わったりしないようにするためや、コードを読みやすくするために定数をつかう。
基本的には常に定数をつかう。変数だと値の中身が変わってしまうから、今中に何が入っているかわからなくなってしまうことがある。*/
let tomatoCount;
/*変数名、定数名を付けるときは、基本的にはどんな記号も特殊記号も使うことができない。
2単語目の頭文字を大文字にして区別する書き方をキャメルケースという。
キャメルケースで命名するのがJSのベストプラクティス。*/
let $tomato$Count;
let _tomato_Count;
/*$マークと_は例外的に使用することができる。
_で単語を区切る書き方はスネークケースというが、これはJS的にはあまり良くない書き方。*/
let tomato7Count7;
/*数字を入れることもできる。
しかし、変数名・定数名の頭に数字を使うことはできない。
const 7tomatoCount; ← これはできない。
数字は絶対に名前の先頭に来てはいけないというルールがある。
他に予約語も変数名・定数名に使うことはできない。
let const; ← これはできない。*/
let トマトカウント;
/*日本語も使える！ドイツ語とか他の言語も使える。
一般的には英語で書くのがいいとされている。
Unicode文字が使えるから日本語も使えるということらしい。*/
let tomatocount;
// JSは大文字と小文字を区別するので、let tomatocount;とlet tomatoCount;は別の変数として認識される。

let additionResult = 2 + 5;
console.log(additionResult);
// 計算は普通の数学の順番と同じ。算術演算子を使って計算する。
let result = 5;
result = result + 1;
/*変数には別の変数を入れられる。
同じ変数も入れられる。*/
result += 1;
// result = result + 1を省略して書くとこうなる。
result++;
++result;
/* result += 1;はこう書くこともできる。
- と + だけこうした書き方がある。
result++;は+1する前の値を返す。++result;は+1した後の数値を返す。*/

let number = 10;
number = -4;
number = 32.42;
/*number型には整数や負の数、少数がある。
10や-4とかの整数はInteger（インテジャー）という。
少数はfloat（フロート、浮動小数点）という。*/
let string = 'Hello';
/*文字列はString型
JSの変数はnumber型専用等、特定の型専用の変数はないため、宣言した変数にはnumber型もstring型もいれられる。
これを動的型付けという。
動的とは、状況によって変化すること。
反対語は静的。状況によって変化しないもの。*/

const userName = 'Sample';
// ' 'か" "か` `で囲む。
string = 'Hello ' + userName;
string = `Hello ${userName}！`;
// ` `をつかっていると、${}でJSを文中に埋め込める。
string = " ' `` ";
// ' 'や` `などを文字列の中で使いたいときは使いたいもの以外で囲う。
string = ' \' ';
// \を使うことでも表示させることができる。
string = '\\';
// \を表示させたいときは\を2個つかう。
string = 'Hello\nSample';
// \nで改行
string = `Hello
sample`;
// ` `だとコード上で改行しても改行が反映される。
console.log(string);

let sampleResult = '10' + '10';
// "1010"
sampleResult = '10' + 10;
/*"1010"
内部で自動で数字の10を文字列に変換してから足す。*/
sampleResult = '10' - 10;
/* 0
文字列を数字に変換して引いてる。
+演算子は文字列にあるけど、-演算子は文字列の中にはない。
なので、文字列と数字の組み合わせで-演算子を使うと、文字列が数字の間違いだとJSが判断して勝手に変換してくれる。
+演算子は文字列でも使うので、数字のほうが文字列の間違いと判断して変換してくれる*/
sampleResult = '10' * 10;
// 100
sampleResult = '10' / 10;
// 1
sampleResult = '10' % 10;
// 0
sampleResult = '10' ** 10
// 10000000000
sampleResult = 'Hello' * 10;
/*NaN
Not a Number。数字じゃないよと言っている。*/

const userInput = '10.9';
let calcResult;
calcResult = Number(userInput) + 10;
// Number関数で文字列を数字に変換できる。
console.log(calcResult);
calcResult = parseInt(userInput) + 10;
/* parseInt関数もNumber関数と同じように文字列を数字に変換する。
parseInt関数に少数を入れると小数点以下は消える。*/
console.log(calcResult);
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);
calcResult = +userInput + 10;
// 定数名の前に+を入れることでも文字列を数値に変換してくれる。
console.log(calcResult);

const tenNumber = 10;
calcResult = '10' + String(tenNumber);
// String関数で数字を文字列に変換できる。
calcResult = '10' + tenNumber.toString();
// これでも数字を文字列に変換できる。

let boolean = true;
boolean = false;
// 真偽値、ブーリアン値ともいう。

let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3];
array = [1, 'apple', true, array];
// 配列の中にはなんでも入れられる。
array = ['apple', 'banana', 'grape'];
console.log(array[0]);
// 配列は0からスタート。
array = [];
array.push('apple');
// 配列に要素を追加する。
console.log(array);

const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
  nutritions: {
    calories: 430,
    sugars: 53,
  },
};
/* オブジェクトはキー: バリューのセットで書く。
キーとバリューをセットでプロパティということもある。
name:のところだとnameプロパティという。
配列やオブジェクトを入れることもできる。
プロパティ名の命名規則は変数とかと同じ。
キーとバリューの間には必ず:を付ける。
次のプロパティに行くときは,をつける。最後のプロパティには,はなくてもいいが、入れて置いたら後からプロパティを追加したくなった時に便利。*/
console.log(coffee.size);
// オブジェクト名.プロパティ名でプロパティのバリューにアクセスできる。
coffee.isHot = false;
// バリューを変えたいときはオブジェクト名.プロパティ名 = 変更後の値。
coffee.barista = 'Sample';
// あたらしいプロパティを追加したいときはオブジェクト名.追加したい新しいプロパティ名 = バリュー。

let userInfo = null;
/* nullは何もないことを表す値。
JSには何もないことを表す値がnullとundefinedの二つある。
nullは明示的に書かない限り出てこない
undefinedは暗黙的にいろいろなところで使用されている。
undefinedは予期せぬエラーのようなものを表している。
nullは予定通り何もないことを表すことがおおい。*/

typeof 3
/* "number"
typeof演算子。値の型を教えてくれる。*/
typeof NaN
/* "number"
Not a Numberの型はnumberになる。*/
typeof [1, 2, 3]
/* 'object'
配列の型はobject。JSの考え方では、配列はobjectの一つに過ぎない。*/
typeof undefined
/* 'undefined'
undefinedはundefined型。undefined型はundefinedのみ。*/
typeof null
/* 'object'
nullはobject型。nullは何もないよりは何もないオブジェクトの意味。*/

const newValue = 'hello';
function add(num1, num2) {
  const value = num1 + num2;
  console.log(newValue);
  return value;
}
/* 関数の末尾には;はつけない。
オブジェクト以外の｛｝はブロックという。
()の中に情報の受け口を作ることができる。
情報の受け口の名前のことをパラメーターと呼ぶ。日本語では仮引数。
return文のあとに何か処理を書いても、return文以降のものはすべて無視される。
add(2, 3);
関数呼び出し
()の中に渡したい情報を入れられる。引数やアーギュメントと呼ばれる。
引数を使う関数に引数を渡さなかったらundefinedになる。
引数が二つ必要になる関数に引数を一つだけ渡したら、↑の例だとNaNになる。
関数の外で定義した定数等も関数の中で使える。グローバルスコープ、グローバル変数 */
const returnedValue = add(2, 3);
/* 関数でreturnをつかっていると、呼び出された関数自体が処理結果になる。
returnで帰ってきた処理結果は戻り値とか返り値という。*/
console.log(returnedValue);
// 5

/*console.log(value)
Uncaught ReferenceError: value is not defined
valueは定義されていないの意味
関数の中で定義した定数等は関数の外では使用できない。
ローカルスコープ、ローカル変数。関数の中だけで使えるものは関数スコープと呼んだりする。
ブロック文の中で使えるものだと、ブロックスコープと言ったりする。
グローバルスコープとローカルスコープが同じ名前だったら、ローカルスコープが優先される。*/

const /*コードの中にコメント書ける*/sampleAdd = newAdd(3, 5);
console.log(sampleAdd);
function newAdd(num3, num4) {
  return num3 + num4;
}
/* 関数呼び出し式を関数より上に書いても関数を呼び出せる。
JSは上から下に実行されるが、JSエンジンでJSを読み込むときに一度コードを全部みて、その中で関数宣言があったときは、すべて内部的に一番上に持っていかれる。
とはいえ、読みにくいので関数宣言は関数の下に書いたほうがいい。*/

// if文
let ok = false;
/*let maybeOk = true;
if (ok) {
  console.log('OK');
} else if (maybeOk) {
  console.log('maybe OK...');
} else {
  console.log('NO');
}*/
/*()内にtrueかfalseを書く。
この中はtrueかfalseになる変数などを入れてもいい。
ifとelse ifは条件がtrueの時に実行される。
if文はネストできるので、if文の中にif文をいれたり、elseの中にifを入れたりできる。*/

ok = 1 === 1;
//true
ok = 1 === 2;
//false
//二つの値を比べて同じだったらtrueを返す。同値演算子
ok = 1 !== 2;
//true
/*!== 二つの値を比べて違う値だったらtrueを返す。
!は一般的に否定を表す*/
ok = 1 == '1';
//true
/*===より型の制約が緩い。等値演算子
型が違っても数字の1と文字列の1は同じとみなされるのでtrueになる。
予期せぬエラーを防ぐためにも、こっちは使わない方がいい。*/
const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
ok = coffee1 === coffee2;
//false
//中身が同じオブジェクトを比べてもfalseになる。
const coffee3 = coffee1;
ok = coffee1 === coffee3;
//true
//オブジェクトを直接代入するとtrueになる。
/*例え中身が同じであっても、{}を付けて作ったオブジェクトは別のオブジェクトになるから、
比較したときにfalseになる。
定数にオブジェクトを直接代入すると、まったく同じオブジェクトが入ることになるので、
比較したときにtrueになる。*/
ok = coffee1.name === coffee2.name;
//true
//オブジェクト内の文字列同士を比較しているので、trueになる。

ok = 1 > 0;
// > 大なり。0より1が大きかったらtrue
ok = 1 < 0;
// < 小なり。1より0が大きかったらtrue
ok = 1 >= 1;
// >= 大なりイコール。以上なので1を含む。true。
ok = 'a' < 'b';
//文字列も辞書（Unicode）順で比べることができる。true。
ok = 'A' < 'a';
//辞書順だと大文字のほうが先に来るので、小文字のほうが数字的には大きいと判断される。true。
ok = 0;
/*if (ok) {
  console.log(ok);
  console.log('OK');
} else {
  console.log('NO');
}*/
/*JSはなにか文字列や数字が入っていると自動的にtrueとして取り扱う。
空白の文字列や0の場合はfalseとなる。
JSが真偽値を必要とする場面でtrueとして扱われる値はtruthy、falseとして扱われる値はfalsyと言う。
truthy(https://developer.mozilla.org/ja/docs/Glossary/Truthy)
falsy(https://developer.mozilla.org/ja/docs/Glossary/Falsy)*/

ok = true && false;
//false
/*trueかつfalse。論理積演算子。AND演算子とも。
左右の値を比べて両方ともtrueだった場合のみtrueになる。*/
ok = true || true;
/*A or B。論理和演算子。OR演算子とも。
両方の値がfalseの時のみfalseになる。*/
ok = 0 && 'hi';
//hi
//false && 'hi'にしたらfalseになる。
//0 && 'hi'にしたら0になる。
/*左側がtruthyだったら右側の値を返す。
左側の値がfalsyだったら左側の値を返す
というのが論理積演算子の厳密な定義
論理和演算子は左側がtruthyだったら左側を返して、左側がfalsyだったら右側を返す。*/
const userInput = '';
const userName = userInput || 'User';
//User

const x = 15;
ok = x > 10 && x < 20;
//true
ok = x === 10 || x > 12 && userName;
//User
/*x > 12がまず評価される。次にx === 10が評価される。
次に&&が評価され、左側がUserになる。次に||が評価されて、左側がfalseなので右側が返り、Userになる。
最後にok = が評価されて、okの値がUserになる。
こういうコードを書くときとかはわかりにくかったら（）で囲むといい。()が優先順位が一番高い。
(https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#%E4%B8%80%E8%A6%A7%E8%A1%A8)
演算子の優先順位一覧表。上から優先順位が高い。*/
if (ok) {
  console.log(ok);
  console.log('OK');
} else {
  console.log('NO');
}
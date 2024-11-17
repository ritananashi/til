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

let nullishSample = '' ?? 'Sample';
//nullかundefinedの時はSample（右側）が返る。空文字のときはそのまま空文字（左側）が返る。
/*null合体演算子。Nullish Coalescing Operator（https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescin）
AND演算子やOR演算子と一緒に使うことはできない。*/
let notSample = !'hello';
//false
/*NOT演算子。trueとfalseを反転させる。
truthyでもfalsyでもできる。*/
notSample = !x;
//定数でも使える。x = 15にしているのでfalse
notSample = !!x;
//true
/*論理積演算子は右から左に結合性があるので、!xを計算してから!を計算する。
!xでfalseになり、最後の!でtrueになる。
xには今number型が入っているが、!!を付けることで型を真偽値に変更している。*/

//ブロック文＝複数の文や宣言を一つにまとめる文
const blockSample = 'Sample2'
{
  //console.log(blockSample);
  const blockSample = 'Sample1';
}
/*ブロックスコープを持っているので、ブロック文の外からブロック文の中の定数とかにアクセスしようとすると
Uncaught ReferenceError: blockSample is not definedエラーがでる。
ブロック文の中にネストしてブロック文を入れることもできる。
グローバルスコープとローカルスコープで同じ定数が定義されている時、ローカルスコープが優先されるが、
ブロック文の中でローカル定数の前にグローバル定数を呼び出そうとすると、
Uncaught ReferenceError: Cannot access 'blockSample' before initializationエラーがでる。
ローカルのほうが優先されてしまう。*/
if (ok);
/*if文は↑までは同じ形だけど、()の後の{}の部分はどんな文でもいい。
複数の文を使うことが多いのでブロック文をつかっているだけなので、;を付けて空文で終わらせることもできる。
式がtrueなら何もしないなら;でもよい。
なんでもいいから式文をいれてもいい。
この後にelseで続けることもできる。
else ifも、else文の後は好きなものを入れることができる。あくまでもif文をいれているだけ。*/

ok = ok ? 'OK' : 'NO';
//OK
//?と:で三つの式を挟むのを三項演算子という。
//if文とにた感じで条件分岐できる。
//okがtruthyなら:の左側の値を、falsyなら:の右側の値を返す。

function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red!');
      break;
    case 'carrot':
    case 'pumpkin':
      console.log(`${vegetable} is orange!`);
      break;
    case 'onion':
      console.log('onion is white!');
      break;
    default:
      console.log('not found');
  }
  // if (vegetable === 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('pumpkin is orange!');
  // } else if (vegetable === 'onion') {
  //   console.log('onion is white!');
  // }
}
vegetableColor('carrot');
/*case文は内部的にvegetableとcaseで指定した値が===かを判定している。
breakを入れないと値の合致するcase以降の全部のcaseが実行されてしまう。
度の値にも合致しないときの処理はdefaultで設定できる。
スイッチ文の中ではスコープがあるけど、それぞれのcaseの中ではスコープはないため、同名の定数を定義したりはできない。
ブロック文で囲えばcaseごとに定数を宣言してもエラーが起こらないので安全。*/

let count = 100;
while (count < 10) {
  console.log('while: ' + count);
  count += 1;
}
console.log(`while: last ${count}`);
//while文

let tomatoCount = 100;
do {
  console.log('do-while:' + tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);
console.log(`do-while: last ${tomatoCount}`);
//do-while: last 101
/*do-while文
do {}がまず実行されて、そのあとにwhile ()内の条件式を評価して、trueだったらもう一でdo {}を実行する。
一番最初の文は何の条件なしに問答無用で実行される。*/

for (let pumpkinCount = 0; pumpkinCount < 10; pumpkinCount += 1) {
  console.log(pumpkinCount);
}
/*for (初期値; 条件式; 最後に行いたい式文)
let宣言とかが使える。
一番右の式を実行してから真ん中の評価をするという風に内部的に処理されている。*/

let a = 'a', b = 'b', c;
console.log(a, b, c);
//a b undefined
/*変数や定数は,で区切って複数設定することができる。
カンマ演算子というのもある。優先順位は＝より下。*/
let commaSample1 = 0;
let commaSample2 = 0;
commaSample1 += 1, commaSample2 += 1
//みたいに書くことができる。あんまり使わない。

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango']
for (let i = 0; i < fruits.length; i += 1) {
  //console.log(fruits[i]);
}

for (const fruit of fruits) {
  //console.log(fruit);
}
/*for-of文。()の中にofが入る。
ofの右側に配列を入れる。左側には何かの変数を入れる。
右側の配列の一つ目を左側の変数に入れていく。
変数はletだけど、constに入れても同じように動く。
他のfor文と違って、一回一回変数が削除されているイメージ？毎回毎回ループごとに違うブロックで実行しているイメージ。
letだと上書き変更できてしまうからconstのほうがいい。
右側には文字列でもいける。
オブジェクトはできない。
for-ofは配列をループしたいときにつかう！*/

const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
  nutrition: {
    calories: 430,
    sugars: 53,
  },
};

for (const key in coffee) {
  if (key === 'size') {
    console.log('continue');
    continue;
  }
  console.log(key);
  console.log(coffee[key]);
}
/*for-in文
オブジェクトが使える。配列も使える。
配列を扱うときは基本的にfor-of文を使うので、for-inはオブジェクトに使う。
オブジェクトのキーを左側に定義した定数に入れてループする。
バリューをループ処理で取り出したいときはオブシェクト名[定義した定数]でとりだす。*/

/*ループ文の中でbreakを使うと、直ちにこのループから抜けるという処理になる。
while文とかで無限ループを避けるために使える。
他、特定の条件下でループを終わらせたいときとかに使える。
ループ文がネストしている時は、ネストの内側のループ処理がおわる。*/

/*continue文はその処理をスキップする文。
指定した処理をスキップして、次のループにいく。
↑の例だと、
name
Chocolate Mocha
continue　←　continueでスキップされた処理
isHot
true
toppings
['Cinnamon', 'Caramel']
nutrition
{calories: 430, sugars: 53}
となる。*/

label: {
  break label;
}

/*ラベル文
breakとcontinueと一緒に使う。
識別子名: 文
でつかう。
breakとかの後ろにラベルで指定した識別子を入れると、breakが発動したらその文の次の行に飛ぶ。
↑の例だと281行目に処理が飛ぶということ。
continue文でラベル文を使うときは、識別子の右側が必ずループになっていなければならない。
continue文はループをスキップして次のループにいく、という処理なので。
ラベル文はわかりにくいのであんまり使われない。*/

function logChocolate() {
  try {
    console.log('try');
    console.log(chocolate);
  } catch {
    console.log('catch');
    console.log(chocolate);
  } finally {
    console.log('finally');
    return 'hello';
  }
}
console.log(logChocolate());
/*try-catch文
エラーがー起きても処理を止めたくないときにつかう。
tryにエラーが起きるかもしれない処理を書いておくと、エラーが起きてもcatchに書いた処理を実行してくれる。
try-catchの外に書いた処理も実行してくれる。
tryでエラーが起きなかったらcatchの処理は実行されない。
JSエンジンはJSを読み込んで解析した後に実行されるので、構文エラーはtry-catchで処理を継続させることはできない。
どうしてもエラーを完全に防ぐことができないときにつかう。
try-catch-finallyもある。try-finallyでもtry-catchでもいい。
finallyは最後に必ず実行される。どんな理由で処理が終了しようが実行される。
優先順位がかなり高いので、何が起こってもfinallyで上書きしてしまう。
finallyの中でreturnとかしちゃうとエラーも上書きしてしまう。
↑の例だと本来なら未定義エラーが出なければならないが、finallyでreturn文をつかったことでエラーがでずに
try
catch
finally
hello
と出力される。
普通に文が終わる以外の終わり方で文が終わったときに上書きする。
文が終わるとは、普通に処理が終わるパターンと、リターン文をつかって終わるパターンと、
ブレイク文を使って終わるパターンと、throw文を使って終わるパターンと、コンテニュー文を使っておわるパターンの5つ
finallyはreturn、break、throw、continueを使って終わるときのみ上書きする。*/

try {
  console.log('throw try')
  throw {message: 'throw an error'};
} catch (error) {
  console.log('throw catch', error);
}
/*throw文
エラーを作り出す。
console.errorはエラーっぽくログを表示させるだけ。
throw文は確実にエラーになる。
catch文は引数を取ることもできるので、(error)と書くとthrow文の右側の式を受け取れる。
変数未定義とかのエラーも受け取れる。
ブラウザが内部的にthrow文を使って値を返してくれる。
error.nameとerror.messageで値を受け取れる。
未定義エラーのnameはReferenceError、messageはchocolate is not definedとなる。*/
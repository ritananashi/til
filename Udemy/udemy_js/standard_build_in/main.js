let count = 1.23456;
let result = count.toFixed(2);
console.log(result);
//少数の桁数を指定する。
//ほかにもいろいろある。

result = Number.parseInt('1010', 2);
console.log(result);
//2進数とかを扱える。第二引数を8とかにしたら8進数にできる

Number.isNaN(NaN);
//NaNとNaNで比較できなので、NaN === NaNかを調べたいときはこれ使う。
Number.isFinite(Infinity);
//普通の数字を入れるとtrue、NaNやInfinityを入れるとfalseになる

Math.floor();
//小数点の端数処理。負の数に合わせる。
Math.trunc();
//小数点を単純に消す。切捨て
Math.ceil();
//切上げ
Math.round();
//四捨五入
Math.random();
//ランダムな数字を返す
Math.max();
//引数に与えられた数のなかで一番大きい数を返す
Math.min();
//引数に与えられた数の中で一番小さい数を返す。

let bigInt = 1234567890n;
bigInt = BigInt(1234567890);
bigInt = BigInt('1234567890');
//BigInt型のデータになる。新しいプリミティブ型
console.log(typeof bigInt);
//いくらでも大きな数字でも対応できる。どんな数も扱うことができる。
//少数は無理。普通の数字と混ぜることもできない。

let date = new Date();
//現在時刻のオブジェクトを作る。
//引数に文字列で
//年（4桁）-月（2桁）-日（2桁）T時（2桁）:分（2桁）:秒（2桁）+09:00（日本時間指定）
//とするとタイムゾーンと日時指定できる。
//整数をカンマ区切りで入れても日時指定できるが、タイムゾーンの指定はできない。
console.dir(date);

date.getTime();
//タイムスタンプをとってこれる。
date.getFullYear();
//年をとってくる。
date.getMonth();
//月を撮ってくる。
date.getDate();
//日をとってくる。
date.getHours();
//時
date.getMinutes();
//分
date.getSeconds();
//秒
date.getMilliseconds();
//ミリ秒
date.getDay();
//曜日
date.setDate(date.getDate() + 1);
//日付指定。今dateには現在日時が入っており、+1なので明日。

let apple = '   I like apples    ';
result = apple.slice(0, 5);
//0~5番目までの文字列のみ表示。
result = apple.trim();
//文字列前後の邪魔なスペースを消してくれる。
result = apple.split('');
//文字列を配列に変換
result = apple.replace('like', 'love')
//置き換える。最初に一致した要素のみ置き換える
result = apple.startsWith('I like')
//最初が指定した文字列で始まっていればtrueになる。
result = apple.endsWith('apples')
//終わりが指定した文字列で始まっていればtrue
result = apple.indexOf('apples')
//指定した文字のインデックス番号が返る。存在しなければ-1が返る。
result = apple.lastIndexOf('l')
//後ろから検索
result = apple.includes('apples')
//指定した文字列が存在すればtrue

let regexp = new RegExp('apples');
regexp = /apples/i;
//正規表現。/iをつけると大文字と小文字を区別しない。
result = regexp.test('I like apples');
//指定した文字列の中に正規表現で指定した文字列とマッチするものがあればtrue
regexp = /[-.\w]+@([-\w]+\.)+[-\w]+/g;
//regexp.lastIndex = 5;
//テストメソッドの引数の5番目の文字から見る。デフォルトは0
let mail = 'test@test.com'
result = regexp.exec(mail)
//詳細な情報を返してくれる。
result = mail.search('@');
//文字列のインデックス番号を返す。正規表現を使うことができる。
result = mail.match(regexp);
//gフラッグをつけていると、文字列の中で正規表現とマッチしたものを配列にしてくれる。
result = mail.matchAll(regexp);
//上の詳細版
result = mail.replace(/@/g, '*');
//gフラッグをつけるとマッチするすべての文字列を変更できる。


result = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date());
//いいかんじにフォーマットしてくれる。
//'ja-JP'で日本語指定。'ja-JP-u-ca-japanese'で和暦。
console.log(result);

let map = new Map([
  ['name', 'rita'],
  ['age', 30],
  ['gender', 'woman'],
]);
//キーとバリューで値を保存する。
//イテラブルオブジェクトならOK
map.set('city', 'tokyo');//追加
result = map.get('city');//値の取得
result = map.has('city');//要素が存在するかどうか
result = map.delete('city');//特定の要素の削除
//result = map.clear();//全部削除
result = map.size;//Mapの要素数を返す
map.forEach((value, key, map) => {
  console.log(value, key, map)
});
//挿入順で処理。ループ。
console.log(map)

let set = new Set(['hello', 3, {name: 'rita'}, ['music']])
set.add({name: 'Jack'}).add(true);
//値の追加
set.add('hello');//重複する値は無視される。
console.log(set);

let rita = {name: 'rita'}
let weakMap = new WeakMap([
  [rita, 'hokkaido']
])
//キーにオブジェクトが設定されていて、アクセスできなくなった時に要素から消してくれる。
//元のオブジェクトがガベージコレクトされたときに削除する。

let weakSet = new WeakSet([rita]);
//オブジェクトしか入れられない。
//他からアクセスされなくなるとガベージコレクトされる。
console.log(weakSet);
// function () {
import {A} from './A.js'
//A.jsのよみこみ
console.log(A);
//A.jsで指定した定数A
//モジュールはデフォルトでstrictモードになる
console.log(this);
//undefined
//モジュールでthisを使うとundefinedになる。
const hello = 'hello'
//モジュールで定義した変数や定数は他のところからアクセスできなくなる。
var banana = 'banana';
//モジュール内で定義した時はグローバルオブジェクトに登録されない。
function add() {}
//モジュールなのでグローバルオブジェクトに登録されない。
//letで関数オブジェクトを定義したかのように動く。
await 1;
//async関数を使わないでawaitつかえる。トップレベルawait
//awaitで処理が止まると他の処理も止まっちゃう。
//} ブロック文や関数で囲われているイメージ

import {letA as lA, funcA} from './A.js'
//使いたい関数等を複数指定する
//asを使って別名を付けられる
import * as A from './A.js'
//全部まとめてimport。asでAを定数として設定するみたいな。
console.log(A.letA);
//A.jsで定義した関数等にアクセスできる。いちいちA.を書かないといけないので面倒。

import A from 'A.js'
//デフォルトimport。Aが定数として扱われる。
import A, {letA} from './A.js'
//デフォルトimportと名前付きimportを同時にやる。

if (true) {
  let result = await import('./A.js');
  console.log(result)
}
//動的インポート
//必要な時だけファイルを読み込む。非同期処理

import data from './data.json' with {type: 'json'};
//インポート属性にJsonを指定した場合はデフォルトインポートしか使えない。
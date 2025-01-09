////alert('hello');
//let result = confirm('are you sure?');
//Ok or Cancelのアラートがでて、Okを推すとtrueが返る。
//result = prompt('name');
//文字列を入力して受け取れるアラートがでる。
//console.log(result)

navigator.clipboard
//OSやブラウザの情報とかが入ってるオブジェクト
//.clipboardでクリップボードに入ってるものを文字列で受け取ったり
//クリップボードに張り付けたりできる。
//.credentialsで保存されているPWなどを取得できる。
//.geolocation.getCurrentPosition(position => console.log(position))
//ブラウザの存在する場所を取得

location.port
//ポート番号がわかる
//location.assign('URL')
//Webページに行ける。

history.length
//そのブラウザで進んだり戻ったりできるページ数

let url = new URL('', 'https://developer.mozilla.org/hello');
url.pathname = 'en-US/search';
url.search = '?q=javascript';
//URLにアクセスして情報をみたりできる。
let result = url.searchParams.get('q');
//javascriptを取り出すことができる。検索クエリ。
result = url.searchParams.set('page', '2');
//searchの項目が"?q=javascript&page=2"の検索クエリになる。getに追加。

let timerId = setTimeout(() => {
  console.log('hello')
}, 1000)
//何秒後に指定の処理をさせる。秒数はミリ秒で指定する。第二引数に秒数。
//指定秒数待ってから実行する。
//第二引数を0にしても、これの後に記述されているプログラムが実行されてから
//setTimeout内のプログラムが実行される。
clearTimeout(timerId);
//各setTimeoutに降られてるIDを引数に入れる。
//setTimeoutを辞められる。
//setTimeoutに降られてるIDがわからないときは変数に入れて指定
setTimeout(() => {
  clearInterval(timerId);
  //待機時間をなしにできる。
}, 3000)

console.log('apple');
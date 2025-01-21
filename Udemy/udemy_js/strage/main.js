localStorage.setItem('name', 'John');
//ブラウザ内にデータを保存できる
//キーバリューで引数に値を与える。
//文字列のデータしか保存できない。
//devツールで保存されている値を観ることができる。
//ずっと残り続けるデータ。
//オリジンが同じところで共有される。オリジンが違うと共有されない。
localStorage.removeItem('name');
//データの削除
localStorage.clear();
//すべてのデータを削除

sessionStorage.setItem('name', 'John');
//セッションストレージに保存される。
//ローカルストレージと同じプロパティを持っている。
//ブラウザを閉じたりタブを閉じたらデータが消える。

document.cookie = 'name=John'
//文字列で"キー=バリュー"で保存
let result = document.cookie.split('; ').forEach(cookie => {
  let [key, value] = cookie.split('=');
  if (key === 'name') {
    result = value;
  }
});
//すべてのクッキーを文字列として取得
//個別で取得したいときは、文字列を解析するしかない。
//ホストごとにデータを保存している。ホストが同じだったらクッキーはすべて共有される。
document.cookie = 'name=John; max-age=3';
//3秒たったらこのクッキーを削除するという設定。
let date = new Date();
date.setDate(date.getDate() + 1);
document.cookie = `name=John; expires=${date.toUTCString()}`;
//指定した日付にクッキーを削除する。
document.cookie = 'name=John; path=/items';
//現在アクセスしているURLのパスが指定したパスと同じ時のみクッキーにアクセスできるようになる。
document.cookie = 'name=John; domain=mozilla.org';
//今のページのドメインか今のページがサブドメインになるもののみ指定できる。
document.cookie = 'id=123; secure';
//https通信の時のみクッキーの保存・取得ができる。
document.cookie = 'id=123; httpOnly';
//http通信以外でクッキーを使えなくする
document.cookie = 'id=123; samesite=None; secure';
//CSRF対策。NoneだとHTTP通信をしたときに普通にクッキーを送信できるが、secure属性もつけなきゃならない。
document.cookie = 'id=123; samesite=Strict';
//今いるホストと違うホストに通信するときにクッキーが送られなくなる。
document.cookie = 'id=123; samesite=Lax';
//ほとんどStrictとおなじ。ゆるめ
result = encodeURIComponent('jo;hn')
//どんな文字列でもクッキーで扱える
result = decodeURIComponent(result);
//クッキーから文字列に戻す
//クッキーは属性を設定できる。後で書いたもので上書きされる。

let openRequest = indexedDB.open('shop');
//DBをつくる。Promiseには対応していない。
//openRequest.result
openRequest.addEventListener('upgradeneeded', () => {
  console.log('success')
  let db = openRequest.result;
  let books = db.createObjectStore('books', {
    autoIncrement: true,
    //これを付けるとオブジェクトストアを作るときにキーを指定しなくてよくなる。
    keyPath: 'id',
    //指定した文字列をオブジェクトストアのプロパティの第一引数において、キーとしてあつかう。
  });
  books.createIndex('by_title', 'title', {
    unique: true,
    //一意のデータのみ使えるルールを設定
    multiEntry: true,
    //タイトルが配列になっていた時、配列の要素がそれぞれ別々のキーとして展開される。
  });
  //Booksに対応するオブジェクトストアみたいなものを作ってくれる。
  //もとのブックスのデータのtitleプロパティをキーにできる。
  db.createObjectStore('games');
  //オブジェクトストアを作る。upgradeneededの中でしか使えない。
  db.deleteObjectStore('game');
  //オブジェクトストアを削除する
  console.log(db);
});
//successやerrorが発生する直前に発生するイベント
//初めてDBを作り出す前に発生するイベント。
openRequest.addEventListener('success', () => {
  console.log('success')
  let db = openRequest.result;
  let transaction = db.transaction('books', 'readonly');
  //配列も使える。操作するオブジェクトストアをしていする。データを取得するだけならreadonly
  //書きこみもするならreadwriteを指定する。
  let books = transaction.objectStore('books');
  //booksのオブジェクトストアを操作することができる。
  books.put({ title: 'JavaScript Guide' } );
  //データを追加。バリュー, キー。オートインクリメントつけてたら自動で自動でキーの設定できる。
  let request = books.add('JavaScript Guide', 0);
  //データを作成出来るが、すでに存在するデータだったらエラーがでる。
  request.addEventListener('error', (event) => {
    console.log(request.error.message);
    event.preventDefault();
    //トランザクションの中止を止めてくれる。
  })
  request = books.get(0);
  request = books.get(IDBKeyRange.bound(1, 4));
  //取得するデータの範囲指定
  request = books.getAll(IDBKeyRange.bound(1, 4));
  //指定した範囲のデータを全部取得
  request = books.getAll(IDBKeyRange.lowerBound(1, true));
  //1以上を全部。trueをつけると1よりも大きいものという指定。
  request = books.getAll(IDBKeyRange.upperBound(4, true));
  //4以下すべて。trueで4よりも小さいもの。
  request = books.getAllKeys(IDBKeyRange.bound(1, 4));
  //指定された範囲のキーだけ取得。
  request = books.getKey(IDBKeyRange.bound(1, 4));
  //指定された範囲で最も小さいキーを取得
  request = books.count(IDBKeyRange.upperBound(4, true));
  //データの数を数える。
  let titleIndex = books.index('by_title');
  titleIndex.get('JavaScript Guide');
  //タイトルがJavascriptGuideのデータを取得できる。
  request = books.openCursor();
  //データのループ処理
  //requestをイベントターゲットにsuccessイベントが発生する。
  request.addEventListener('success', () => {
    cursor = request.result;
    console.log(cursor.key, cursor.value);
    cursor.continue();
    //呼び出されたときにもう一回requestイベントを対象にsuccessイベントを発生させる。
    //次のデータで実行される。
  })
  request.addEventListener('success', () => {
    result = request.result;
    console.log(result);
    //JavaScript Guide
    //データを取得できる。
    //transaction.abort();
    //明示的にトランザクションを中止。
  })
  //books.delete(0);
  //データ削除
  //books.clear();
  //データ全削除
  transaction.addEventListener('complete', () => {
    console.log('complete');
  })
  //トランザクションが全部成功したときに発生するイベント
  transaction.addEventListener('abort', () => {
    console.log('abort');
  })
  //abortになったときに発生
  console.log(db);
});
//DBの準備が整ってからDBを呼び出す。
openRequest.addEventListener('error', () => {
  console.log('error')
  let error = openRequest.error;
  console.log(error.message);
});
//エラー処理

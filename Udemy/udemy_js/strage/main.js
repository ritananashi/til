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
//クッキーは属性を設定できる。後で書いたもので上書きされる。
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    Accept: 'text/plain',
  },
  body: 'hello',
});
//引数に指定したURLと通信ができる。
//呼び出した瞬間にHTTPリクエストが送られる。
let json = '[{"name": "Tom", "age": 29}]';
let result = JSON.parse(json);
//JSON形式のデータをJSの本物のオブジェクトに変換する。
JSON.stringify(result)
//JSのオブジェクトをJSONのオブジェクトに変換する
let input = document.querySelector('input');
input.addEventListener('change', () => {
  let file = input.files[0]
  let formData = formData();
  //これをfetchのBodyに設定すれば、自動的にBodyのデータがマルチパート/フォームのデータの形になる。
  formData.append('user', 'rita');
  formData.append('profile', file);
  //データを追加できる。
  result = formData.has();
  //引数に指定したデータがあるかどうかを調べる
  result = formData.get();
  //データを取得
  result = formData.delete();
  //データの削除
  let form = document.querySelector('form');
  formDate = new formData(form);
  //フォームから送信された値を初期値として使用できる。
  //inputにname属性を指定する必要がある。
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: file
  });
  let objectURL = URL.createObjectURL(file);
  let img = document.querySelector('img');
  img.src = objectURL
  //画像を取得して表示できる
  img.addEventListener('load', () => {
    result.revokeObjectURL(objectURL);
  });
  //これでメモリ上の画像のURLを削除できる。
  //セキュリティ的にも安全
  console.log(file);
})
//Blobを送信

(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  result = await response.arrayBuffer();
})();
//ヘッダーの部分をすべて受け取ったらresolveされる。
//body部分を受け取りたかったらarrayBufferのところにawaitをつけておかないと読み込まれたない可能性がある。

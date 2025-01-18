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
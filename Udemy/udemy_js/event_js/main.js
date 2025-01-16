const button = document.querySelector('button');
//button.onclick = () => {
//  alert('click');
//};
//ボタンをクリックしたときにアラートを表示する。
//button.onclick = nullでイベントを消せる。
//htmlの方に属性として直接定義することもできる。
//復讐の処理を定義することができない。
//button.getAttribute('onclick');
//ゲッターで属性を取得できる
//button.setAttribute('onclick', 'console.log("clicked! fromconsole")');
//セッターで変更可能。

const clickListener = () => {
  console.log('clicked! from addEventListener')
}
button.addEventListener('click', clickListener)
button.addEventListener('click', () => {
  console.log('clicked! from again')
})
//こっちなら複数のイベントを設定できる。
//onclickとは別に扱われる。
button.removeEventListener('click', clickListener)
//イベントを消すときは定義した関数オブジェクトを指定する必要がある。
button.addEventListener('click', clickListener, {
  once: true,
});
//一度実行したらイベントを削除

button.addEventListener('click', (event) => {
  console.log(event);
});
//関数にパラメーターをいれることでパラメーターの中身を参照できる。

button.addEventListener('click', function(event) {
  console.log(this);
});
//thisのなかみはbutton要素

const input = document.querySelector('input');
let captureEvent;
let targetEvent;
let bubblingEvent;

input.addEventListener('input', (event) => {
  console.log(event.currentTarget);
  targetEvent = event;
  console.log('input from input in the target phase')
})
document.body.addEventListener('input', () => {
  console.log('input from body in the bubbling phase')
})
document.addEventListener('input', () => {
  console.log('input from document in the bubbling phase')
})
window.addEventListener('input', (event) => {
  console.log(event.currentTarget);
  bubblingEvent = event;
  console.log('input from window in the bubbling phase')
})
//ブラウザはイベントが発生すると、ウィンドウまでの親要素についているすべての
//そのイベントに対するイベントリスナーを順番に実行する。
//この現象をバブリングと呼ぶ。

input.addEventListener('input', () => {
  console.log('input from input in the target phase again')
}, {capture: true})
document.body.addEventListener('input', () => {
  console.log('input from body in the capture phase')
}, {capture: true})
document.addEventListener('input', () => {
  console.log('input from document in the capture phase')
}, {capture: true})
window.addEventListener('input', (event) => {
  event.stopPropagation();
  //このメソッドだけじっこうして、ほかのキャプチャリングフェーズにもバブリングフェーズにも行かない、
  //このメソッドだけで終わりにするという関数
  //ターゲットフェーズにもつけられる。
  console.log(event.currentTarget);
  captureEvent = event;
  console.log('input from window in the capture phase')
}, {capture: true})
//キャプチャリング。
//{capture: true}をつけることでキャプチャリングフェーズの時に実行
//キャプチャー→（ターゲット）→バブリングの順で実行される。
//{capture: true}じゃなくてtrueだけでも指定できるけど、これだと他のオプションを設定できない。
//キャプチャーをtrueにして設定したイベントを削除したいときは、removeEventListenerの第三引数に{capture: true}を指定

const aEl = document.querySelector('a');
aEl.addEventListener('click', (event) => {
  console.log(event.cancelable);
  event.preventDefault
})
//preventDefault
//デフォルトの挙動を無視する
//デフォルトの挙動がないものは無視できない。
//cancelable　→　挙動がキャンセルされてたらtrue
//.onclick = () => false;でもデフォルトの挙動を止めることができる。
//HTMLにonclick="return false"属性をつけてもデフォルトの挙動を止めることができる。

document.documentElement.style.height = '1500px';
window.addEventListener('wheel', (event) => {
  for (let i = 0; i < 1e9; i++);
  console.log(event)
}, {
  passive: true
});
//処理が重くてもスムーズにスクロールできる。
//処理が軽くても重くても実装しといたほうがいい

document.addEventListener('my-event', (event) => {
  console.log(event);
});
const myEvent = new Event('my-event', {
  bubbles: true, //デフォルトでバブリングがfalseになっているので、バブリングさせたいときはtrueを設定する。
  cancelable: true, //デフォルトでfalseになっているので、preventDefaultを使いたいときはtrueを設定する
});
//Event属性はnewで作ることができる
const myClickEvent = new PointerEvent('click', {
  bubbles: true,
  cancelable: true,
});
//既存のイベントを第一引数に設定することもできる。
//PointerEventがクリックイベント用オブジェクト
//既存のイベントを使ってイベントを発生させても、デフォルトの挙動は起こらない。
//MouseEventで作った場合だけ、後方互換の関係でデフォルトの挙動が起こる。
const myCustomEvent = new CustomEvent('click', {
  bubbles: true,
  cancelable: true,
  detail: { message: 'hello'},//好きな値を入れられる。
});
//自由にイベントを作れる。
document.dispatchEvent(myEvent);
//自分で作ったイベントを発生させる
//引数にイベントオブジェクトを渡す。

/*
mousedownイベント
マウスをクリックしたときにイベントが発生する。左右どっちのマウスでもできる
mouseupイベント
マウスをクリックして放したときにイベントが発生する。左右どっちでも発生する。
dbclickイベント
同じ要素に対してクリックイベントが2回起こったら発生する
contextmenuイベント
右クリックで発生
mousemoveイベント
マウスが動いたとき
mouseover
マウスがホバーしたとき
mouseout
マウスがホバーしたものから離れたとき
mouseenter
マウスが要素に入ったら発生
mouseleave
マウスが要素から離れたら
touch系イベント
スマホ用
pointer系イベント
マウス系イベント
*/
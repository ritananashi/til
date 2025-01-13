let result = document.documentElement;
//HTML要素を取得
result = document.head;
//head要素を取得
result = document.body;
//body要素を取得
result = document.body.childNodes[0].childNodes;
//子ノードを指取得
//.bodyなどで指定すれば、その要素内の子ノードを取得
//[0]等で要素の指定したインデックス番号の子ノードを取得
result = document.body.childNodes[0].hasChildNodes();
//子ノードを持っていればtrue
result = document.body.firstChild;
//子ノードの最初のノードを取得
result = document.body.lastChild
//子ノードの最後のノードを取得
result = document.body.parentNode;
//親ノードを取得
result = document.body.nextSibling;
//兄弟ノードを取得
result = document.body.previousSibling;
//一つ前の兄弟ノードを取得
result = document.body.children;
//子ノード内の要素のみ取得
result = document.body.firstElementChild;
//子ノード内の最初の要素のみ取得
result = document.body.lastElementChild;
//子ノード内の最後の要素を取得
result = document.documentElement.parentElement;
//親ノードの要素のみ取得。documentElementでHTML要素の親ノードを取得しようとしても、
//ドキュメントノードであって要素ノードではないので、nullになる。
result = document.head.nextElementSibling;
//兄弟ノードの要素のみ取得
result = document.body.children;
//コンソール上でresult['title']とするとidにtitleが指定されたHTMLタグを取得できる。
result = document.body.querySelector('#title');
//引数にCSSセレクタを指定して要素を取得。直接タグを指定することもできる。最初にマッチしたものだけ返す
//.querySelectorの左にある子孫ノードから指定された要素を探す。
result = document.body.querySelectorAll('#title');
//引数とマッチする要素をすべて返す
result = document.body.closest('html');
//祖先ノードもしくは自分の中で下から探していって、最初にマッチしたものを返す。子ノードに一番近い要素を返す。
result = document.body.matches('body');
//マッチする要素が有ったらtrue
result = document.contains(document.body);
//DOMノードを引数に指定し、ノードがあればtrue。
result = document.getElementById('title');
//引数と同じIDを持つ要素を取得
result = document.getElementsByName('hello');
//引数と同じname属性をもつ要素を取得
result = document.getElementsByTagName('p');
//タグの名前から要素を取得
result = document.getElementsByClassName('apple');
//クラスの名前から要素を取得
result = document.links;
//href属性のあるものを取得
result = document.forms;
//すべてのフォームをとってくる
result = document.images;
//すべての画像を取ってくる
result = document.scripts;
//すべてのスクリプトタグを取ってくる
result = document.body.innerHTML;
//bodyタグの要素をすべて文字列でHTMLのような形で表示。
document.body.innerHTML = '<h1>Hello</h1><div>I am Tom</div>';
//innerHTMLの左のDOMノードの子孫ノードをすべて削除して、右のHTMLの文字列に対応するDOMノードを新しく作って置き換える。
document.querySelector('div').insertAdjacentHTML('beforeend', '<p>I am 30 years old.</p>')
//HTMLを要素の中に挿入する。
//beforebegin => 指定された開始タグの一つ前
//afterbegin => 開始タグの一つ後
//beforeend => 閉じタグの一つ前
//afterend => 閉じタグの一つ後
document.body.innerHTML = '<!-- comment --><h1>Hello</h1><div>I am Tom</div> How are you?';
result = document.body.textContent;
//要素の中身のタグをすべて取り除いたテキストのみが返る。
result = document.body.childNodes[0].textContent;
//childNodesの指定したインデックスの要素のテキストを取得
//コメントとかも取得できる。
document.body.textContent = '<h1>hello</h1>';
//子孫ノードの要素を全部削除して右側と入れ替える
//タグも文字として認識するのでXSSの心配がない。
//ユーザーから受け取った何かを表示したいときはtextContentを使うといい。
document.body.innerHTML = '<!-- comment --><h1>Hello</h1><div>I am Tom</div> How are you?';
document.body.insertAdjacentText('beforeend', '<h2>Rita</h2>');
//第一引数で死体した場所に第二引数の内容を追加。
//これもタグを文字として認識するのでXSS対策になる。
let p = document.createElement('p');
let text = document.createTextNode('text');
let comment = document.createComment('comment');
//ノードを作成する。第一引数に要素名。
p.innerHTML = 'Hello';
p.textContent = 'hello';
p.append(text);
document.body.innerHTML = '<div>I am Tom</div>';
//document.querySelector('div').append(p);
//指定した要素内に第一引数で指定したノードを挿入する。閉じタグの前に入る。
//document.querySelector('div').prepend(p);
//開始タグの後に挿入。
//document.querySelector('div').before(p);
//開始タグの前に挿入
document.querySelector('div').after(p);
//閉じタグの後ろに挿入
//すべて引数に文字列を指定することもできる。
//引数にタグを渡されても、文字として認識する。

p = document.createElement('p');
p.textContent = 'hello';
document.body.innerHTML = '<div>I am Tom</div>';
document.querySelector('div').append(p);
let p2 = p.cloneNode(true);
document.querySelector('div').prepend(p);
//同じ要素を追加しようとしても、後に記述した方に移動する、という形になってしまう。
//cloneNodeでノードを複製できる。引数にtrueを渡すと、中身も全部コピーできる。
p.remove();
//指定した要素を削除する。
p2.replaceWith(document.createElement('p'), text, comment, 'apple', '<p>banana</p>')
//指定した要素を引数で上書き

result = document.nodeType;
//そのノードがどんなノードかを数字で返す。9がドキュメントノード
result = document.body.nodeName;
//要素のタグを大文字で返してくれる。
result = document.body.id;
//エレメントインターフェースにid属性が有ったらその属性値を返す。
result = document.body.attributes;
//要素の属性を一覧でみれる
result = document.body.getAttribute('data-myarrt');
result = document.body.dataset.type;
//独自で属性を作りたいときはdata-を頭につけるdata属性を使うといい。
//datasetを使うとdata-がついてる属性を一覧で出してくれる。
//getAttributeのdata-専用みたいな。

result = document.styleSheets;
//CSSOMがみれる。
//CSSの｛｝が1つのCSSStyleRule
document.styleSheets[0].cssRules[0].style.color = 'red'
//CSSの変更。ほとんど使わない。
document.body.innerHTML = '<p class="text-green bg-yellow">hello</p>';
result = document.querySelector('p').className;
document.querySelector('p').className = 'text-red bg-blue'
//CSSのクラスを書き換える。あんまり使わない。
document.querySelector('p').classList;
//こっちつかう
document.querySelector('p').classList.remove('bg-blue');
//指定した要素から引数に指定したCSSを削除
document.querySelector('p').classList.add('bg-blue');
//クラスを追加する
document.querySelector('p').classList.toggle('bg-blue');
//引数に指定したクラスがあったら削除、なかったら追加。
document.querySelector('p').classList.contains('bg-blue');
//引数に指定したクラスがあったらtrue
document.querySelector('p').style;
document.querySelector('p').style.color = 'yellow';
//色変え
document.querySelector('p').style.backgroundColor = 'pink';
//CSSはキャメルケースで指定する。
document.querySelector('p').style.width = '300px';
//値はすべて文字列で指定する。設定したものを削除したいときは空文字にする。
result = getComputedStyle(document.querySelector('p'));
//CSSStyleDeclarationが取得できる。
//getComputedStyleで取得したCSSStyleDeclarationのオブジェクトは変更不可
document.body.innerHTML = '<div class="box"></div><p style="margin: 1000px 0px">this is a pen</p>';
result = document.querySelector('div').getBoundingClientRect();
//DOMRectがみれる。
const messageEl = document.createElement('p');
messageEl.textContent = 'message!';
document.body.append(messageEl);
messageEl.style.position = 'absolute';
messageEl.style.top = `${
  document.querySelector('div').getBoundingClientRect().bottom
}px`;
messageEl.style.left = `${
  document.querySelector('div').getBoundingClientRect().left
}px`;
document.elementFromPoint(300, 300);
//x, y軸で指定した要素を取得。
//指定した場所にあるものを取得する。
result = document.querySelector('div').clientWidth;
//指定した要素の内側の横幅を取得
result = document.querySelector('div').clientHeight;
//指定した要素の内側の高さ
result = document.querySelector('div').clientLeft;
//指定した要素のボーダーの横幅
result = document.querySelector('div').scrollHeight;
//スクロールも含めた高さを取得

console.dir(result);

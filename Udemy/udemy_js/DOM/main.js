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
console.dir(result);

let fruits = ['apple', 'banana']
console.log(fruits)
//配列＝オブジェクト
//内部的にオブジェクトを作っているだけ。

fruits = new Array('apple', 'banana');
console.log(fruits)
//これでも新しく配列を作れる。
//数字一つのみを引数に入れると、lengthのみが指定された空の配列が出来上がる。

fruits = ['apple', 'banana', 'grape'];
const newFruits = [...fruits];
fruits.push('orange');
console.log(newFruits, fruits)
let sum = (...nums) => {
  console.log(nums);
};
let nums = [1, 2, 3, 4]
//sum(...nums);
//スプレット構文
/*
コピーできる。
...をつかうと、レストパラメータの値に配列を入れても、ひとつづつ取り出してくれる。
...を使わないと配列の中に配列が入る処理になる。
*/

const rita = [
  'rita',
  20,
  'women',
  ['game', 'anime'],
  { first: 'rita', last: 'nanashi'}
];
let [, , gender, [game, anime], { first: firstName}] = rita;
console.log(gender, game, anime, firstName);
//women game anime rita
//分割代入

let items = [1, 2];
items.push(3, 4)
//配列末尾に追加
items.pop();
//配列から末尾の要素を取り除く。
items.unshift(-1);
//配列の先頭に追加する
items.shift();
//配列の先頭の要素を削除する。

arrayLikeObject = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  length: 10,
};
const realArray = Array.from(arrayLikeObject);
console.log(realArray, arrayLikeObject)
//Array.from
/*
オブジェクトから本物の配列を作る。
lengthに入ってる数分の要素が入った本物の配列を作る。
*/

items = [1, 2, 3, 4]
items.splice(0, 2);
console.log(items);
//指定した範囲を削除
items.splice(1, 0, 1.1, 1.2, 1.3);
//指定した場所に追加
//1の前に1.1, 1.2, 1.3が入る。
//toSplicedは要素を操作した新しい配列を作り出す。

items = [1, 2, 3, 4]
items.fill(0);
console.log(items);
//配列内の要素をすべて引数で埋める。
//第二引数でスタート地点を決めることができる。
//第三引数で終わりの地点を決めることができる。

items = [0, 1, 2, 3, 4]
items.copyWithin(0, 2, 4);
console.log(items);
//配列内の要素をコピーして、他の要素に上書きする。
//第一引数で上書きしたい要素、第二引数でコピー範囲の開始位置、
//第三引数でコピー終了範囲（コピーに含まない範囲）を指定
//（0, 2, 4）だと、インデックス0の要素の場所に、インデックス2からインデックス3
//の要素で上書きする。（4は終了位置なので入らない）

items = [0, 1, 2, 3, 4]
items.reverse();
console.log(items);
//配列内の要素を反転させる。
//toReversed()を使えば新しく要素を反転させた配列を作れる。

items = [10, 1, 2]
items.sort();
console.log(items);
//1, 10, 2
//すべて文字列に変換してから辞書的にソートする。
//1（いち）、10（いちぜろ）、2（に）みたいにソートされてしまっている。

items = [0, 1, 2, 3, 4]
let result = items.slice(2);
console.log(result);
//配列内の要素を切り取る。

items = [0, 1, 2, 3, 4]
result = items.concat([5, 6, 7]);
console.log(result);
//配列同士をくっつける。

items = ['a', 'b', 'c']
result = items.join('');
console.log(result);
//配列の要素がカンマ区切りで全部くっついた文字列になる。
//引数に区切る記号を指定できる。なにもいれないと('')区切り文字はなくなる。

items = ['apple', 'banana', 'grape', 'banana']
result = items.indexOf('banana');
console.log(result);
//引数で指定した値と同じ要素のインデックス番号が返る。
//第二引数に数字を入れるとその数字のインデックス番号から調べる。

items = [0, 1, 2, 3, 4];
result = items.map((item, index, array) => {
  //console.log(item, index, array);
  return item * 10
});
console.log(result);
//新しい配列を作って、関数を要素ごとに実行して新しい配列に入れる。

items = [0, 1, [2]];
result = items.flat();
items = [0, 1, 2, 3, 4];
result = items.flatMap((item) => [item * 10])
console.log(result)
//2次元配列を1次元配列にする。
//flatMapはflat()とmap()を組み合わせたやつ。

items = [0, 1, 2, 3, 4, 5, 6];
result = items.filter((item) => {
  return item % 2 === 0;
});
console.log(result)
//要素をひとつづつ検証してtrueだったら新しい配列に追加し、
//falseだったら追加しない。

items = [1, 2, 3, 4, 5, 6];
result = items.reduce((previousItem, item) => {
  return previousItem + item
}, 0//初期値
);
console.log(result)
//配列内の要素をたす。
//最初にpreviousItemに第二引数の0が入り、itemに配列の最初の要素が入る。
//2回目からのループでは、前回の合計数がpreviousItemに入り、itemに2番目の要素が入る。

items = ['apple', 'banana', 'grape', 'banana'];
result = items.find((item) => {
  return item === 'banana'
});
console.log(result)
//要素を一個ずつ取り出して、trueになるところでループを終えて
//itemの値を返す。
//findLastだと後ろから調べる。

items = [0, 1, 2];
result = items.every((item) => {
  return item < 5
});
console.log(result);
//すべての要素がtrueだったらtrueを返す。
//一度でもfalseになったらfalseが返る

items = [0, 1, 2];
result = items.some((item) => {
  return item < 5
});
console.log(result);
//配列内の要素が一つでもtrueだったらtrueを返す。
//一度でもtrueになったらtrueが返る

items = ['apple', 'banana', 'grape'];
items.forEach((item, index, array) => {
  console.log(item, index, array);
});
//配列内の要素をひとつづつ返す。

items = ['apple', 'banana', 'grape'];
console.log(items.at(-1));
//引数に入れた値とおなじインデックス番号の要素を返す。
//-も使える。-だと後ろから。

items.copyWithin(-2, 'orange');
//-を使って配列の要素を書き換えたいときに使う。
//元の配列は変えない。

items = [1, 2, 3, 4, 5, 6];
const obj = Object.groupBy(items, (item) => {
  if (item % 2 === 0) {
    return 'even';
  }
  return 'odd';
});
console.log(obj);
//配列をグループ化する。
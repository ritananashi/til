let fruits = ['apple', 'banana']
console.log(fruits)
//配列＝オブジェクト
//内部的にオブジェクトを作っているだけ。

fruits = new Array('apple', 'banana');
console.log(fruits)
//これでも新しく配列を作れる。
//数字一つのみを引数に入れると、lengthのみが指定された空の配列が出来上がる。
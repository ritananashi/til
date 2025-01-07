let count = 1.23456;
let result = count.toFixed(2);
console.log(result)
//少数の桁数を指定する。
//ほかにもいろいろある。

result = Number.parseInt('1010', 2)
console.log(result)
//2進数とかを扱える。第二引数を8とかにしたら8進数にできる

Number.isNaN(NaN)
//NaNとNaNで比較できなので、NaN === NaNかを調べたいときはこれ使う。
Number.isFinite(Infinity)
//普通の数字を入れるとtrue、NaNやInfinityを入れるとfalseになる
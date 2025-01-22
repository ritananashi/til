export const A = 'A'
export let letA = 'letA'
export var varA = 'varA'
export function funcA() {}
export function* generatorFuncA() {}
export async function asyncFuncA() {}
export async function* asyncGeneratorFunc() {}
export class ClassA {}

export {generatorFuncA, asyncFuncA}
//これでも他で使いたいやつを設定できる。

export default 'A';
//デフォルトexport
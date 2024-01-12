/*
strice-mode-apply(엄격 모드 적용)
전역의 선두 또는 함수 물체의 선두 'use-strict'를 추가한다.

*/

function test(){
    'use strict';
    x = 10;

}

// test();
// console.log(x);

function test2(){
    y = 10;
}
test2();
console.log(y);
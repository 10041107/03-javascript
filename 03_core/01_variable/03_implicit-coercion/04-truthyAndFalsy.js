
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test;

console.log(!test);

let test2 = {
    a : null,
    b : 1
}

if(test2?.a){
    console.log("test");
}else{
    console.log("false");
}
console.log(test2.b && "a");
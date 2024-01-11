
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가 되는 값) 
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.


// 초기값이 할당되지 않았으므로 test의 값은 undefined입니다.
let test;


// ! 연산자는 불리언 반전을 수행합니다.
// test는 undefined이므로 !test는 true입니다.
console.log(!test);


// test2라는 객체를 선언하고,
// a속성에 null, b속성에 1을 할당합니다.
let test2 = {
    a : null,
    b : 1
}

// ?. 연산자는 옵셔널 체이닝 연산자입니다. test2 객체에 a 속성이 있으면 그 값을 반환하고, 없으면 undefined를 반환합니다.
// a 속성은 있지만, 그 값이 null이므로 false로 평가
// test라는 객체의 프로퍼티에 b의 값이 존재해?
if(test2?.a){
    console.log("test");
}else{
    console.log("false");
}


// 삼항 연산자를 사용한 조건문입니다.
// test는 undefined이므로 test.b는 undefined입니다. 따라서 false가 출력

// && 연산자는 논리곱 연산자로, 피연산자 둘 다 참일 때만 true를 반환합니다.
// test2.b는 1이므로 참입니다. 따라서 "a"가 콘솔에 출력됩니다.
// test라는 객체의 프로퍼티 b에 값이 존재하는 경우
console.log(test2.b && "a");
console.log("==================")
test.b ? console.log("true"): console.log("false");






let test3 = {
    fm : "sdddddddddddd"
}

test3();
// console.log(test?.b)
// 이 표현식은 JavaScript의 옵셔널 체이닝(?.) 연산자를 사용합니다.
// test가 null 또는 undefined이면, undefined를 출력하고 코드 실행을 계속합니다.
// 만약 test가 null 또는 undefined가 아니라면, test.b의 값을 출력합니다.

// // console.log(test.b)
// 이 표현식은 test가 null 또는 undefined일 때 오류를 발생시킵니다.
// JavaScript의test가 null 또는 undefined인데 그 속성 b에 접근하려고 하기 때문입니다.
// 이 경우, TypeError가 발생하며 코드 실행이 중단됩니다.

// = 인셉션 에러 예외 처리와 비슷한 기능으로 작동하는 듯
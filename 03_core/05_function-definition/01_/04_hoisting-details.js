//함수 선언문과 할당문의 차이
/*
자바는 동작이 순차적으로 진행됐지만, 자바스크립트는 이런 형태로 동작하기도 함. (=호이스팅. 아래 것을 끌어올린다)

//함수 선언문

1. 첫번째 라인에서 먼저 함수를 선언함
function test(){
    console.log("이거랑")
}

2. 아래 함수를 가져와서 갖다 붙임
function test(){
    console.log("이거중 어떤 것이 실행되는가?")
}

3. 변수 선언함
var variable;

4. 함수 실행시킴
test();

5.
variable = "ssssssssssss";

*/

test();
console.log(variable);


// 함수 선언문
function test(){
    console.log("이거랑")
}

function test(){
    console.log("이거중 어떤 것이 실행되는가?")
}

var variable = "ssssssssssss";

console.log(variable);

var variable;

/*
==========================
프로그램을 여기서부터 실행한다고 생각하자.

함수 할당문

1.
var funtest;

2.
console.log(funtest);


3.
funtest = () =>{
    console.log("1");
}

4.
funtest();

5.
funtest = () =>{
    console.log("2");
}

6.
funtest();



*/

console.log(funtest);

var funtest = () =>{
    console.log("1");
}
funtest();

var funtest = () =>{
    console.log("2");
}
funtest();
/*
자바스크립트 let은 동일한 변수명을 생성할 수 있다.
let funtest = () =>{
    console.log("2");
}
*/

//함수 선언문과 표현식

//함수 선언식
function a(){

};

//함수 할당식 중

//익명 함수 표현식
const b = function(){};

//기명 함수 표현식
const c = function d(){};
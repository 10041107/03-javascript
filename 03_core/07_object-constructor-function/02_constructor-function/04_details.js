/* node;js 스크립트의 최상위 레벨에서 this */
/*
최상위 scope에서 this가 {}로 출력되는 이유
common.js 모듈 시스템을 사용하는 node의 문제이기 때문이다.
node는 각 모듈이 자체의 독림된 스코프를 갖기 때문에 최상위 레벨의 코드 블록이 모듈 내에서 실행되어 this가 빈 객체 되는 것이다.
*/

console.log(this);
//모듈이 독립된 환경에서 실행되는 것 확인하기
console.log(this === module.exports);

//일반함수

function testFunction(){
// 스코프가 분리되면서 this는 상위 객체를 바라보게 되고
// global을 참조하는 상태가 된다.
    console.log(this);
}

testFunction();
// 화살표 함수 (Ex6)
const tests = () =>{
// 화살표 함수는 this를 갖지 않기 때문에
// 화살표 함수에서 호출하는 this는 상위 스코프의 this를 참조하게 된다.
// 이로 인해 최상위 상태의 this를 호출하게 되는 것이고 this는 상위 스코프의
// 객체를 참조하기 때문에 최상위 스코프의 상위가 존재하지 않아 this는 빈 객체({{}})가 출력되는 것이다.
    console.log(this);
};
// 화살표 함수 호출
tests();


// 브라우저의 상위 스코프 window
// node의 상위 스코피 golbal
// =============================================== 함수와 메서드의 차이 ============================

var func = function(){
    console.log(this);
}

const obj = {
    name : "a",
    method : func
};
console.log("=========== 함수 호출==========");
func();
console.log("============ 메서드 호출==========");
obj.method();




























/* 함수와 메서드의 차이 */
const test = {
    // getThis 함수는 test 객체 내에서 정의되었습니다. 따라서 이를 직접 test.getThis()로 접근해야 합니다.
    getThis: function () {
        console.log(this);
    },
    innerObject: {
        test: function () {
            // 수정됨: getThis 함수를 test 객체를 통해 직접 접근합니다.
            test.getThis();
        }
    }
};

// 수정됨: test 객체에서 getThis 함수를 직접 호출합니다.
test.getThis();

console.log("===================")

// 수정됨: innerObject.test 함수를 사용하여 innerObject 내에서 getThis를 호출합니다.
test.innerObject.test();


// ============== 메서드 내부의 this ================

const innerThis = {
    methodA : function(){
        console.log(this)},
        inner : {
            methodB : function(){
                console.log(this);
            }
        }
    }
innerThis.methodA();
innerThis.inner.methodB();


// ========================================= Object Lever Bind ============

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let john = new person("john", 30);
let risa = new person("risa", 40);

function getInfo(){
    return (`안녕하세요 ${this.name}이에요
    저의 나이는 ${this.age} 입니다.`);
}
// 전역 공간에 선언된 name와 age가 없기 때문에 undifined가 출력된다.
console.log(getInfo());

//this를 지정하는 것도 가능하다
const boundjohn = getInfo.bind(john);
console.log(boundjohn());

const boundrisa = getInfo.bind(risa);
console.log(boundrisa());

const 한솔카피 = {
    name: "한피",
    age : 20,
    getInfo : function(){
        console.log(`${this.name}의 나이는 ${this.age}`);
    }
}
한솔카피.getInfo();


const copy = 한솔카피.getInfo.bind(john);

copy();
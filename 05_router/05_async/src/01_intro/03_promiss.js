/*
promise는 콜백지오고가 같은 코드가 형성되지 않게(비동기 통신간에 순서를 정하기 쉽게)하는 방안으로
es6에서 도입되었다.
(현재 시점에서 es6가 지원되는 브라우저에서 작업하고 있다.)
*/

//내부적으로 비동기 처리를 하고 promiseㄹ르 반환하는 함수
const increase = (number) => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const result = number + 10;
    //     if (result > 50) {
    //       const e = new Error("NumberTooBig");
    //       return reject(e);
    //     }
    //     resolve(result);
    //   }, 1000);
    // });
  };
//   /*
//     promise객체 생성 이유
//     1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하게 resolve및 rejact를 제공한다.
//     2. promise객체가 제공하는 메소드를 사용하기 위한(콜백 지옥 상황을 해소해주기 때문(가독성이 좋음,
//         메소드 체이닝 방식 제공))


// */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = 0 + 10;
      if (result > 50) {
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  
/*
increase함수 호출 후에는 promise가 반환된다.
이 promise는 resolve함수에 던져진 인수를 기억하고 있다.
이 promise를 통해 then함수를 호출하고 던져지는 롤백 함수의 인수로 기억했던
resolve함수의 인수를 넣어준다.
*/
console.log(increase(0));

increase(0)
.then(number =>{
    console.log(number);
    return increase(number);
}).then(number =>{
    console.log(number);
    return increase(number);
}).then(number =>{
    console.log(number);
    return increase(number);
}).then(number =>{
    console.log(number);
    return increase(number);
}).then(number =>{
    console.log(number);
    return increase(number);
}).catch(e=> console.log(e,"가 발생했네"))
.finally(()=>{
    console.log("finally실행");
})

// const testFun = async() =>{
//     const api = await fetch().then(r =>r.json()).then(d => setjhio(d));
//     //jhio. ~하고 외부에서 참조 가능해지게 됨

//     const jsonValue = api.json();
// }

function increase(number){
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const result = number+10;
            if(result>50) {
                const e = new Error ("number toobig");
                return reject(e);
            }
            resolve(result);
        },1000);
    });
    return promise;
}
/*
await의 두가지 기능
1. await가 달린 함수의 결과인 promis에 담긴 결과(promis내부의 resolve에 담길 결과)를 반환한다.
2. await가 달린 비동기 처리들은 동기식으로 동작하게 한다.
*/

await function run (){
    try{
        let result = await increase(e);
        console.log(result);

        result = await increase(e);
        console.log(result);

        result = await increase(e);
        console.log(result);
        
        result = await increase(e);
        console.log(result);
        
        result = await increase(e);
        console.log(result);
        
        result = await increase(e);
        console.log(result);

    } catch(e){
        console.log(e,"가 발생했네");
    }
}
const value = run();
console.log(value);
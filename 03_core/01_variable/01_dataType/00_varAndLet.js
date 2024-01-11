
//var를 사용하는 경우 : 스코프가 없음. 거의 사용하지 않음 
function test() {
    for (var i = 0; i <= 3; i++) {
    }
    console.log(i);
}

test();

// let을 사용하는 경우
function test() {
    for (let i = 0; i <= 3; i++) {
    }
    console.log(i);
}

test();
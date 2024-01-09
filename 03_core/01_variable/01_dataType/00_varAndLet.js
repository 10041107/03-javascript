
//var를 사용하는 경우
function test() {
    for (var i = 0; i <= 3; i++) {
        // Loop body is empty
    }
    console.log(i);
}

test();

// let을 사용하는 경우
function test() {
    for (let i = 0; i <= 3; i++) {
        // Loop body is empty
    }
    console.log(i);
}

test();
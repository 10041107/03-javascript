// 암시적인 글로벌 변수 선언 금지
function test(){
    id = "test";
    console.log(id);
}
test();
console.log(id);

// ================
// 2. 변수, 함수, 매개변수 삭제 금지
var strictVar = 5;
delete strictVar;

// ==================================
//3. 중복된 매개변수 이름 금지
function strictParamsExample(param1, param1){
    // V.E{global} (=글로벌 환경을 참조하고 있음),
    // L.e{V.C{param1}, R.C{global}}
    // console.log(param1) : 마지막 매개변수로 초기화됨
    // console.log(arguments);
}
// strictParamsExample(1,2);

// ==============
// 4. 엄격 모드에서는 this사용이 금지
function strictParamsExample(){
    console.log(this);

}

// ======================
//arguments 객체 변경 제한
function stricArgumentExample(){
    arguments[0] = 10;
    console.log(arguments);
}

stricArgumentExample();


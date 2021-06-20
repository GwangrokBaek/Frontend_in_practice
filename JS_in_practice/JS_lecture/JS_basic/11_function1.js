/*
    선언적 function
    function hello() {}

    익명 함수 (이름을 붙이지 않은 함수)를 만들어 변수에 할당
    const hello = function(){}
*/

const hello1 = function() {
    console.log('hello1');
}
console.log(hello1, typeof hello1);

const hello2 = function(name) {
    console.log('hello2', name);
}

const hello3 = function(name) {
    return `hello3 ${name}`;
}

console.log(hello2('Kim'));
console.log(hello3('Mark'));

/*
    이때 선언적 function은 호이스팅이 적용되어 함수 선언 전에 호출을 하더라도 문제가 없다.
    하지만, 변수에 할당하는 익명 함수의 경우에는 호이스팅이 적용될때 할당된 함수 부분은 올라가지 않고, 변수 선언부분만 올라간다.
    따라서 함수 호출을 먼저 수행할 시, 오류가 발생한다.
*/

hello4(); // 정상 동작
hello5(); // 오류 발생

function hello4() {
    console.log('hello4');
}

var hello5 = function() {
    console.log('hello5');
}
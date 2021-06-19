/*
    호이스팅 : 아래에 있는 선언을 끌어올린다. (할당은 끌어올리지 않고, 선언만 끌어올린다.)
    함수 뿐만 아니라, var를 사용한 변수에도 적용이 된다. 하지만, let을 사용한 변수에는 호이스팅이 적용되지 않는다.
    즉, let을 사용해서 변수를 사용하는 경우에는 변수 사용 이전에 변수 선언이 먼저 이루어져야한다.
*/

// 함수를 먼저 선언한 경우
function hello1() {
    console.log('hello1');
}

hello1();

// 함수 호출을 먼저 하는 경우 (아래쪽에 함수 선언)
hello2(); // 호이스팅이 적용되어 함수 선언 전에 호출을 하더라도 에러가 발생하지 않는다.

function hello2() {
    console.log('hello2');
}

// 변수 할당한 후, 사용을 먼저 하는 경우 (아래쪽에 변수 선언)
age = 6; // 호이스팅이 적용되어 변수 선언 전에 할당 및 사용을 하더라도 에러가 발생하지 않는다.
age++;
console.log(age);

var age;

// 변수 할당없이 사용을 먼저 하는 경우 (아래쪽에 변수 선언 및 할당)
console.log(name); // undefined라고 출력된다. 아래쪽에서 JS 라는 문자열을 할당했지만, 호이스팅은 선언만을 끌어올리기에
// 문자열 JS는 할당되지 않아 undefined가 출력된다.
name = 'Mark';
console.log(name);

var name = 'JS';

// let 변수를 사용하는 경우
console.log(letname); // letname is not defined 에러 메시지를 출력한다.
name = 'Mark';
console.log(letname);

let letname;
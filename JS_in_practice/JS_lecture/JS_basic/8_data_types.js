/*
    JavaScript의 데이터 타입은 동적타입이다. 즉, 값에 따라서 데이터 타입이 바뀌며, 변수가 가지는 고정 타입이 없다.

    ES6를 기준으로 JavaScript의 데이터 타입은 다음과 같다.
    
    기본 타입 (Primitive values)
    - Boolean
    - Null
    - Undefined
    - Number
    - String
    - Symbol (ECMAScript 6에 추가됨)
    객체 (Objects)
    - 표준 내장 객체
    - 사용자 정의 객체
*/

let whatever = 'Mark'
whatever = 37;
whatever = true; // 변수 whatever은 값에 따라서 데이터 타입이 바뀐다.

// Boolean
const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

const a = new Boolean(false); // 객체 생성자를 사용해서 할당할 수도 있다.
console.log(a, typeof a); // 객체를 할당하였으므로 Boolean 타입이 아닌 객체 타입이 출력된다.

if (a) { // a는 현재 객체가 할당되었는데, 이때 if의 조건문 안에 객체가 있을 경우, 해당 객체가 존재하면
    // true를 반환한다. 따라서 실제로 a의 boolean 값은 false임에도 아래 조건문이 실행된다.
    console.log('false?');
}

const b = Boolean(false); // 객체 생성자가 아닌, Boolean 함수를 사용하여 객체 타입이 아닌 기본 타입 변수를 생성
// 이러한 함수는 형변환하는데에 이용되곤한다. Boolean(0) -> false, Boolean(1) -> true 처럼 인자로 숫자를 넣었지만,
// 이에 맞는 Boolean 타입으로 형변환이 수행된다.
console.log(b, typeof b);

if (b) {
    console.log('false?');
}

// Null
const a2 = null; // null은 값이 없음을 의미하는 객체이다.
console.log(a2, typeof a2);

// Undefined
let b2; // 변수 선언 후, 값을 할당하지 않은 경우에는 비어있음을 의미하는 Undefined가 출력된다.
console.log(b2, typeof b2);

b2 = undefined;
console.log(b2, typeof b2);

if (a2 == b2) { // a2는 Null 이고, b2는 Undefined이지만, == 연산자는 값만을 비교하기 때문에 true를 반환한다.
    console.log(a == b);
}

if (a2 === b2) { // === 연산자는 값 뿐만 아니라, 데이터 타입도 함께 비교하기 때문에 false를 반환한다.
    console.log(a === b);
}

// Number
const a3 = 37;
console.log(a3, typeof a3);

const b3 = 96.7;
console.log(b3, typeof b3);

const c3 = NaN; // NaN은 Number 타입이다.
console.log(c3, typeof c3);

const d = Number('Mark'); // Mark는 영어 문자열이기에 Number 함수를 써서 Number 타입으로 형변환을 수행할 시,
// 데이터 타입은 Number 타입이 되지만, 값은 NaN이 할당된다.
console.log(d, typeof d);

const e = Number('37'); // 문자열 37이지만 이는 숫자로 구성된 문자열이기에 Number 함수로 형변환을 수행할 시,
// 데이터 타입은 Number 타입, 값은 숫자 37이 된다.
console.log(e, typeof e);

// String
const a4 = 'Mark';
console.log(a4, typeof a4);

const b4 = "Mark"; // 작은 따옴표, 큰 따옴표 모두 문자열 할당에 사용할 수 있다.
console.log(b4, typeof b4);

const c4 = a4 + ' Lee'; // 문자열을 합칠 수 있다.
console.log(c4, typeof c4);

const d2 = `${a4} Lee`; // `로 감쌀 경우, 템플릿 스트링을 사용할 수 있으며, 이때 `` 안에서 JavaScript 표현식을 사용할 수 있다.
console.log(d2, typeof d2);

// Symbol
const a5 = Symbol();
const b5 = Symbol(37);
const c5 = Symbol('Mark');
const d3 = Symbol('Mark');
console.log(a5, typeof a5);
console.log(c5, typeof c5);
console.log(c5 === d3); // 심볼은 고유한 값을 만들때 사용하며, 이때 c5와 d3의 값은 둘 다 Symbol(Mark) 이지만, false가 출력된다.

new Symbol(); // Symbol에는 new 생성자 함수가 없다.
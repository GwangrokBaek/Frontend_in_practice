/*
    반복문
    for (초기화; 반복 조건; 반복이 된 후 실행되는 코드) {
        반복이 되는 코드 블럭
    }

    for (a; b; c) {
        d
    }
    e

    a -> d -> c -> b -> d -> c -> b -> e

    for (;;) {
        d
    }
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i < 2) {
        continue;
    }
    if (i % 2 === 0) {
        break;
    }
    console.log('안녕하세요', i);
}

/*
    while(조건) {
        조건이 거짓이 될 때까지 반복 실행
    }

    do {
        조건이 거짓이 될 때까지 반복 실행
    } while (조건);
*/

while (true) {
    console.log('안녕하세요');
    if (Math.random() * 100 > 90) {
        break;
    }
}

do {
    console.log('안녕하세요');
} while (Math.random() * 100 <= 90);

/*
    for of 는 모든 반복할 수 있는 객체 (iterable objects)를 순회한다. (자바스크립트에서 iterable 객체에는 Array, Map, Set, arguments 객체 등이 있다.)
    for (item of 객체) {
        객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
    }

    for in 은 모든 열거할 수 있는 프로퍼티 (enumerable properties)의 키를 순회한다. (여기서 열거할 수 있는 프로퍼티란
        내부적으로 enumerable 플래그가 true로 설정된 프로퍼티를 의미한다.)
    for (key in 객체) {
        객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
    }

    forEach 는 배열을 순회할때 사용하는 메서드이다. (콜백함수의 매개변수로 value에 요소값, index에 인덱스, array에 원본 배열이 들어온다.)
    배열.forEach(function(value, index, array)) {
        배열의 요소 개수만큼 반복적으로 실행하고자 하는 실행문;
    }
*/

// for of
for (const i of [1, 2, 3]) {
    console.log(i)
}

// for in
Object.prototype.test = function() {}; // Object 객체의 prototype에 test 라는 프로퍼티도 만들어주었다.

for(const i in {a: 1, b: 2, c: 3}) {
    // for in 은 해당 객체가 상속받는 prototype 체인상의 모든 프로퍼티 키를 열거한다. 이때 {a: 1, b: 2, c: 3} 객체는 prototype 을 상속받으며,
    // 위에서 prototype에 test 프로퍼티를 만들어주었으므로 a, b, c, test를 출력한다.
    console.log(i);
}

// forEach
[10, 20, 30].forEach((value, index, array)=>{
    console.log(`${index} : ${value}`);
})
/*
    표현식이 거짓으로 평가될 때 : false, 0, '', null, undefined, NaN
    표현식이 참으로 평가될 때 : 위의 반대. true, 37, 'Mark', {}, []
    여기서 {} 는 빈 객체, [] 는 빈 배열을 의미한다.
*/

if (true) console.log('참');
if (false) console.log('거짓');

/*
    삼항연산자
    조건 ? 조건이 참이면 실행되는 표현식 : 조건이 거짓이면 실행되는 표현식
    표현식에 중괄호를 사용할 수 없기 때문에 하나의 표현식만 사용할 수 있다.
*/

let n = 5;
console.log(n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.');

// 표현식의 결과를 변수에 할당할 수 있다.

const message = n % 5 === 0 ? '5의 배수 입니다.' : '5의 배수가 아닙니다.';
console.log(message);

// switch

switch (n % 5) {
    case 0: {
        console.log('5의 배수입니다.');
    }
    default:
        console.log(n);
}
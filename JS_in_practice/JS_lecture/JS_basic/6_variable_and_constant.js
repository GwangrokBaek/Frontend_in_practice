/*
    const 와 let 은 블록 스코프의 범위를 가진다.
*/

// 블럭
{
    const name = 'Mark';
    console.log(name);
}
console.log(name); // 블록 밖이라 에러 발생

// 밖에서 안으로
let age = 37;
{
    age++;
    console.log(age);
}
console.log(age); // 블록 밖에서 선언하였으므로 안에서 사용 가능

// 중첩
{
    {
        {
            console.log(age);
        }
    }
}

/*
    var 는 함수 스코프의 범위를 가진다.
    ES5 까지는 var 를 사용해 변수를 선언하였지만, ES6 부터는
    const 와 let 을 사용하여 상수와 변수를 선언한다.
*/

var a = 0;

(function() {
    a++; // a 가 함수 밖에서 선언되었으므로 함수 안에서 사용 가능.
    console.log(a);
})();

console.log(a);

(function() {
    var b = 0;
    console.log(b);
})();

b++; // var 변수 b가 함수 안에서 선언되었으므로 함수 밖에서 사용 불가능.
console.log(b);

var c = 0;
{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d); // d가 var 변수가 아닌, let 이나 const의 경우,
// 블록 안에서 선언되었으므로, 블록 밖에서 사용 불가능.
// 하지만, var 변수는 블록 스코프가 아닌 함수 스코프이기에 블록과는 상관없어서
// 블록 밖에서도 사용 가능하다.

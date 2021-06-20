/*
    new 생성자로 함수를 만드는 방법
    const hello = new Function('인자1', '인자2', ..., '함수의 바디');
*/

const sum = new Function('a', 'b', 'c', 'return a + b + c');
// new 생성자로 함수를 만들때에는 인자와 함수의 마디를 스트링 형태로 Function 함수의 인자로 전달해줘야 한다.
console.log(sum(1,2,3));

global.a = 0;

{
    const a = 1;
    const test = new Function('return a');
    // new 생성자로 만든 함수의 경우, 함수 바깥의 지역변수는 사용할 수 없으며, 인자로 전달받은 변수나 전역변수만 사용가능하다.
    console.log(test());
}

{
    const a = 2;
    const test = function() {
        return a;
    }
    // new 생성자가 아닌 함수는 함수 바깥의 지역변수를 사용할 수 있다.
    console.log(test());
}

/*
    arrow function
    ()=>{}
*/

const hello1 = () => { // arrow function은 익명 함수의 형태로 변수에 할당해서 사용할 수 있다.
    console.log('hello1');
};

// 매개변수가 하나일 때에는 괄호를 생략할 수 있다.
const hello2 = name => {
    console.log('hello2', name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};

const hello4 = name => {
    return `hello4 ${name}`;
}

// return문만 있을 경우에는 중괄호와 return을 생략할 수 있다.
const hello5 = name => `hello5 ${name}`;
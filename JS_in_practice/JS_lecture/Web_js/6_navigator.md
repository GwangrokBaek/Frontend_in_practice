# Navigator 객체
navigator 객체는 브라우저의 정보를 제공하는데 사용되는 객체이다. 주로 호환성 문제등을 위해 사용한다.</br>
즉 navigator 객체를 통해 사용자의 브라우저 환경에 알맞는 코드를 작성할 수 있다.

## Cross Browsing
IE, FireFox, Chrome, Safari, Opera 등 다양한 브라우저들은 W3C 의 HTML, CSS 표준과 ECMA 의 JavaScript 표준을
준수하도록 최대한 서로 비슷하게 구현되어 있지만 표준에서 정해두지 않은 부분들은 각자의 전략에 맞게 구현되어 있다.</br>
따라서 브라우저의 종류에 따라 우리가 작성한 코드가 상이하게 동작할 수 있다. 이를 크로스 브라우징 이슈라고 한다.
(Nescape 에서는 addEventListener 메서드를 사용하지만, IE 에서는 attachEvent 메서드를 사용하는 등
웹표준이 나오기 전까지는 상이한 부분이 꽤 많았고 이때문에 navigator 객체를 사용했었다.)

## Navigator 객체의 프로퍼티
이때 console 에서 아래 명령을 통해 navigator 객체의 모든 프로퍼티를 열람할 수 있다. 물론 dir 말고 log 메서드로도 가능하다.</br>
console.dir(navigator);

## appName
웹브라우저의 이름이다. IE 는 Microsoft Internet Explorer, 파이어폭스와 크롬 등은 Netscape 로 표시한다.

## appVersion
브라우저의 버전을 의미한다.</br>
5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36</br>
여기서 첫 번째는 내 컴퓨터의 운영체제 정보, 두 번째는 현재 브라우저가 사용하고 있는 레이아웃 엔진, 세 번째는 현재 브라우저의 정보에 대해 출력한다.

## userAgent
userAgent 는 웹브라우저를 다르게 일컫는 표현방법이다.</br>
브라우저가 서버측으로 전송하는 USER-AGENT HTTP 헤더의 내용이다. (웹브라우저가 웹서버측에게 현재 사용자의 브라우저 정보에 대해 전송한다.) appVersion 과 비슷하다.</br>

## platform
브라우저가 동작하고 있는 운영체제에 대한 정보이다.

## 기능 테스트
기능 테스트라는 것은 우리가 작성한 코드가 특정 브라우저에서 실행될 것인데, 이때 해당 브라우저에 우리가 사용하고자 하는 api 가 있는지 없는지를 파악하는 테스트이다.</br>

Navigator 객체는 브라우저의 호환성을 위해서 주로 사용되지만, 모든 브라우저에 대응하는 것은 쉬운 일이 아니므로 아래와 같이 기능 테스트를 사용하는 것이 더 선호되는 방법이다.</br>
예를 들어 Object.keys 라는 메서드는 객체의 key 값을 배열로 리턴하는 Object 의 메서드이다. 이 메서드는 ECMAScript5 에 추가되었기 때문에 오래된 자바스크립트와는
호환되지 않는다. 아래의 코드를 통해서 Object.keys 메서드에 대한 호환성을 맞출 수 있다.

```
if (!Object.keys) { // 현재 브라우저에 Object.keys() 메서드가 없을 경우 아래 코드를 실행한다.
    Object.keys = (function() { // Object.keys 에 아래 함수 할당.
        'use strict'; // 함수에 strict mode 적용. strict mode 는 기존에 무시되던 에러들을 throwing 하고, 더 높은 최적화를 위해 변수사용을 단순화시키는 등 다양한 기능을 수행한다.
        var hasOwnProperty = Object.prototype.hasOwnProperty, // 객체가 특정 프로퍼티를 가지고 있는지를 bool 값으로 나타내는 메서드를 hasOwnProperty 변수에 할당.
            hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'), // toString 메서드에 null 값을 할당하는 객체를 선언하고 여기에 특정 프로퍼티가 열거가능한지 여부를 bool 값으로 나타내는 propertyIsEnumerable('toString) 을 사용한 다음 그 결과값에 부정 연산자 ! 를 붙여 hasDontEnumBug 에 할당한다. 만약 열거가 가능하다면 최종적으로 false 가 할당된다.
            dontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            dontEnumsLength = dontEnums.length;
        
        return function(obj) { // 클로저 함수인듯하다. Object.keys 에 할당한 함수가 리턴될 때 새로운 함수를 호출하며 리턴된다.
            if(typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) { // 인자로 전달받은 obj 의 타입이 객체가 아니고 또는 함수이거나 null 일 경우에 예외 throw
                throw new TypeError('Object.keys called on non-object');
            }

            var result = [], prop, i;

            for (prop in obj) { // obj 객체가 열거가능할 경우 프로퍼티들 순회
                if (hasOwnProperty.call(obj, prop)) { // obj 객체에 prop 이 가리키는 프로퍼티가 존재한다면 result 배열에 해당 프로퍼티 push.
                    result.push(prop);
                }
            }

            if (hasDontEnumBug) { // 만약 obj 객체가 순회 불가능한 경우에는 위 for 문을 통해 result 배열에 프로퍼티들이 push 되지 않으므로 아래 코드 실행.
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) { // 객체들이 가지는 기본적인 프로퍼티들을 obj 가 가지고 있는지 체크하여 만약 가지고 있다면, result 배열에 해당 프로퍼티 추가.
                        result.push(dontEnums[i]);
                    }
                }
            }
        }
    })
}
```

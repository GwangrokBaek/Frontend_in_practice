# 데이터 타입
자바스크립트에서 사용하는 데이터 타입에는 여러 종류가 있다.
* Boolean
* Null
* Undefined
* Number
* String
* Symbol
* Object

## Number
숫자 타입인 Number 의 경우 이항 연산자를 활용해서 +, -, /, * 등 사칙연산을 수행할 수 있다.

## String
문자열 타입인 String 의 경우 " 또는 ' 로 텍스트를 감싸주면 된다.<br>
문자열의 길이를 알고 싶은 경우에는 문자열 뒤에 .length 를 붙여주면 된다.<br>
이때 length 와 같은 것을 properties 라고 한다.<br>
이외에도 method 가 있는데, "Hello world".toUpperCase() 의 경우, toUpperCase() 메서드에 의해 문자열이 대문자로 출력된다.<br>
indexOf() 메서드의 경우, 괄호 안에 주어진 값이 문자열에서 몇 번째 위치에 해당되는지를 출력해준다.<br>
"Hello World".indexOf('o') 의 경우, 젤 처음 나오는 o 의 위치는 4 번째이기에 4가 출력된다. (0 부터 시작)<br>
이때 해당 문자가 없다면 -1 을 출력한다.
"Hello World".indexOf('World') 처럼 문자가 아닌 문자열을 값으로 넣을 수도 있는데, 이때 6이 출력된다. <br>
"      Hello World       ".trim() 은 좌우의 공백을 제거해준다.<br>
숫자 + 숫자의 경우에는 사칙연산을 수행해주지만, 문자 + 문자의 경우에는 concat 을 수행한다. 따라서 '1'+'1' 은 '11' 이 된다.
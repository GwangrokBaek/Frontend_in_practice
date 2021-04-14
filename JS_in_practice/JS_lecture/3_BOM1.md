# BOM
BOM 은 Browser Object Model 의 약자로 웹브라우저를 제어하기 위해 브라우저가 제공해주는 객체들을 의미한다.</br>
자바스크립트를 통해 새창을 열어주거나 url 정보를 알아내는 등을 돕기 위한 모델이다.

# 전역객체 Window

## Window 객체
Window 객체는 모든 객체가 소속된 객체이고, 전역객체이면서, 창이나 프레임을 의미한다. 즉, DOM 의 객체 중 하나인 document,
BOM 객체 중 하나인 location, JavaScript Core 의 객체 중 하나인 Array 등 모든 객체들이 소속되어 있는 객체이다.

## 전역객체
Window 객체는 식별자 window 를 통해 접근할 수 있다. 이때 window 객체 아래의 document, location, array 등은
window.document, window.location, window.array 등으로 접근할 수 있는데, 전역 객체이므로 생략도 가능하다.<br><br>

따라서 아래처럼 window 를 생략하고도 사용가능하다.<br>

'''
window.alert('Hello world');
alert('Hello world');

var a = 1;
alert(a);
alert(window.a);

var a = {id:1};
alert(a.id);
alert(window.a.id);
'''


따라서 사용자 정의 함수 및 브라우저가 제공하는 내장함수와 전역변수는 모두 윈도우라고 하는 객체의 메서드이고, 변수이며 즉, 객체를 만든다는 것은
결국 window 객체의 메서드와 프로퍼티를 만드는 것과 같다.

# 웹브라우저 제어

자바스크립트를 사용해서 특정 태그에 디자인을 주는 등 브라우저를 제어할 수 있다.

<input type="button" value="night" onclick="document.querySelector('body').style.backgroundColor='black';">
HTML 문서에서 body 태그를 선택하고 해당 태그의 style 속성의 backgroundColor 를 black 으로 동적으로 제어한다.<br>
자바스크립트를 사용하지 않고 CSS 만 사용하면 해당 태그의 backgroundColor 는 항상 black 이 되지만, 자바스크립트를 사용해서 원하는 시점에
동적으로 제어할 수 있다.
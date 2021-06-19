# Element 객체
Element 객체는 엘리먼트를 추상화한 객체이다. HTMLElement 객체와의 관계를 이해하기 위해서는 DOM 의 취지에 대한
이해가 선행되어야 한다. DOM 은 HTML 만을 제어하기 위한 모델이 아니다. HTML 이나 XML, SVG, XUL 과 같이
마크업 형태의 언어를 제어하기 위한 규격이기 때문에 Element 는 마크업 언어의 일반적인 규격에 대한 속성을 정의하고 있고,
각각의 구체적인 언어 (HTML, XML, SVG) 를 위한 기능은 HTMLElement, SVGElement, XULElement 와 같은 객체를
통해서 추가해서 사용하고 있다. (따라서 Element 객체 아래에 HTMLElement 객체가 따로 존재하고, style 속성은
HTMLElement 만 가지고 있다. 이때 DOM 은 하나의 표준이기 때문에 자바스크립트에서만 사용하는 것이 아니라, DOM 을 지원하는
언어라면 자바 등등에서도 DOM 을 제어할 수 있다.)

## 다른 객체들과의 관계
DOM 의 계층 구조에서 Element 객체는 Node 객체의 자식이며, HTMLElement 객체의 부모이다. 이때 HTMLElement 는
HTMLHeadElement, HTMLLIElement 등 여러 자식을 가진다.

## 주요기능

### 식별자
문서내에서 특정한 엘리먼트를 식별하기 위한 용도로 사용되는 API
* Element.classList
* Element.className
* Element.id
* Element.tagName

### 조회
엘리먼트의 하위 엘리먼트를 조회하는 API
* Element.getElementsByClassName
* Element.getElementsByTagName
* Element.querySelector
* Element.querySelectorAll

### 속성
엘리먼트의 속성을 알아내고 변경하는 API
```
<a href="~" target="~">~</a>
에서 href, target 등이 속성이고, 해당 속성에 대해 value 를 지정하는데 사용된다.
```
* Element.getAttribute(name)
* Element.getAttribute(name, value)
* Element.hasAttribute(name)
* Element.removeAttribute(name)
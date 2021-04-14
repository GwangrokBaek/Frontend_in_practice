# Element 객체
Element 객체는 엘리먼트를 추상화한 객체이다. HTMLElement 객체와의 관계를 이해하기 위해서는 DOM 의 취지에 대한
이해가 선행되어야 한다. DOM 은 HTML 만을 제어하기 위한 모델이 아니다. HTML 이나 XML, SVG, XUL 과 같이
마크업 형태의 언어를 제어하기 위한 규격이기 때문에 Element 는 마크업 언어의 일반적인 규격에 대한 속성을 정의하고 있고,
각각의 구체적인 언어 (HTML, XML, SVG) 를 위한 기능은 HTMLElement, SVGElement, XULElement 와 같은 객체를
통해서 추가해서 사용하고 있다.
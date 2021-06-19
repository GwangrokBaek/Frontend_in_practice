# Node 객체
Node 객체는 DOM 에서 시조와 같은 역할을 한다. 다시 말해 모든 DOM 객체는 Node 객체를 상속 받는다.<br/>
이때 Node 객체 아래에는 Document, ChracterData, Element, Attr 등이 있는데, 여기서 Attr 은 태그의 속성을 의미하며,
CharacterData 아래에 있는 Text 와 Comment 중 Text 는 <pre><li>Hello World</li></pre> 에서 Hello World 부분을 의미한다.<br/>
Comment 는 주석을 나타내는 <pre><!-- --></pre> 를 의미한다.

## 주요기능
Node 객체의 주요 기능은 아래와 같다.

### 관계
엘리먼트는 서로 부모, 자식, 혹은 형제자매 관계로 연결되어 있다. 각각의 Node 가 다른 Node 와 연결된 정보를
보여주는 API 를 통해서 문서를 프로그래밍적으로 탐색할 수 있다.
* Node.childNodes
* Node.firstChild
* Node.lastChild
* Node.nextSibling
* Node.previousSibling
* Node.contains()
* Node.hasChildNodes()

### 노드의 종류
Node 객체는 모든 구성요소를 대표하는 객체이기 때문에 각각의 구성요소가 어떤 카테고리에 속하는 것인지를 알려주는 식별자를 제공한다.
* Node.nodeType
* Node.nodeName

### 값
Node 객체의 값을 제공하는 API 이다.
* Node.nodeValue
* Node.textContent

### 자식관리
Node 객체의 자식을 추가하는 방법에 대한 API 이다.
* Node.appendChild()
* Node.removeChild()
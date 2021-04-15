# Document 객체

## 소개
Document 객체는 DOM 의 스펙이고 이것이 웹브라우저에서는 HTMLDocument 객체로 사용된다.
HTMLDocument 객체는 문서 전체를 대표하는 객체라고 할 수 있다. (doctype 과 문서 전체를 나타내는 html 태그를 자식 노드로 가지기 때문이다.) 아래 코드는 이를 보여준다.

```
<script>
// document 객체는 window 객체의 소속이다.
console.log(window.document);
// document 객체의 자식으로는 Doctype 과 html 이 있다.
console.log(window.document.childNodes[0]); // <!DOCTYPE html> 출력
console.log(window.document.childNodes[1]); // <html>...</html> 출력
</script>
```

## 주요 API

### 노드 생성 API
document 객체의 주요 임무는 새로운 노드를 생성해주는 역할이다.
* createElement()
* createTextNode()

### 문서 정보 API
* title
* URL
* referrer // 어떠한 사이트를 경유해서 왔는지에 대한 정보
* lastModified
# flex의 다양한 속성과 값

(* 가 기본값)<br>
## container 를 위한 flex 속성
### flex-wrap : *nowrap, wrap, wrap-reverse
item 들의 크기 합이 container 보다 클 경우, item 이 줄바꿈되어서 내려가는 특징을 가진다.<br>

### align-items : flex-start, flex-end, center, baseline, *stretch
align-items 는 화면 상에서 **수직 배치**를 결정한다.<br>
기본값이 stretch 이기에 flex 가 적용되면 item 들의 크기가 container 의 높이만큼 차지하게 된다.<br>
이때 item 컨텐츠의 크기만큼을 차지하게끔 하고 싶다면 stretch 를 제외한 나머지 값을 사용하면 된다.<br>
이때 나머지 값들은 화면에서의 수직 배치를 지정한다. center 로 선언하면 화면의 정중앙에 배치된다.<br>
(!doctype html 이 선언되어 있으면 동작하지 않는다.)<br>

### justify-content : *flex-start, flex-end, space-between, center, space-around
justify-content 는 화면 상에서 **수평 배치**를 결정한다.<br>
기본값이 flex-start 이기에 화면 왼쪽에 붙어있게 되는데, center 를 사용하여 화면 중간에 위치하도록 설정할 수 있다.<br>

### align-content : flex-start, flex-end, center, space-between, space-around, *stretch
align-content 는 같은 행에 있는 컨텐츠를 하나의 그룹으로 두어 그룹과 그룹 사이의 정렬을 수행한다. align-items 의 경우에는
컨테이너 밑에 있는 아이템 전체에 대해 정렬을 수행한다.<br>

## item 을 위한 flex 속성
### align-self : *auto, flex-start, flex-end, center, baseline, stretch
개별 아이템에 대해 정렬을 설정할 수 있다.<br>

### flex-grow : *0 ~
1로 설정할 경우, 컨테이너 태그의 여백을 남기지 않고 아이템 태그들의 크기가 균등하게 분배되며 아이템에 서로 다른 숫자를 지정할 경우, 숫자에 비례하여 크기를 차지하게 된다.<br>

### flex-shrink : 0 ~
1로 설정할 경우, 화면이 작아짐에 따라 아이템 태그들의 크기가 작아지게 되며, 숫자에 비례하여 크기가 줄어든다.<br>

### flex : flex-grow [flex-shrink] [flex-basis]
flex-grow, flex-shrink, flex-basis 를 한 번에 표현할 수 있는 축약형 선언이다.<br>

### order : *0 ~
item 들의 순서를 바꾸고 싶을때 사용한다.<br>
작은 값이 가장 먼저 위치하게 된다. 보통 검색엔진이 잘 알아서 처리하겠지만, nav 다음에 main 이 위치할 경우, 검색 결과에서 nav 를 출력하지 않게 하기 위해 main 을<br>
위로 올리게 되면 main 의 위치가 화면상 왼쪽에 오게 된다. 이때 html 상에서는 main 이 위로 오되 nav 가 왼쪽에 위치하게 하고 싶다면 nav 의 order 속성에다 0 을 선언해주고,<br>
main 의 order 속성에다 1 을 선언해주면, nav 가 화면 상에서 먼저 (왼쪽에) 위치하게 된다.<br>
또는 main 은 그대로 두고, nav 의 order 속성에다 -1 을 선언해주면, 해당 값이 제일 작으므로 먼저 위치하게 된다.<br>
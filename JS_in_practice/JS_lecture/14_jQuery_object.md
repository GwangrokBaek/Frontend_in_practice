# jQuery 객체
jQuery 객체는 jQuery 함수의 리턴값으로, jQuery 함수를 이용해서 선택한 엘리먼트들에 대해서 처리할
작업을 프로퍼티로 가지고 있는 객체이다.

## 암시적 반복
jQuery 객체의 가장 중요한 특성은 암시적인 반복을 수행한다는 것이다. DOM 과 다르게 jQuery 객체의 메서드를
실행하면 선택된 엘리먼트 전체에 대해서 동시에 작업이 처리된다.<br/>
암시적 반복은 값을 설정할 때에만 동작한다. 값을 가져올 때에는 선택된 엘리먼트 중 첫 번째에 대한 값만을 반환한다.

'''
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
<script>
    var li = $('li');
    li.css('text-decoration', 'underline'); // 모든 li 태그를 선택하여 이를 jQuery 객체로 반환하고, 모든 li 태그의
    // text-decoration 속성을 underline 으로 바꿔준다. 이때 내부적으로 반복을 수행하는데 이것이 암시적 반복이다.
    // 이때 두 번재 인자인 속성의 값 'underline' 을 명시해주면 이는 속성의 값을 설정하는 것이고,
    // 두 번째 인자를 명시하지 않고, 첫 번째 인자만 명시하면 속성의 값을 가져온다.
    // 이때 속성의 값을 가져올 때에는 선택된 엘리먼트 중 첫 번째에 요소에 대한 값만을 가져온다.
</script>
'''

## 체이닝
chaining 이란 선택된 엘리먼트에 대해서 연속적으로 작업을 처리할 수 있는 방법이다.

## 조회 결과
jQuery 객체에는 조회된 엘리먼트가 담겨 있다. jQuery 객체는 일종의 유사배열의 형태로, 조회된 엘리먼트를 가지고 있기 때문에
배열처럼 사용해서 엘리먼트를 가져올 수 있다.

'''
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
<script>
    console.log($('li').length);
    console.log($('li')[0]);
    var li = $('li');
    for (var i = 0; i < li.length; i++) {
        console.log(li[i]);
    }
    // 이때 한가지 주의할 것은 li[i] 의 값은 해당 엘리먼트에 대한 jQuery 객체가 아니라 DOM 객체이다. 따라서 jQuery 의 기능을
    // 이용해서 이 객체를 제어하려면 jQuery 함수를 사용해야 한다.
    for(var i = 0; i < li.length; i++) {
        $(li[i]).css('color', 'red'); // li 자체는 jQuery 함수를 사용해서 가져온 jQuery 객체이지만, li[i] 를 통해 인덱스로 접근한
        // 요소는 HTMLLIElement 인 DOM 객체이다. 따라서 이를 jQuery 를 통해 제어하기 위해서는 다시 jQuery 함수를 통해 DOM 객체를 jQuery 객체로 변환해줘야 한다.
        // 이때 jQuery 함수의 인자로는 css 선택자도 올 수 있지만, DOM 객체도 올 수 있다.
    }
</script>
'''

## map 메서드
위의 for 순회 방식 말고도, jQuery 객체의 메서드 중 map 메서드를 통해 조회된 결과를 열람할 수 있다.<br/>
map 은 jQuery 객체의 엘리먼트를 하나씩 순회한다. 이때 map 메서드의 인자로 콜백함수가 오는데, 콜백함수의 첫 번째 인자로 엘리먼트의 인덱스, 두 번째 인자로 엘리먼트 객체 (DOM) 이 전달된다.

'''
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
<script>
    var li = $('li');
    li.map(function(index, elem) { // map() 메서드는 콜백함수를 인자로 받고, li 에 담겨있는 jQuery 객체의 각 요소를 순회하며 콜백함수를 호출하는데, 이때 콜백함수의 인자로는 각 요소의 index 와 DOM 객체인 HTTPLIElement 를 인자로 받는다.
        console.log(index, elem);
        $(elem).css('color', 'red'); // elem 은 DOM 객체이므로 jQuery 함수를 사용하여 jQuery 객체로 변환해주어야 한다.
    })
</script>
'''

## jQuery 객체 API
제어할 대상을 선택한 후에는 대상에 대한 연산을 수행해야한다. .css 와 .attr 은 jQuery 객체가 가지고 있는 메서드 중의 하나인데, jQuery 는 그 외에도 많은 API 를 제공하고 있다.

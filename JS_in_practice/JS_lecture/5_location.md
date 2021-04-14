# Location 객체
Location 객체는 문서의 주소와 관련된 객체로 Window 객체의 프로퍼티이다.</br>
이 객체를 이용해서 윈도우의 문서 URL 을 변경할 수 있고, 문서의 위치와 관련해서 다양한 정보를 얻을 수 있다.

## 현재 윈도우의 URL 알아내기
console.log(location.toString(), location.href);</br>
를 통해 현재 윈도우의 문서가 위치하는 URL 을 알아낼 수 있다. console.log 의 경우, 인자값에 콤마를 두고 인자를 나열하면 여러 인자를 동시에 출력해준다.</br>
console.log(location) 처럼 location 객체 자체를 console.log 로 출력할 경우에는 console 이 인자로 들어온 location 객체의 정보를
분석하여 객체의 여러 프로퍼티 및 메서드에 대한 정보를 출력하지만, alert(location) 의 경우, location.toString() 이 수행되어
문서의 URL 을 출력한다. 이는 alert() 가 인자로 문자열을 받기 때문에 location 객체의 toString() 메서드가 실행되어서이다.

## URL Parsing
location 객체는 URL 을 의미에 따라서 별도의 프로퍼티로 제공한다.</br>
cosole.log(location.protocol, location.host, location.port, location.pathname, location.search, location.hash)</br>
* location.protocol 의 경우 현재 웹페이지가 사용하고 있는 **통신규약**을 출력한다. (http:, https: 등)
* location.host 의 경우 현재 웹피이지가 서비스 되고 있는 **컴퓨터를 식별하는 주소**를 출력한다. (opentutorials.org)
* location.port 는 컴퓨터에서 돌아가는 여러가지 **서버 소프트웨어를 식별하는 주소**를 출력한다. (8080 등. 아무것도 출력되지 않으면 80 포트라는 뜻)
* location.pathname 은 웹서버에 접속했을 때 웹서버에 있는 **웹페이지가 가지고 있는 구체적인 주소**를 출력한다. (/5_location.md)
* location.search 는 **URL 에 붙은 매개변수**를 (물음표 뒤의 값) 반환한다. (?id=10 등)
* location.hash 는 **주소값에 붙어있는 anchor 값을 반환**한다. 문서안에 특정한 위치를 지정하는 등 북마킹을 할 수 있는데, 이때 hash 를 사용하면 그 정보를 출력해준다. (#test 등)
즉, location.href 를 통해 전체 주소를 출력할수도 있지만, location 객체의 다양한 프로퍼티를 사용하여 필요로하는 url 의 부분정보들을 출력할 수 있다.

## URL 변경하기
location 객체는 현재 문서의 URL 정보를 출력할 뿐만 아니라, 이를 변경할 수도 있다. 또한 리로드를 할 수도 있다.
location.href="http://egoing.net";</br>
을 통해 현재 문서를 http://egoing.net 으로 이동할 수 있다. 리디렉션이 필요한 경우, href 프로퍼티를 다른 url 값으로 변경해줌으로써 이를 수행할 수 있다. </br>
location = "http://egoing.net";</br>
위와 같은 효과를 나타내는 방법이다.</br>
location.reload();</br>
를 통해 문서를 리로드하는 간편한 방법을 사용할 수 있다.</br>
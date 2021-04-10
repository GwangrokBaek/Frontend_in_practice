var target = document.querySelector('body');

            var Body = {
                setBackgroundColor : function(color) {
                    // target.style.backgroundColor = color;
                    $('body').css('background-color', color);
                    // $('body').css('backgroundColor', color); js 에서의 backgroundColor 표기법을 사용해도 적용된다.
                },
                setColor : function(color) {
                    // target.style.color = color;
                    $('body').css('color', color);
                }
            }

            var Links = {
                setColor : function(color) {
                //     var aList = document.querySelectorAll('a');
                //     var i = 0;
                //     while(i < aList.length) {
                //         aList[i].style.color = color;
                //         i += 1;
                //     } 여러 태그에다 효과를 적용하기 위해서는 반복문을 사용했어야 했는데, jquery 를 사용하면 이를 간단하게 처리할 수 있다.
                // 이때 jquery 는 $ 기호로 ($ 메서드) 시작된다. 아래는 모든 a 태그를 jquery 로 제어하겠다는 의미이며, 뒤의 css 메서드는 css 를 바꾼다는 의미이다.
                // 여기서 첫 번째 인자에 속성을 명시해주고, 두 번째 인자에 값을 명시해주면 된다.
                     $('a').css('color', color);
                }
            }

            function anchorColorHandler(color) {
                var aList = document.querySelectorAll('a');
                var i = 0;
                while(i < aList.length) {
                    aList[i].style.color = color;
                    i += 1;
                }
            }

            function nightDayHandler(self) {
                if (self.value === 'night') {
                    Body.setBackgroundColor("black");
                    Body.setColor("white");
                    self.value="day";

                    Links.setColor("yellow");
                }
                else {
                    Body.setBackgroundColor("white");
                    Body.setColor("black");
                    self.value="night";

                    Links.setColor("blue");
                }
            }
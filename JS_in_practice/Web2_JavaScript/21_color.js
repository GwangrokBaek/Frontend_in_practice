var target = document.querySelector('body');

            var Body = {
                setBackgroundColor : function(color) {
                    target.style.backgroundColor = color;
                },
                setColor : function(color) {
                    target.style.color = color;
                }
            }

            var Links = {
                setColor : function(color) {
                    var aList = document.querySelectorAll('a');
                    var i = 0;
                    while(i < aList.length) {
                        aList[i].style.color = color;
                        i += 1;
                    }    
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
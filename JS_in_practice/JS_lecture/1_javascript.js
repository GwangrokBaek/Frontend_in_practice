window.onload = function() { // 웹페이지의 모든 element 가 해석된 이후에 js 가 실행될 수 있도록 window.onload 메서드에
    // 실행하고자하는 js 코드 할당.
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function() {
        alert('Hello world');
    })
}
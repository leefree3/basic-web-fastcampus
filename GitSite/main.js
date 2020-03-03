(function(window, document){
    'use strict';
    // 요소를 포함 할 때 $를 많이 붙인다.
    const $toggles = document.querySelectorAll('.toggle'); //NodeList 유사 배열
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click',function(){
        toggleElements();
    });

    window.addEventListener('resize',function(){
        if (window.innerWidth > 1024){
            //off toggle element
            offElements();
        }
    })

    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }
    
    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }
})(window, document)
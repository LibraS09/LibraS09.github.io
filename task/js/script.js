document.addEventListener("DOMContentLoaded", function (){
    var accordion = document.getElementById('accordion');
    var btn = document.getElementById('btn');
    var popup = document.getElementById("myPopup");

    var active = accordion.querySelector('.active');
    accordion.addEventListener('click', function(event) {
        var target = event.target;
        if (target.closest('.accordion-title')) {
            active.classList.remove('active');
            active = target.closest('.accordion-section');
            active.classList.add('active');    
            
            popup.textContent = ""+active.querySelector('.accordion-title').textContent;
        }
    });
    
        btn.addEventListener('click', function(event) {
        
        popup.classList.toggle("show");
        popup.textContent = ""+accordion.querySelector('.active>.accordion-title').textContent;
    });

});
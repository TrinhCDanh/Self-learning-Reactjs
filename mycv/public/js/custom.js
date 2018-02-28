// Typing text animation
$(document).ready(function(){
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Web Designer')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Frontend-developer')
        .start();
});

// 3d hover
$(document).ready(function(){
    $(".project").hover3d({
      selector: ".project__card"
    });
});

//



      
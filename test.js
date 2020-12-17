var introVid = document.getElementById('introVid');

$(document).ready(function(){
    
    //init scrollmagic
    var controller = new ScrollMagic.Controller();

//    // //pin the navbar
//     var pinNavbar = new ScrollMagic.Scene({
//         triggerElement: '#navbar',
//         triggerHook: 0,
//         duration: '110%'
//      })

//      .setPin('#navbar', {pushFollowers: false})
//      .addIndicators({
//          name: 'navbar'
//     })
//      .addTo(controller); 

    //pin the girl
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#home-girl',
        triggerHook: 0,
        duration: '100%'
    })

    .setPin('#home-girl', {pushFollowers: false})
    // .addIndicators({
    //     name: 'girl',
    //     colorTrigger: 'white'
    // })
    .addTo(controller);

    //pin the video div
    var pinVideo = new ScrollMagic.Scene({
        triggerElement: '#video',
        triggerHook: 0,
        duration: '100%'
    })

    .setPin('#video')
    // .addIndicators({
    //     name: 'video'
    // })
    .addTo(controller);


    //play pause video
    var controlVid = new ScrollMagic.Scene({
        triggerElement: '#introVid',
        duration: '50%',
        triggerHook: 0
    })

    .addTo(controller)
    // .addIndicators({
    //     name: 'control'
    // })

    .on("enter", function(){
        introVid.play();
    })

    .on("leave", function(){
        introVid.pause();
    })
    

    //loop
    $('.home').each(function(){
        //build scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
            duration: '100%'
        })

        .setClassToggle(this, 'fade-in') // add class to home
        // .addIndicators()
        .addTo(controller);
    })
});


// Control Video when Tab Changed
var focused = true;
document.addEventListener("visibilitychange", function () {
  focused = !focused;
  if (!focused)
    document.getElementById("introVid").pause();
    else if (focused)
    document.getElementById("introVid").play();
});

// Link Video to Domains Page
$('#introVid').click(function(){
    window.location = 'domains.html';
});
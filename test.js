$(document).ready(function(){
    
    //init scrollmagic
    var controller = new ScrollMagic.Controller();

    //pin the girl
    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '#home-girl',
        triggerHook: 0,
        duration: '100%'
    })

    .setPin('#home-girl', {pushFollowers: false})
    .addIndicators()
    .addTo(controller);



    //loop
    $('.home').each(function(){
        //build scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7
        })

        .setClassToggle(this, 'fade-in') // add class to home
        .addIndicators()
        .addTo(controller);
    })
});
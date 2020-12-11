// pause when the user leaves this window/tab
$(window).blur(function(){
    $('#myvideo').get(0).pause();
});

// play when the user returns to this window/tab
$(window).focus(function(){
    $('#myvideo').get(0).play();
});
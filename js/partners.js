const toggle1 = document.getElementById("toggle");

//About Page
const homeImg = document.getElementById("homelogo");


toggle1.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		document.getElementById("dark-mode").style.display = "none";
        document.getElementById("light-mode").style.display = "inline";
        document.getElementById("dark-mode1").style.display = "none";
        document.getElementById("light-mode1").style.display = "inline";
        document.getElementById("dark-mode2").style.display = "none";
        document.getElementById("light-mode2").style.display = "inline";
        document.getElementById("dark-mode3").style.display = "none";
        document.getElementById("light-mode3").style.display = "inline";
        document.getElementById("dark-mode4").style.display = "none";
		document.getElementById("light-mode4").style.display = "inline";
	
	} else {
		document.getElementById("dark-mode").style.display = "inline";
        document.getElementById("light-mode").style.display = "none";
        document.getElementById("dark-mode1").style.display = "inline";
        document.getElementById("light-mode1").style.display = "none";
        document.getElementById("dark-mode2").style.display = "inline";
        document.getElementById("light-mode2").style.display = "none";
        document.getElementById("dark-mode3").style.display = "inline";
        document.getElementById("light-mode3").style.display = "none";
        document.getElementById("dark-mode4").style.display = "inline";
		document.getElementById("light-mode4").style.display = "none";
	}
});



    //refresh page on browser resize
    $(window).bind('resize', function(e)
    {
      console.log('window resized..');
      this.location.reload(false); /* false to get page from cache */
      /* true to fetch page from server */
    });
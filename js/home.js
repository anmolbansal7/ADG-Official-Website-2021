const toggle1 = document.getElementById("toggle");

//About Page
const homeImg = document.getElementById("homelogo");


toggle1.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		//About Page
		homeImg.src = "Assets/Home-Page/adglogo4.png";

		
	
	} else {
		//About Page
		homeImg.src = "Assets/Home-Page/adglogo1.svg";
	}
});


const toggle1 = document.getElementById("toggle");

//About Page
const abtImg = document.getElementById("dark1");


toggle1.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		//About Page
		abtImg.src = "Assets/About-Page/adglogo1.png";

		
	
	} else {
		//About Page
		abtImg.src = "Assets/About-Page/adglogo2.png";
	}
});

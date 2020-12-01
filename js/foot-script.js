const toggle = document.getElementById("toggle");
const body = document.body;
const nav = document.getElementById("navbar");
const foot = document.getElementById("footer");
const lightImg = document.getElementById("light-mode-img");
const darkImg = document.getElementById("dark-mode-img");

toggle.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		body.classList.add("light-theme");
		nav.classList.add("light-theme");
		foot.classList.add("light-theme");
		lightImg.style.display = "block";
		darkImg.style.display = "none";
	} else {
		body.classList.remove("light-theme");
		nav.classList.remove("light-theme");
		foot.classList.remove("light-theme");
		lightImg.style.display = "none";
		darkImg.style.display = "block";
	}
});

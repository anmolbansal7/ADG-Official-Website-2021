// alert("Hello! I am an alert box!!");

const toggle = document.getElementById("toggle");
const body = document.body;
const nav = document.getElementById("navbar");
const foot = document.getElementById("footer");


//Partners Page
const lightImg = document.getElementById("light-mode");
const darkImg = document.getElementById("dark-mode");
const lightImg1 = document.getElementById("light-mode1");
const darkImg1 = document.getElementById("dark-mode1");
const lightImg2 = document.getElementById("light-mode2");
const darkImg2 = document.getElementById("dark-mode2");
const lightImg3 = document.getElementById("light-mode3");
const darkImg3 = document.getElementById("dark-mode3");
const lightImg4 = document.getElementById("light-mode4");
const darkImg4 = document.getElementById("dark-mode4");

//About Page
const abtImgd = document.getElementById("dark1");
const abtImgl = document.getElementById("light1");

//Contact Page
const contactBox = document.getElementById("contact-form");
const nameY = document.getElementById("name");
const mail = document.getElementById("email");
const phone = document.getElementById("phone");
const msg = document.getElementById("message");
const send = document.getElementById("send");
const contactInfo = document.getElementById("contact-info");
const moreInfo = document.getElementById("more-info");

toggle.addEventListener("input", (e) => {
	const isChecked = e.target.checked;

	if (isChecked) {
		body.classList.add("light-theme");
		nav.classList.add("light-theme");
		foot.classList.add("light-theme");
		
		//Contact Page
		contactBox.classList.add("light-theme");
		nameY.classList.add("light-theme");
		mail.classList.add("light-theme");
		phone.classList.add("light-theme");
		msg.classList.add("light-theme");
		send.classList.add("light-theme");
		contactInfo.classList.add("light-theme");
		moreInfo.classList.add("light-theme");

		lightImg.style.display = "inline";
		darkImg.style.display = "none";
		lightImg1.style.display = "inline";
		darkImg1.style.display = "none";
		lightImg2.style.display = "inline";
		darkImg2.style.display = "none";
		lightImg3.style.display = "inline";
		darkImg3.style.display = "none";
		lightImg4.style.display = "inline";
		darkImg4.style.display = "none";
		abtImgd.style.display = "none";
		abtImgl.style.display = "block";
	
	} else {
		body.classList.remove("light-theme");
		nav.classList.remove("light-theme");
		foot.classList.remove("light-theme");

		//Contact Page
		contactBox.classList.remove("light-theme");
		nameY.classList.remove("light-theme");
		mail.classList.remove("light-theme");
		phone.classList.remove("light-theme");
		msg.classList.remove("light-theme");
		send.classList.remove("light-theme");
		contactInfo.classList.remove("light-theme");
		moreInfo.classList.remove("light-theme");

		lightImg.style.display = "none";
		darkImg.style.display = "inline";
		lightImg1.style.display = "none";
		darkImg1.style.display = "inline";
		lightImg2.style.display = "none";
		darkImg2.style.display = "inline";
		lightImg3.style.display = "none";
		darkImg3.style.display = "inline";
		lightImg4.style.display = "none";
		darkImg4.style.display = "inline";
		abtImgd.style.display = "block";
		abtImgl.style.display = "none";
	}
});


//Persisting User's Choice

// const btn = document.getElementById("toggle");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "light") {
//   body.classList.add("light-theme");
// }

// btn.addEventListener("click", function () {
//   body.classList.toggle("light-theme");

//   let theme = "dark";
//   if (document.body.classList.contains("light-theme")) {
//     theme = "light";
//   }
//   localStorage.setItem("theme", theme);
// });



// function App() {}

// App.prototype.setState = function(state) {
//   localStorage.setItem('checked', state);
// }

// App.prototype.getState = function() {
//   return localStorage.getItem('checked');
// }

// function init() {
//   var app = new App();
//   var state = app.getState();
//   var checkbox = document.querySelector('#toggle');

//   if (state == 'true') {
//     checkbox.checked = true;
//   }

//   checkbox.addEventListener('click', function() {
//       app.setState(checkbox.checked);
//   });
// }

// init();



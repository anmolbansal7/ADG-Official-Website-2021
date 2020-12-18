// alert("Hello! I am an alert box!!");

const toggle = document.getElementById("toggle");
const body = document.body;
const nav = document.getElementById("navbar");
const foot = document.getElementById("footer");


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
		
		contactBox.classList.add("light-theme");
		nameY.classList.add("light-theme");
		mail.classList.add("light-theme");
		phone.classList.add("light-theme");
		msg.classList.add("light-theme");
		send.classList.add("light-theme");
		contactInfo.classList.add("light-theme");
		moreInfo.classList.add("light-theme");

	
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



var toggleSwitch = document.getElementById('switch');
var toggleContainer = document.getElementById('switch-container');
var toggleNumber;
var t2 = document.getElementById("team2");
var t1 = document.getElementById("team1");

toggleSwitch.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#D74046';
		t1.style.display = "none";
		// t1.style.clipPath = 'inset(0 0 0 50%)';
		t2.style.display = "flex";
		// t2.style.clipPath = 'inset(0 50% 0 0)';
		
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = 'dodgerblue';
		t1.style.display = "flex";
		// t1.style.clipPath = 'inset(0 50% 0 0)';
		t2.style.display = "none";
		// t2.style.clipPath = 'inset(0 0 0 50%)';
	}
	console.log(toggleNumber)
});

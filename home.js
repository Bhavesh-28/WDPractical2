let currtheme = "day";	

document.addEventListener('DOMContentLoaded', function () {
	const todaysDate = new Date();
	const currentYear = todaysDate.getFullYear();
	let yearSpan = document.getElementById("year");
	yearSpan.innerHTML = `${currentYear}`;
});

let name, digit, length, email = false;

function checkName(event) {
	const nameError = document.getElementById("nameError");
	let value = event.target.value;
	let nameRegex = /^[A-Za-z ]+$/;
	if (!nameRegex.test(value)) {
		nameError.style.display = "block";
		name = false;
	} else {
		nameError.style.display = "none";
		name = true;
	}
}

function checkNumber(event) {
	const phoneDigitsError = document.getElementById("phoneDigitsError");
	const phoneLengthError = document.getElementById("phoneLengthError");
	let value = event.target.value;
	let numRegex = /^[0-9]+$/;

	if (!numRegex.test(value)) {
		phoneDigitsError.style.display = "block";
		digit = false;
	} else {
		phoneDigitsError.style.display = "none";
		digit = true;
	}

	if (!(value.length == 10)) {
		phoneLengthError.style.display = "block";
		length = false;
	} else {
		phoneLengthError.style.display = "none";
		length = true;
	}
}

function checkEmail(event) {
	const emailError = document.getElementById("emailError");
	let value = event.target.value;
	let emailRegex = /^[a-z.]+@[a-z.]+$/

	if (!emailRegex.test(value)) {
		emailError.style.display = "block";
		email = false;
	} else {
		emailError.style.display = "none";
		email = true;
	}
}

function validateForm() {

	const dialog = document.getElementById("dialog");
	const username = document.getElementById("user");

	console.log(name, length, email);

	if (name == false || digit == false || length == false || email == false) {
		alert("Please correct the form before submitting");
	} else {
		const name = document.getElementById("name");
		const number = document.getElementById("number");
		const email = document.getElementById("email");

		localStorage.setItem("name", name.value);
		localStorage.setItem("phone", number.value);
		localStorage.setItem("email", email.value);

		name.value = '';
		number.value = '';
		email.value = '';

		dialog.style.display = "block";
		username.value = `${name}`;
	}
}

function redirectBtn() {
	window.location.href = "resume.html";
}

function themeToggle() {
	const dayIcon = document.getElementById("day");
	const nightIcon = document.getElementById("night");

	console.log("working!")

	if(currtheme == "day") {
		currtheme = "night";
		dayIcon.style.display = "none";
		nightIcon.style.display = "flex";
	} else {
		currtheme = "day";
		nightIcon.style.display = "none";
		dayIcon.style.display = "flex";
	}	
	document.body.classList.toggle("dark");
}
function calculateBirthday() {
	let name = document.getElementById('name').value;
	let birthMonth = parseInt(document.getElementById('birth-month').value);
	let birthDay = parseInt(document.getElementById('birth-day').value);
	let birthYear = parseInt(document.getElementById('birth-year').value);

	let currentYear = new Date().getFullYear();
	let age = currentYear - birthYear;

	let birthDate = new Date(birthYear, birthMonth - 1, birthDay);
	let options = {
		month: 'long',
		day: 'numeric'
	};
	let exactBirthday = birthDate.toLocaleString('default', options);

	alert(`Hello, ${name}! Your birthday is ${exactBirthday} and you are ${age} years old.`);
}
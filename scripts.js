/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function() {
	const emailInput = document.getElementById("email");
	const subscribe = document.querySelector(".newsletter form");
	const message = document.querySelector(".message");

	subscribe.addEventListener("submit", function(event) {
		event.preventDefault();

		const email = emailInput.value;

		if (emailInput.validity.valid === false || email === "") {
			message.textContent = "Please enter a valid email address.";
		} else {
			message.textContent = "Thank you! Your email address " + email+ " has been added to our mailing list!";
		}
	});
});

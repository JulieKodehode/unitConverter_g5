function unitConverter() {
	const unitInput = document.querySelector("#unitInput").value;
	// console.log(unitInput);

	const unitFrom = document.querySelector("#unitFrom").value;
	const unitTo = document.querySelector("#unitTo").value;
	let result;

	if (unitFrom === "cm" && unitTo === "m") {
		result = unitInput / 100;
	} else if (unitFrom === "cm" && unitTo === "km") {
		result = unitInput / 1000;
	} else if (unitFrom === "cm" && unitTo === "cm") {
		result = `Velg to forskjellige målenheter`;
	} else if (unitFrom === "m" && unitTo === "cm") {
		result = unitInput * 100;
	} else if (unitFrom === "m" && unitTo === "km") {
		result = unitInput * 1000;
	} else if (unitFrom === "m" && unitTo === "m") {
		result = `Velg to forskjellige målenheter`;
	} else if (unitFrom === "km" && unitTo === "cm") {
		result = unitInput / 10000;
	} else if (unitFrom === "km" && unitTo === "m") {
		result = unitInput / 100000;
	} else if (unitFrom === "km" && unitTo === "km") {
		result = `Velg to forskjellige målenheter`;
	} else {
		console.log("Something went completely wrong");
	}

	console.log(result);

	const unitDisplay = document.querySelector("#unitDisplay");
	unitDisplay.textContent = result;

	// console.log("Button is clicked?");
}

const unitButton = document.querySelector("#unitButton");
unitButton.addEventListener("click", unitConverter);

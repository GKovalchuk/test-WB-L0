import { validateInput, checkEmptyInput } from "./validateInput.js";
import { formData } from "../app.js";

const form = document.getElementById("basketForm");
const inputsForm = form.getElementsByTagName("input");

const serializeForm = (formNode) => new FormData(formNode);

function handleFormSubmit(event) {
	event.preventDefault();
	const errors = [];

	// checkErrors();
	for (let input of inputsForm) {
		// console.log(input);
		errors.push(checkEmptyInput(input));
	}
	console.log(errors);
	if (errors.includes(true)) {
		return;
	}

	const dataClient = serializeForm(event.target);
	const textDataClient = Array.from(dataClient.entries())
		.map(([key, value]) => `${key}: ${value}`)
		.join(";\n");
	formData.client = textDataClient;
	console.log(formData);
	const textData = Array.from(Object.entries(formData))
		.map(([key, value]) => `${key}: ${value}`)
		.join(";\n");
	// console.log();
	alert("Форма отправлена:\n" + textData);
	event.target.reset();
}

export function formLogic() {
	const form = document.getElementById("basketForm");
	form.reset();
	form.addEventListener("submit", handleFormSubmit);
}

import { formData } from "../app.js";

const form = document.getElementById("paymentForm");
const renderedElement = document.querySelectorAll(".card_icon");

const serializeForm = (formNode) => new FormData(formNode);

function handleFormSubmit(event) {
	event.preventDefault();

	const dataPayment = serializeForm(event.target);
	const textDataPayment = Array.from(dataPayment.entries())[0][1];
	formData.paymentOption = textDataPayment;
	console.log(formData);

	renderedElement.forEach((icon) => {
		icon.src = `./files/img/${textDataPayment}.svg`;
	});
}

export function paymentFormLogic() {
	form.reset();
	form.addEventListener("submit", handleFormSubmit);
}

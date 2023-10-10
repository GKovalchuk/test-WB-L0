import { formData } from "../app.js";
import { closeModal } from './modal.js';

const form = document.getElementById("paymentForm");
const renderedElement = document.querySelectorAll(".card_icon");

const serializeForm = (formNode) => new FormData(formNode);

function handleFormSubmit(event) {
	event.preventDefault();

	const dataPayment = serializeForm(event.target);
	const textDataPayment = Array.from(dataPayment.entries())[0][1];
	const currentModal = event.currentTarget.closest(".modal");

	formData.paymentOption = textDataPayment;

	renderedElement.forEach((icon) => {
		icon.src = `./files/img/${textDataPayment}.svg`;
	});

	closeModal(currentModal);
}

export function paymentFormLogic() {
	form.reset();
	form.addEventListener("submit", handleFormSubmit);
}

import { formData } from '../app.js';
import { createMaskForNumbers } from '../helpers.js';

const paymentCheckbox = document.getElementById("instansePayment");
const submitBtnText = document.getElementById("submitText");

export function setPaymentCheckboxListener() {
	if (formData.instansePayment === true) {
		submitBtnText.innerHTML = `Оплатить&nbsp${createMaskForNumbers(formData.priceSum)}&nbspсом`;
	}

	paymentCheckbox.onclick = () => {
		formData.instansePayment = !formData.instansePayment;
		if (formData.instansePayment === true) {
			submitBtnText.innerHTML = `Оплатить&nbsp${createMaskForNumbers(formData.priceSum)}&nbspсом`;
		} else {
			submitBtnText.textContent = `Заказать`;
		}
	};
}


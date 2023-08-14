import { renderBasketCards } from "./createCard/renderBasketCards.js";
import { data } from "./data.js";
import { createInputListeners } from "./form/createInputListeners.js";
import { paymentFormLogic } from "./modal/modalPaymentForm.js";
import { formLogic } from "./form/form.js";
import { modalsListener } from "./modal/modal.js";
import { renderPricesData } from "./changeAmount/renderPricesData.js";
import { deliveryFormLogic } from "./modal/modalDeliveryForm.js";

export const localData = [...data];
export const formData = {
	deliveryOption: [
		"Доставка в пункт выдачи",
		"Бишкек, улица Ахматбека Суюмбаева, 12/1",
	],
	paymentOption: "mir",
	client: {},
	priceSum: 2101063,
	amountSup: 4,
	discountSum: 200985,
};
export const render = () => {
	localData.map((cardData) => renderBasketCards(cardData));
};

render();
createInputListeners();
paymentFormLogic();
deliveryFormLogic();
formLogic();
modalsListener();

window.addEventListener("DOMContentLoaded", renderPricesData);

// правка верстки на промежуточных разрешениях
// раскрытие выпадающего списка
// чекбокс - нажатие по enter
// смена инпута по enter

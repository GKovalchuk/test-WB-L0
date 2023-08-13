import { renderBasketCards } from "./createCard/renderBasketCards.js";
import { data } from "./data.js";
import { createInputListeners } from "./form/createInputListeners.js";
import { paymentFormLogic } from "./modal/modalPaymentForm.js";
import { formLogic } from "./form/form.js";
import { modalsListener } from "./modal/modal.js";
import { renderPricesData } from "./changeAmount/renderPricesData.js";

export const localData = [...data];
export const formData = {
	delivery: "",
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
formLogic();
modalsListener();

window.addEventListener("DOMContentLoaded", renderPricesData);

// изменение значений в Итого
// верстка модалки с адресами
// товары добавление в форму значений
// изменение адреса доставки

// правка верстки на промежуточных разрешениях
// раскрытие выпадающего списка
// чекбокс - нажатие по enter
// смена инпута по enter

// чекбокс добавление в форму значений
// изменение способа оплаты
// отправка формы
// проверка на пустые поля

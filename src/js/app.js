import { renderBasketCards } from "./createCard/renderBasketCards.js";
import { data } from "./data.js";
import { createInputListeners } from "./form/createInputListeners.js";
import { formLogic } from "./form/form.js";

export const localData = [...data];
export const render = () => {
	localData.map((cardData) => renderBasketCards(cardData));
};

render();
createInputListeners();
formLogic();

// изменение значений в Итого
// чекбокс добавление в форму значений
// товары добавление в форму значений
// изменение адреса доставки
// изменение способа оплаты
// отправка формы
// проверка на пустые поля
// правка верстки на промежуточных разрешениях
// раскрытие выпадающего списка
// чекбокс - нажатие по enter
// смена инпута по enter

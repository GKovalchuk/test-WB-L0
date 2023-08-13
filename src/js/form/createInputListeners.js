import { validateInput } from "./validateInput.js";
import {
	formatForPhone,
	formatForPhoneClick,
	formatForPhoneBlur,
	formatForInn,
	removeEnterSubmit,
} from "./setMasks.js";

// создание listeners для полей ввода
export function createInputListeners() {
	const inputs = document.getElementsByTagName("input");
	const phoneInput = document.getElementById("clientsPhone");
	const innInput = document.getElementById("clientsInn");

	for (let input of inputs) {
		// валидация инпутов
		input.addEventListener("change", validateInput);
		// отмена отправки из инпута по enter
		input.addEventListener("keydown", removeEnterSubmit);
	}

	// добавление и скрытие "+" у номера телефона
	phoneInput.addEventListener("click", formatForPhoneClick);
	phoneInput.addEventListener("blur", formatForPhoneBlur);
	// добавление "+" у номера телефона при очистке поля пользователем
	phoneInput.addEventListener("keyup", formatForPhoneClick);
	// форматирование ввода для номера телефона
	phoneInput.addEventListener("keydown", formatForPhone);

	// форматирование ввода для номера инн
	innInput.addEventListener("keydown", formatForInn);
}

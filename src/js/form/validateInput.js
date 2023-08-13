import { createElement } from "../createElement.js";

const errors = {
	email: "Проверьте адрес электронной почты",
	phone: "Формат: +9 999 999 99 99",
	inn: "Укажите ИНН",
};

const errorsEmptyField = {
	name: "Укажите имя",
	lastName: "Введите фамилию",
	email: "Укажите электронную почту",
	phone: "Укажите номер телефона",
	inn: "Проверьте ИНН",
};

//валидация инпутов
export function validateInput({ target }) {
	const REGEXP_NAME = /^[-A-zА-Яа-я]$/;
	const REGEXP_EMAIL =
		/^[-\wА-Яа-я.]+@([A-z0-9А-Яа-я][-A-z0-9А-Яа-я]+\.)+[A-zА-Яа-я]{2,4}$/;
	const REGEXP_PHONE = /^[+][0-9]{1} [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/;
	const REGEXP_INN = /^[0-9]{14}$/;
	const value = target.value;
	const name = target.name;
	const parent = target.parentNode;
	const errorMes = parent.querySelector(".client_error");
	const noteNode = parent.querySelector(".client_note");

	//создание предупреждения об ошибке
	function createError() {
		if (noteNode) {
			noteNode.hidden = true;
		}
		target.classList.add("client_input--error");
		const errorMes = createElement("p", "client_error");
		errorMes.textContent = errors[name];
		parent.append(errorMes);
		target.removeEventListener("change", validateInput);
		target.addEventListener("keyup", validateInput);
	}

	//удаление предупреждения об ошибке
	function removeError() {
		if (errorMes) {
			if (noteNode) {
				noteNode.hidden = false;
			}
			target.classList.remove("client_input--error");
			errorMes.remove();
		}
	}

	// Проверка на ошибки
	if (
		(name === "name" && !value.match(REGEXP_NAME)) ||
		(name === "lastName" && !value.match(REGEXP_NAME)) ||
		(name === "email" && !value.match(REGEXP_EMAIL)) ||
		(name === "inn" && !value.match(REGEXP_INN)) ||
		(name === "phone" && !value.match(REGEXP_PHONE) && value.length > 1)
	) {
		if (!errorMes) {
			createError();
		}
	} else {
		removeError();
	}
}

//проверка и создание ошибки у пустого инпута при отправке формы
function checkEmptyInput({ target }) {
	const value = target.value;
	const name = target.name;
	const parent = target.parentNode;
	const errorMes = parent.querySelector(".client_error");
	const noteNode = parent.querySelector(".client_note");

	//создание предупреждения об ошибке
	function createError() {
		if (noteNode) {
			noteNode.hidden = true;
		}
		target.classList.add("client_input--error");
		const errorMes = createElement("p", "client_error");
		errorMes.textContent = errors[name];
		parent.append(errorMes);
		target.removeEventListener("change", validateInput);
		target.addEventListener("keyup", validateInput);
	}

	//удаление предупреждения об ошибке
	function removeError() {
		if (errorMes) {
			if (noteNode) {
				noteNode.hidden = false;
			}
			target.classList.remove("client_input--error");
			errorMes.remove();
		}
	}

	// Проверка на пустые поля
	if (value.length === 0 || (name === "phone" && value.length === 1)) {
		parent.classList.add("client_input--has-value");
	} else {
		parent.classList.remove("client_input--has-value");
	}
}

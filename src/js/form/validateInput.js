import { createElement } from "../helpers.js";

const errors = {
	email: "Проверьте адрес электронной почты",
	phone: "Формат: +9 999 999 99 99",
	inn: "Укажите ИНН",
};

const errorsEmptyField = {
	firstName: "Укажите имя",
	lastName: "Введите фамилию",
	email: "Укажите электронную почту",
	phone: "Укажите номер телефона",
	inn: "Проверьте ИНН",
};

//валидация инпутов
export function validateInput({ target }) {
	// const REGEXP_NAME = /^[-A-zА-Яа-я]$/;
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
			// возвращение примечания, если оно было
			if (noteNode) {
				noteNode.hidden = false;
			}
			errorMes.remove();
		}

		// удаление ошибок пустого поля
		parent.classList.remove("client_field--empty");
		target.placeholder = "";
		// удаление ошибок валидации
		target.classList.remove("client_input--error");
	}

	// Изменение классов не пустого поля
	if (value.length > 0 || (name === "phone" && value.length > 1)) {
		parent.classList.add("client_input--has-value");
	} else {
		parent.classList.remove("client_input--has-value");
	}

	// Проверка на ошибки
	if (
		// (name === "firstName" && !value.match(REGEXP_NAME)) ||
		// (name === "lastName" && !value.match(REGEXP_NAME)) ||
		value.length > 0 &&
		((name === "email" && !value.match(REGEXP_EMAIL)) ||
			(name === "inn" && !value.match(REGEXP_INN)) ||
			(name === "phone" && !value.match(REGEXP_PHONE) && value.length > 1))
	) {
		if (!errorMes) {
			createError();
		}
	} else {
		removeError();
	}
}

//проверка и создание ошибки у пустого инпута при отправке формы
export function checkEmptyInput(input) {
	const name = input.name;
	if (input.type === "checkbox") {
		return false;
	}
	const value = input.value;
	const errorMes = errorsEmptyField[name];

	//создание предупреждения об ошибке
	function createError() {
		input.classList.add("client_input--error");
		input.placeholder = errorMes;
		input.parentNode.classList.add("client_field--empty");
	}

	// Проверка на ошибки
	if (value.length < 1 || (name === "phone" && value.length < 2)) {
		createError();
		input.addEventListener("keydown", validateInput);
		return true;
	} else {
		return false;
	}
}

// форматирование и фильтр ввода для телефона
export function formatForPhone(e) {
	const value = e.target.value;
	const key = e.key;

	if (value.length === 0) {
		e.target.value = "+" + value;
	}

	if (key >= "0" && key <= "9" && value.length < 16) {
		switch (value.length) {
			case 3:
				e.target.value = value.substr(0, 2) + " " + value.substr(2);
				break;
			case 7:
				e.target.value = value.substr(0, 6) + " " + value.substr(6);
				break;
			case 11:
				e.target.value = value.substr(0, 10) + " " + value.substr(10);
				break;
			case 14:
				e.target.value = value.substr(0, 13) + " " + value.substr(13);
				break;
			default:
				e.target.value = value;
		}
	} else if (key == "Backspace" || key == "Delete" || key == "Tab" || key == "Enter") {
		e.target.value = value;
	} else {
		e.preventDefault();
		return false;
	}
}

// добавление плюса в пустое поле для телефона
export function formatForPhoneClick(e) {
	e.preventDefault();
	const value = e.target.value;

	if (value.length === 0) {
		e.target.value = "+" + value;
	}
}

// скрытие плюса при потере фокуса в пустом поле для телефона
export function formatForPhoneBlur(e) {
	const value = e.target.value;

	if (value.length === 1) {
		e.target.value = "";
	}
}

// фильтр ввода для инн
export function formatForInn(e) {
	const value = e.target.value;
	const key = e.key;

	if (
		(key >= "0" && key <= "9" && value.length < 14) ||
		key == "Backspace" ||
		key == "Delete"
	) {
		e.target.value = value;
	} else {
		e.preventDefault();
		return false;
	}
}

// запрет отправки формы по enter из input
export function removeEnterSubmit(e) {
	if (e.key == "Enter") {
		e.preventDefault();
		return false;
	}
}

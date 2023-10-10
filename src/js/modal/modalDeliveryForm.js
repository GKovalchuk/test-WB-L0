import { formData } from "../app.js";
import { closeModal } from './modal.js';
import { createElement } from '../helpers.js';

const form = document.getElementById("deliveryForm");
const toggleCourierButton = document.getElementById(
	"modalDeliveryButtonCourier"
);
const togglePointButton = document.getElementById("modalDeliveryButtonPoint");
const courierField = document.getElementById("modalDeliveryCourierFields");
const pointField = document.getElementById("modalDeliveryPointFields");
const renderAdress = document.querySelectorAll(".delivery_address--text");
const renderMethod = document.querySelectorAll(".delivery_address--method");
const bucketBtns = document.querySelectorAll(".bucket-icon--delivery-modal");

const serializeForm = (formNode) => new FormData(formNode);

function handleFormSubmit(event) {
	event.preventDefault();

	const dataDelivery = serializeForm(event.target);
	const textDataDelivery = Array.from(dataDelivery.entries())[0][1];
	const [method, address] = textDataDelivery.split("|");
	const currentModal = event.currentTarget.closest(".modal");

	formData.deliveryOption = [method, address];

	// Рендер нового адреса на странице
	renderAdress.forEach((field) => {
		field.textContent = address;
	});
	renderMethod.forEach((field) => {
		field.textContent = method;
	});

	closeModal(currentModal);
}

const switchFields = (hided, appeared) => {
	hided.style = "display: none";
	appeared.style = "display: flex";
};

// Смена полей в модальном окне
const toggleFieldsCourier = () => {
	toggleCourierButton.classList.add("modal-delivery_button--active");
	togglePointButton.classList.remove("modal-delivery_button--active");
	switchFields(pointField, courierField);
};

const toggleFieldsPoint = () => {
	togglePointButton.classList.add("modal-delivery_button--active");
	toggleCourierButton.classList.remove("modal-delivery_button--active");
	switchFields(courierField, pointField);
};

const removeAddress = (event) => {
	event.stopPropagation()
	const parent = event.target.closest('.modal__radio-wrapper');
	const fieldId = parent.parentNode.id;
	const field = parent.parentNode;
	const radioNode = parent.querySelector('.radio');

	// Проверка на последний адрес во всех полях
	const checkLastAddress = () => {
		if ((courierField.children.length + pointField.children.length) <= 2) {
			const lastBucketBtn = document.querySelector(".bucket-icon--delivery-modal");
			lastBucketBtn.parentNode.removeChild(lastBucketBtn);
		}
	}

	// Замена на текущий адрес, если активный был удален
	const switchAddress = () => {
		const dataDelivery = serializeForm(form);
		const textDataDelivery = Array.from(dataDelivery.entries())[0][1];
		const [method, address] = textDataDelivery.split("|");

		formData.deliveryOption = [method, address];

		// Рендер нового адреса на странице
		renderAdress.forEach((field) => {
			field.textContent = address;
		});
		renderMethod.forEach((field) => {
			field.textContent = method;
		});
	}

	// Если адресов несколько
	if (field.children.length > 1) {
		
		// Если удаляемый адрес выбран
		if (radioNode.checked === true) {
			field.removeChild(parent);
			field.querySelector('.radio').checked = true;
			switchAddress();
		} else {
			field.removeChild(parent);
		}
		checkLastAddress();
		return;
	};

	// Если адрес последний в текущем поле
	if (field.children.length === 1) {
		// Удаляем адрес
		if (radioNode.checked === true) {
			field.removeChild(parent);
			field.parentNode.querySelector('.radio').checked = true;
		} else {
			field.removeChild(parent);
		}

		// Создаем и добавляем замещающий текст
		const notificationInner = createElement('div', "modal__radio-wrapper modal-delivery__radio_wrapper");
		const notification = createElement('div', "delivery_address");
		const notificationText = createElement('p', "");
		notificationText.textContent = "Добавьте новый адрес в личном кабинете";

		field.append(notificationInner);
		notificationInner.append(notification);
		notification.append(notificationText);
		
		checkLastAddress();
	};
};

export function deliveryFormLogic() {
	form.reset();

	toggleCourierButton.addEventListener("click", toggleFieldsCourier);
	togglePointButton.addEventListener("click", toggleFieldsPoint);
	bucketBtns.forEach((btn) => btn.onclick = removeAddress);
	form.addEventListener("submit", handleFormSubmit);
}

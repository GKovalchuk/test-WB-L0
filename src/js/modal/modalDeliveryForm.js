import { formData } from "../app.js";

const form = document.getElementById("deliveryForm");
const toggleCourierButton = document.getElementById(
	"modalDeliveryButtonCourier"
);
const togglePointButton = document.getElementById("modalDeliveryButtonPoint");
const courierField = document.getElementById("modalDeliveryCourierFields");
const pointField = document.getElementById("modalDeliveryPointFields");
const renderAdress = document.querySelectorAll(".delivery_address--text");
const renderMethod = document.querySelectorAll(".delivery_address--method");

const serializeForm = (formNode) => new FormData(formNode);

function handleFormSubmit(event) {
	event.preventDefault();

	const dataDelivery = serializeForm(event.target);
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

export function deliveryFormLogic() {
	form.reset();

	toggleCourierButton.addEventListener("click", toggleFieldsCourier);
	togglePointButton.addEventListener("click", toggleFieldsPoint);
	form.addEventListener("submit", handleFormSubmit);
}

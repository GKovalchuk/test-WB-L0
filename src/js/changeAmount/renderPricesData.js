import { createMaskForNumbers, setDeclension } from "../helpers.js";
import { formData } from "../app.js";
import { getCollapseTextData } from "../form/supplies.js";
import { setPaymentCheckboxListener } from "../form/instansePayment.js";

// получение количества нод, которые нужно обойти
const getIds = () => {
	const parentAvailableCards = document.getElementById("suppliesCards");
	const listAvailableCards = parentAvailableCards.childNodes;
	let arr = [];
	listAvailableCards.forEach((node) => {
		let id = node.id;
		id = id.replace(/basketCard/, "");
		arr.push(id);
	});
	return arr;
};

// получение цен из карточек
const findSumPrices = (ids) =>
	ids.reduce((acc, id) => {
		const elem = document.getElementById(`price${id}`);
		if (elem.closest('.basket-card').classList.contains('card-choosed')) {
			let text = elem.textContent;
			text = text.replace(/ /g, "");
			acc += Number(text);
		}
		return acc;
	}, 0);

// получение количества товаров
const findAmount = (ids) =>
	ids.reduce((acc, id) => {
		const elem = document.getElementById(`counterResult${id}`);
		if (elem.closest('.basket-card').classList.contains('card-choosed')) {
			let text = elem.textContent;
			acc += Number(text);
		}
		return acc;
	}, 0);

// получение суммы без скидки из карточек
const findPriceFull = (ids) =>
	ids.reduce((acc, id) => {
		const elem = document.getElementById(`discount${id}`);
		if (elem.closest('.basket-card').classList.contains('card-choosed')) {
			let text = elem.textContent;
			text = text.slice(0, text.indexOf(" сом"));
			text = text.replace(/ /g, "");
			acc += Number(text);
		}
		return acc;
	}, 0);

// рендер элементов Итого
const renderTotalPrices = (sumPrices, priceFull, sup) => {
	const priceTotalNode = document.getElementById("priceTotal");
	const priceFullNode = document.getElementById("priceFull");
	const totalSupNode = document.getElementById("totalSup");
	const discountTotalNode = document.getElementById("priceDiscount");
	priceTotalNode.innerHTML = createMaskForNumbers(sumPrices, " ");
	priceFullNode.innerHTML = `${createMaskForNumbers(priceFull, " ")} сом`;
	const discountTotal = priceFull - sumPrices;
	if (discountTotal < 1) {
		discountTotalNode.innerHTML = `${createMaskForNumbers(
			discountTotal,
			" "
		)} сом`;
	} else {
		discountTotalNode.innerHTML = `−${createMaskForNumbers(
			discountTotal,
			" "
		)} сом`;
	}

	totalSupNode.innerHTML = `${createMaskForNumbers(sup)} ${setDeclension(sup, [
		"товар",
		"товара",
		"товаров",
	])}`;
};

export const renderPricesData = () => {
	const ids = getIds();

	const sumPrices = findSumPrices(ids);
	const priceFull = findPriceFull(ids);
	const amount = findAmount(ids);

	// Сборка данных о товарах и ценах в formData
	formData.priceSum = sumPrices;
	formData.amount = amount;
	formData.discountSum = priceFull - sumPrices;

	getCollapseTextData(sumPrices, amount);
	renderTotalPrices(sumPrices, priceFull, amount);
	setPaymentCheckboxListener();
};

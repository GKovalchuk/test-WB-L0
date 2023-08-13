import { createMaskForNumbers, setDeclension } from "../helpers.js";
import { formData } from "../app.js";

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
		let text = elem.textContent;
		text = text.replace(/ /g, "");
		acc += Number(text);
		return acc;
	}, 0);

// получение суммы без скидки из карточек
const findPriceFull = (ids) =>
	ids.reduce((acc, id) => {
		const elem = document.getElementById(`discount${id}`);
		let text = elem.textContent;
		text = text.slice(0, text.indexOf(" сом"));
		console.log(text);
		text = text.replace(/ /g, "");
		acc += Number(text);
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
	discountTotalNode.innerHTML = `−${createMaskForNumbers(
		priceFull - sumPrices,
		" "
	)} сом`;
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
	console.log(sumPrices);
	console.log(priceFull);

	renderTotalPrices(sumPrices, priceFull, ids.length);

	// Сборка данных о товарах и ценах в formData
	formData.priceSum = sumPrices;
	formData.amountSup = ids.length;
	formData.discountSum = priceFull - sumPrices;
};

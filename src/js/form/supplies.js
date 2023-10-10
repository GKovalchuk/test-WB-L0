import { createMaskForNumbers, setDeclension } from "../helpers.js";

const btnCollapseInStock = document.getElementById('btnCollapseInStock');
const btnCollapseOutOfStock = document.getElementById('btnCollapseOutOfStock');
const suppliesCards = document.getElementById('suppliesCards');
const suppliesCardsOutOfStock = document.getElementById('suppliesCardsOutOfStock');
const suppliesControlsLabel = document.getElementById('suppliesControlsLabel');
const takeAllSupplies = document.getElementById('takeAllSupplies');
const suppliesControlsText = document.getElementById('suppliesControlsText');
const outOfStockText = document.getElementById("outOfStockCounters");
let outOfStockCounter = 0,
	sum = 0, 
	sup = 0;

export function setCollapseText() {
	const suppl = setDeclension(sup, ["товар", "товара", "товаров"]);
	suppliesControlsText.innerHTML = `&nbsp${sup}&nbsp${suppl}&nbsp·&nbsp${createMaskForNumbers(sum)}&nbsp${'сом'}`;
}

export const getCollapseTextData = (sumPrices, length) => {
	sum = sumPrices;
	sup = length;
}

export function setTextOutOfStockCounters(num = 0) {
	outOfStockCounter +=  num;
	const suppl = setDeclension(outOfStockCounter, ["товар", "товара", "товаров"]);
	const missing = setDeclension(outOfStockCounter, [
		"Отсутствует",
		"Отсутствуют",
		"Отсутствуют",
	]);
	outOfStockText.innerHTML = `${missing}&nbsp·&nbsp${outOfStockCounter}&nbsp${suppl}`;
	if (outOfStockCounter === 0) {
		suppliesCardsOutOfStock.classList.add('hide');
	}
}

export const collapsingSupplies = () => {
	btnCollapseInStock.addEventListener('click', () => {
		btnCollapseInStock.classList.toggle('btn-expand--active');
		suppliesCards.classList.toggle('hide');
		suppliesControlsLabel.classList.toggle('hide');
		takeAllSupplies.classList.toggle('hide');
		suppliesControlsText.classList.toggle('hide');

		setCollapseText();
	});

	btnCollapseOutOfStock.addEventListener('click', () => {
		btnCollapseOutOfStock.classList.toggle('btn-expand--active');
		suppliesCardsOutOfStock.classList.toggle('hide');

		setTextOutOfStockCounters();
	});
}
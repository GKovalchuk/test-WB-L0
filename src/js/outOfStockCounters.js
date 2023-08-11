import { setDeclension } from "./helpers.js";

export function outOfStockCounters(counter) {
	const pCounter = document.getElementById("outOfStockCounters");
	const suppl = setDeclension(counter, ["товар", "товара", "товаров"]);
	const missing = setDeclension(counter, [
		"Отсутствует",
		"Отсутствуют",
		"Отсутствуют",
	]);
	pCounter.innerHTML = `${missing}&nbsp·&nbsp${counter}&nbsp${suppl}`;
}

import { createCard } from "./createCard.js";
import { outOfStockCounters } from "../outOfStockCounters.js";
let outOfStockCounter = 0;

export const renderBasketCards = (data) => {
	const card = document.createDocumentFragment();
	let root;
	if (data.amountTotal > 0) {
		root = document.getElementById("suppliesCards");
	} else {
		outOfStockCounter += 1;
		root = document.getElementById("suppliesCardsOutOfStock");
		outOfStockCounters(outOfStockCounter);
	}
	card.append(createCard(data));
	root.append(card);
};
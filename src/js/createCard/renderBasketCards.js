import { createCard } from "./createCard.js";
import { setTextOutOfStockCounters } from "../form/supplies.js";
import { setNotificationCounter } from "../notifications/notifications.js";

export const renderBasketCards = (data) => {
	const card = document.createDocumentFragment();
	let root;
	if (data.amountTotal > 0) {
		root = document.getElementById("suppliesCards");
		setNotificationCounter('suppliesInStock', 1);
	} else {
		root = document.getElementById("suppliesCardsOutOfStock");
		setTextOutOfStockCounters(1);
	}
	card.append(createCard(data));
	root.append(card);
};

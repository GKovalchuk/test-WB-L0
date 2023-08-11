import { localData } from "../app.js";
import { createPriceBlock } from "../createCard/createPriceBlock.js";
import { createBasketCardOptions } from "../createCard/createBasketCardOptions.js";

export const incAmount = (amountTotal, supId) => {
	const curData = localData.filter(({ id }) => id === supId)[0];
	curData.amount += 1;
	renderNewElements(supId, curData);
};
export const decAmount = (amountTotal, supId) => {
	const curData = localData.filter(({ id }) => id === supId)[0];
	curData.amount -= 1;
	renderNewElements(supId, curData);
};

const renderNewElements = (supId, curData) => {
	const basketCard = document.getElementById(`basketCard${supId}`);
	const priceWrapper = document.getElementById(`priceWrapper${supId}`);
	const basketCardOptions = document.getElementById(
		`basketCardOptions${supId}`
	);
	if (priceWrapper.classList.contains("price_wrapper--desc")) {
		const newPriceWrapper = createPriceBlock(
			"desc",
			supId,
			curData.price,
			curData.discount,
			curData.discountDetails,
			curData.amount
		);
		priceWrapper.replaceWith(newPriceWrapper);
	}
	basketCardOptions.remove();
	const newBasketCardOptions = createBasketCardOptions(curData);
	basketCard.append(newBasketCardOptions);
};

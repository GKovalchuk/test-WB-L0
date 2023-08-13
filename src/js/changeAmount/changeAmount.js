import { localData } from "../app.js";
import { createPriceBlock } from "../createCard/createPriceBlock.js";
import { createBasketCardOptions } from "../createCard/createBasketCardOptions.js";

// увеличение количества товаров по "+"
export const incAmount = (amountTotal, supId) => {
	const curData = localData.filter(({ id }) => id === supId)[0];
	curData.amount += 1;
	renderNewElements(supId, curData);
};

// уменьшение количества товаров по "-"
export const decAmount = (amountTotal, supId) => {
	const curData = localData.filter(({ id }) => id === supId)[0];
	curData.amount -= 1;
	renderNewElementsInCards(supId, curData);
};

// отправка команды на перерисовку элементов в карточке товара
const renderNewElementsInCards = (supId, curData) => {
	const basketCard = document.getElementById(`basketCard${supId}`);
	const priceWrapper = document.getElementById(`priceWrapper${supId}`);
	const basketCardOptions = document.getElementById(
		`basketCardOptions${supId}`
	);

	// если мобильное разрешение
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

// отправка команды на перерисовку элементов в поле итогов
const renderNewElementsInSummary = (supId, curData) => {
	// const basketCard = document.getElementById(`basketCard${supId}`);
	// const priceWrapper = document.getElementById(`priceWrapper${supId}`);
	// const basketCardOptions = document.getElementById(
	// 	`basketCardOptions${supId}`
	// );
	// // если мобильное разрешение
	// if (priceWrapper.classList.contains("price_wrapper--desc")) {
	// 	const newPriceWrapper = createPriceBlock(
	// 		"desc",
	// 		supId,
	// 		curData.price,
	// 		curData.discount,
	// 		curData.discountDetails,
	// 		curData.amount
	// 	);
	// 	priceWrapper.replaceWith(newPriceWrapper);
	// }
	// basketCardOptions.remove();
	// const newBasketCardOptions = createBasketCardOptions(curData);
	// basketCard.append(newBasketCardOptions);
};

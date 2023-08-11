import { createElement } from "../createElement.js";
import { incAmount, decAmount } from "../changeAmount/changeAmount.js";
import { createPriceBlock } from "./createPriceBlock.js";

export const createBasketCardOptions = ({
	id,
	price,
	discount,
	discountDetails,
	amount,
	amountTotal = 0,
}) => {
	const likeIconTemplate = document.querySelector(".like-icon");
	const bucketIconTemplate = document.querySelector(".bucket-icon");

	const createElementsForActiveCard = () => {
		// создание блока с ценой для десктопного разрешения
		const priceBlock = createPriceBlock(
			"options",
			id,
			price,
			discount,
			discountDetails,
			amount
		);
		// Создание элементов
		const counter = createElement("div", "counter"),
			buttonDec = createElement("button", "counter_operator lead"),
			counterResult = createElement("div", "counter_result"),
			buttonInc = createElement(
				"button",
				"counter_operator counter_operator--inc  lead"
			),
			pAmount = createElement("p", "caption");

		// Назначение свойств элементам
		counterResult.id = `counterResult${id}`;
		counterResult.textContent = amount;

		buttonDec.id = `buttonDec${id}`;
		buttonDec.type = "button";
		buttonDec.textContent = "−";
		if (amount < 2) {
			buttonDec.classList.add("counter_operator--disabled");
			buttonDec.disabled = true;
		}
		buttonDec.addEventListener("click", () => {
			decAmount(amountTotal, id);
		});

		buttonInc.id = `buttonInc${id}`;
		buttonInc.type = "button";
		buttonInc.textContent = "+";
		if (amount >= amountTotal) {
			buttonInc.classList.add("counter_operator--disabled");
			buttonInc.disabled = true;
		}
		buttonInc.addEventListener("click", () => {
			incAmount(amountTotal, id);
		});

		if (amountTotal <= 2) {
			pAmount.textContent = `Осталось ${amountTotal} шт.`;
		}

		// Добавление элементов
		counter.append(buttonDec);
		counter.append(counterResult);
		counter.append(buttonInc);

		basketCardOptionsAmount.append(counter);
		if (amountTotal <= 2) {
			basketCardOptionsAmount.append(pAmount);
		}

		basketCardOptionsPriceWrapper.append(priceBlock);
	};

	// Создание элементов
	const basketCardOptions = createElement("div", "basket-card_options"),
		basketCardOptionsAmount = createElement(
			"div",
			"basket-card_options-amount"
		),
		basketCardOptionsIcons = createElement("div", "basket-card_options-icons"),
		likeIcon = likeIconTemplate.cloneNode(true),
		bucketIcon = bucketIconTemplate.cloneNode(true),
		basketCardOptionsPriceWrapper = createElement(
			"div",
			"basket-card_options-price_wrapper"
		);

	// Назначение свойств
	basketCardOptions.id = `basketCardOptions${id}`;

	likeIcon.id = `likeIcon${id}`;

	bucketIcon.id = `bucketIcon${id}`;
	bucketIcon.addEventListener("click", () => {
		const basketCard = document.getElementById(`basketCard${id}`);
		basketCard.remove();
	});

	if (amountTotal > 0) {
		createElementsForActiveCard();
	}

	// Добавление элементов
	basketCardOptionsIcons.append(likeIcon);
	basketCardOptionsIcons.append(bucketIcon);

	basketCardOptionsAmount.append(basketCardOptionsIcons);

	basketCardOptions.append(basketCardOptionsAmount);
	basketCardOptions.append(basketCardOptionsPriceWrapper);

	return basketCardOptions;
};
import { createElement } from "../helpers.js";
import { incAmount, decAmount } from "../changeAmount/changeAmount.js";
import { createPriceBlock } from "./createPriceBlock.js";
import { renderPricesData } from "../changeAmount/renderPricesData.js";
import { setNotificationCounter, renderAllNotificationCounters } from "../notifications/notifications.js";
import { setTextOutOfStockCounters } from "../form/supplies.js";

let favouritesSupplies = [];

export const createBasketCardOptions = ({ id, price, discount, discountDetails, amount, amountTotal = 0 }) => {
	const likeIconTemplate = document.querySelector(".like-icon");
	const bucketIconTemplate = document.querySelector(".bucket-icon");

	// создание элементов для активной карточки
	const createElementsForActiveCard = () => {
		// создание блока с ценой для десктопного разрешения
		const priceBlock = createPriceBlock("options", id, price, discount, discountDetails, amount);
		// Создание элементов
		const counter = createElement("div", "counter"),
			buttonDec = createElement("button", "counter_operator lead"),
			counterResult = createElement("div", "counter_result"),
			buttonInc = createElement("button", "counter_operator counter_operator--inc  lead"),
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
		const resizeCard = () => {
			renderAllNotificationCounters();
			if (amountTotal > 2 && window.innerWidth >= 1024) {
				pAmount.classList.add("hide");
			} else {
				pAmount.classList.remove("hide");
			}
		};
		window.addEventListener("resize", resizeCard);
		resizeCard();

		// Добавление элементов
		counter.append(buttonDec);
		counter.append(counterResult);
		counter.append(buttonInc);

		basketCardOptionsAmount.append(counter);
		basketCardOptionsAmount.append(pAmount);
		basketCardOptionsPriceWrapper.append(priceBlock);
	};

	// Создание элементов
	const basketCardOptions = createElement("div", "basket-card_options"),
		basketCardOptionsAmount = createElement("div", "basket-card_options-amount"),
		basketCardOptionsIcons = createElement("div", "basket-card_options-icons"),
		likeIcon = likeIconTemplate.cloneNode(true),
		likeIconActive = likeIcon.querySelector(".like-icon-active"),
		bucketIcon = bucketIconTemplate.cloneNode(true),
		basketCardOptionsPriceWrapper = createElement("div", "basket-card_options-price_wrapper");

	// Назначение свойств
	basketCardOptions.id = `basketCardOptions${id}`;

	likeIcon.id = `likeIcon${id}`;
	bucketIcon.id = `bucketIcon${id}`;
	likeIconActive.classList.add('hide');

	// снимаем класс, если он ранее был снят
	if (favouritesSupplies.includes(likeIcon.id) === true) {
		likeIconActive.classList.remove("hide");
	}

	likeIcon.onclick = () => {
		likeIconActive.classList.toggle("hide");
		
		// изменение счетчика в уведомлениях
		if (likeIconActive.classList.contains('hide')){
			setNotificationCounter('likes', -1);
			favouritesSupplies = favouritesSupplies.filter((item) => item != likeIcon.id);
		} else {
			setNotificationCounter('likes', 1);
			favouritesSupplies.push(likeIcon.id);
		}
	};
	bucketIcon.addEventListener("click", () => {
		const basketCard = document.getElementById(`basketCard${id}`);
		basketCard.remove();

		// изменение счетчика в уведомлениях (для товаров в наличии)
		if (amountTotal > 0) setNotificationCounter('suppliesInStock', -1);
		// изменение счетчика в уведомлениях (для отсутствующих товаров)
		if (amountTotal <= 0) setTextOutOfStockCounters(-1);

		renderPricesData();
	});


		// создание элементов для активной карточки
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

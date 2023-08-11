import { createElement } from "../createElement.js";
import { createMaskForNumbers } from "../helpers.js";

export const createPriceBlock = (
	block,
	id,
	price,
	discount,
	discountDetails,
	amount
) => {
	// Функция создающая элемент с ценой
	const createPrice = () => {
		const priceStr = createMaskForNumbers(discount * amount);
		let hPrice;
		if (priceStr.length > 6) {
			hPrice = createElement("h4");
		} else {
			hPrice = createElement("h4", "title--s");
		}
		hPrice.innerHTML = priceStr;
		return hPrice;
	};

	// Создание основных элементов
	let priceWrapper;
	if (block === "desc") {
		priceWrapper = createElement("div", `price_wrapper--desc`);
	} else if (block === "options") {
		priceWrapper = createElement("div", `price_wrapper--options`);
	}
	const priceBlock = createElement("div", "price"),
		priceFull = createElement("div", "price--full"),
		hPrice = createPrice(),
		h4Currency = createElement("h4"),
		s = createElement("s", "caption info_dropdown not-actual"),
		// Создание выпадающего списка
		SDropdown = createElement("div", "dropdown"),
		SDropdownText = createElement("div", "dropdown_text"),
		SDropdownNum = createElement("div", "dropdown_num");

	// Наполнение основных элементов
	priceWrapper.id = `priceWrapper${id}`;
	h4Currency.innerHTML = "&nbspсом";
	s.innerHTML = `${createMaskForNumbers(price * amount)} сом`;

	// Наполнение выпадающего списка
	discountDetails.map(({ text, num }) => {
		const dropdownText = createElement("p", "caption");
		const dropdownNum = createElement("p", "caption");
		dropdownText.innerHTML = text;
		dropdownNum.innerHTML = `-${num} сом`;
		SDropdownText.append(dropdownText);
		SDropdownNum.append(dropdownNum);
	});

	// Добавление элементов
	s.append(SDropdown);
	SDropdown.append(SDropdownText);
	SDropdown.append(SDropdownNum);

	priceBlock.append(hPrice);
	priceBlock.append(h4Currency);

	priceFull.append(s);

	priceWrapper.append(priceBlock);
	priceWrapper.append(priceFull);
	return priceWrapper;
};

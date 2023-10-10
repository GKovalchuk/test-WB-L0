import { createElement } from "../helpers.js";
import { createPriceBlock } from "./createPriceBlock.js";

export const createBasketCardDescription = ({
	id,
	title,
	ref = "#",
	options = [],
	warehouse,
	company,
	discount,
	amountTotal,
	amount,
	price,
	discountDetails,
	image,
	imagex2,
}) => {
	const infoIconTemplate = document.querySelector(".info-icon");
	// создание элементов для активной карточки
	const createElementsForActiveCard = () => {
		// создание блока с ценой для мобильного разрешения
		const priceBlock = createPriceBlock(
			"desc",
			id,
			price,
			discount,
			discountDetails,
			amount
		);

		// Создание элементов
		const input = createElement("input", "checkbox"),
			label = createElement(
				"label",
				"supplies__controls_checkbox checkbox_label"
			),
			basketCardDescriptionSource = createElement(
				"div",
				"basket-card_description-source"
			),
			basketCardDescriptionSourceWarehouse = createElement(
				"div",
				"basket-card_description-source--warehouse"
			),
			pWarehouse = createElement("p", "caption"),
			basketCardDescriptionSourceCompany = createElement(
				"div",
				"basket-card_description-source--company"
			),
			pCompany = createElement("p", "caption"),
			info = createElement("div", "dropdown_info"),
			infoIcon = infoIconTemplate.cloneNode(true),
			infoDropdown = createElement("div", "dropdown dropdown--wrapper"),
			dropdownTitle = createElement("h5"),
			dropdownOgrn = createElement("p", "caption"),
			dropdownText = createElement("p", "caption");
		// Назначение свойств
		input.id = `toggleSupply${id}`;
		input.name = `toggleSupply${id}`;
		input.type = "checkbox";

		label.setAttribute("for", `toggleSupply${id}`);

		pWarehouse.textContent = warehouse;
		pCompany.textContent = company.name;

		infoIcon.id = `infoIcon${id}`;

		dropdownTitle.textContent = company.name;
		dropdownOgrn.textContent = company.OGRN;
		dropdownText.textContent = company.address;
		infoDropdown.append(dropdownTitle);
		infoDropdown.append(dropdownOgrn);
		infoDropdown.append(dropdownText);

		// Добавление элементов
		basketCardDescriptionImg.append(input);
		basketCardDescriptionImg.append(label);

		basketCardDescriptionSourceWarehouse.append(pWarehouse);

		info.append(infoIcon);
		info.append(infoDropdown);

		basketCardDescriptionSourceCompany.append(pCompany);
		basketCardDescriptionSourceCompany.append(info);

		basketCardDescriptionSource.append(basketCardDescriptionSourceWarehouse);
		basketCardDescriptionSource.append(basketCardDescriptionSourceCompany);

		basketCardDescriptionTexts.prepend(priceBlock);
		basketCardDescriptionTexts.append(basketCardDescriptionSource);
	};

	// Создание элементов
	const basketCardDescription = createElement("div", "basket-card_description"),
		basketCardDescriptionImg = createElement(
			"div",
			"basket-card_description-img"
		),
		img = createElement("img"),
		basketCardDescriptionTexts = createElement(
			"div",
			"basket-card_description-texts"
		),
		a = createElement("a", "body-mobile");

	const createBasketCardDescriptionDetails = () => {
		if (options.length > 0) {
			const basketCardDescriptionDetails = createElement(
				"div",
				"basket-card_description-details"
			);
			options.map((text) => {
				const p = createElement("p", "caption");
				p.textContent = text;
				basketCardDescriptionDetails.append(p);
			});
			basketCardDescriptionTexts.append(basketCardDescriptionDetails);
		}
	};

	// Назначение свойств
	img.src = image;
	img.srcset = imagex2;

	a.textContent = title;
	a.href = ref;

	// Добавление элементов
	basketCardDescriptionImg.append(img);

	basketCardDescriptionTexts.append(a);
	createBasketCardDescriptionDetails();

	if (amountTotal > 0) {
		createElementsForActiveCard();
	}

	basketCardDescriptionImg.append(img);

	basketCardDescription.append(basketCardDescriptionImg);
	basketCardDescription.append(basketCardDescriptionTexts);

	return basketCardDescription;
};

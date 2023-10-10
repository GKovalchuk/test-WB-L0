import { createBasketCardDescription } from "./createBasketCardDescription.js";
import { createBasketCardOptions } from "./createBasketCardOptions.js";
import { createElement } from "../helpers.js";

export const createCard = (data) => {
	const id = data.id;
	const basketCard = createElement("div", "basket-card");
	basketCard.id = `basketCard${id}`;

	const basketCardDescription = createBasketCardDescription(data);
	const BasketCardOptions = createBasketCardOptions(data);
	const basketCardSpan = createElement("span", "basket-card_span");
	basketCard.append(basketCardSpan);
	basketCard.append(basketCardDescription);
	basketCard.append(BasketCardOptions);

	return basketCard;
};

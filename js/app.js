import { renderBasketCards } from "./createCard/renderBasketCards.js";
import { data } from "./data.js";

export const localData = [...data];
export const render = () => {
	localData.map((cardData) => renderBasketCards(cardData));
};

render();

// чекбокс - нажатие по enter

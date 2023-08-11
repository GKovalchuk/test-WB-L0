export const createElement = (elem, classes) => {
	const newElem = document.createElement(elem);
	if (classes) newElem.className = classes;
	return newElem;
};

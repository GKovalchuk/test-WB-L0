export function createMaskForNumbers(num, space = "&thinsp;") {
	let newStr = `${Math.round(num)}`;
	newStr = newStr
		.split("")
		.map((num, i, arr) => {
			return (arr.length - 1 - i) % 3 === 0 && i !== arr.length - 1
				? num + space
				: num;
		})
		.join("");
	return newStr;
}

export function setDeclension(number, titles) {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	];
}

export function cutString(str, sym) {
	let i = str.indexOf(sym);
	if (i > 0) {
		return str.substring(0, str.indexOf(sym));
	}
	return str;
}

export const createElement = (elem, classes) => {
	const newElem = document.createElement(elem);
	if (classes) newElem.className = classes;
	return newElem;
};

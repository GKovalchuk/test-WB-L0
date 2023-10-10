const likeCounter = document.getElementById("likeCounter");
const suppliesInStockCounter = document.getElementById("suppliesInStockCounter");

const notificationCounters = {
	likes: likeCounter,
	suppliesInStock: suppliesInStockCounter,
}

const getCounterNode = (counter) => notificationCounters[counter];

const renderNotification = (counter) => {
	if (counter.textContent > 0) {
		counter.parentElement.classList.remove('hide');
	} else {
		counter.parentElement.classList.add('hide');
	}
}

export const setNotificationCounter = (counter, value) => {
	const node = getCounterNode(counter);
	node.textContent = Number(node.textContent) + value;
	renderNotification(node);
}

export const renderAllNotificationCounters = () => {
	Object.values(notificationCounters)
		.map((counter) => renderNotification(counter));
}




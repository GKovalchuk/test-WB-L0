const likeCounter = document.getElementById("likeCounter");

const notificationCounters = {
	likes: likeCounter,
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




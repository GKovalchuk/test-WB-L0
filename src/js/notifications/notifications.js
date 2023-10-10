const likeCounter = document.getElementById("likeCounter");
const suppliesCounterTabbar = document.getElementById("suppliesCounterTabbar");
const suppliesCounterHeader = document.getElementById("suppliesCounterHeader");



const notificationCounters = {
	likes: {nodes: [likeCounter], value: 0},
	suppliesInStock: {nodes: [suppliesCounterTabbar, suppliesCounterHeader], value: 0},
}

const getCounterNode = (counter) => notificationCounters[counter];

const renderNotification = (nodes, value) => {
	Object.values(nodes).forEach((node) => {
		node.textContent = value;
		if (value > 0) {
			node.parentElement.classList.remove('hide');
		} else {
			node.parentElement.classList.add('hide');
		}
	});
}

export const setNotificationCounter = (counter, value) => {
	const nodes = getCounterNode(counter);
	notificationCounters[counter].value += value;
	renderNotification(nodes.nodes, notificationCounters[counter].value);
}

export const renderAllNotificationCounters = () => {
	Object.values(notificationCounters)
		.forEach(({nodes, value}) => renderNotification(nodes, value));
}




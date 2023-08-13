const modalBtn = document.querySelectorAll("[data-modal]");
const body = document.body;
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelectorAll(".modal");

export function modalsListener() {
	modalBtn.forEach((item) => {
		item.addEventListener("click", (event) => {
			const target = event.currentTarget;
			const modalId = target.getAttribute("data-modal");
			const modal = document.getElementById(modalId);
			const modalContent = modal.querySelector(".modal__content");

			modalContent.addEventListener("click", (event) => {
				event.stopPropagation();
			});

			modal.classList.add("show");
			body.classList.add("no-scroll");

			setTimeout(function () {
				modalContent.style.transform = "none";
				modalContent.style.opacity = "1";
			}, 1);
		});
	});

	modalClose.forEach((item) => {
		item.addEventListener("click", (event) => {
			let currentModal = event.currentTarget.closest(".modal");

			closeModal(currentModal);
		});
	});

	modal.forEach((item) => {
		item.addEventListener("click", (event) => {
			let currentModal = event.currentTarget;

			closeModal(currentModal);
		});
	});

	function closeModal(currentModal) {
		let modalContent = currentModal.querySelector(".modal__content");
		modalContent.removeAttribute("style");

		setTimeout(() => {
			currentModal.classList.remove("show");
			body.classList.remove("no-scroll");
		}, 200);
	}
}

const box = document.querySelector(".box");

box.addEventListener("click", () => {
	if (box.classList.contains("add-animation")) {
		box.classList.remove("add-animation");
		box.classList.add("remove-animation");
	} else if (box.classList.contains("remove-animation")) {
		box.classList.remove("remove-animation");
		box.classList.add("add-animation");
	} else {
		box.classList.add("add-animation");
	}
});

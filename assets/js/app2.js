// Dropdown
const dropdownLink = document.querySelector(".dropdown-link");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownExit = document.querySelector(".dropdown-item__exit");

dropdownLink.addEventListener("click", () => {
	dropdownItem.classList.toggle("active");
});
dropdownLink.addEventListener("click", () => {
	dropdownLink.classList.toggle("active");
});
dropdownExit.addEventListener("click", () => {
	dropdownItem.classList.toggle("active");
});
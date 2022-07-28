// Dropdown
const dropdownLink = document.querySelector(".dropdown-link");
const dropdownLinkMobile = document.querySelector(".mobile-profile-seller");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownItemMobile = document.querySelector(".dropdown-item-mobile");
const dropdownExit = document.querySelector(".dropdown-item__exit");
const dropdownExitMobile = document.querySelector(".dropdown-item__exit-mobile");

dropdownLink.addEventListener("click", () => {
	dropdownItem.classList.toggle("active");
});
dropdownLinkMobile.addEventListener("click", () => {
	dropdownItemMobile.classList.toggle("active");
});
dropdownLink.addEventListener("click", () => {
	dropdownLink.classList.toggle("active");
});
dropdownLink.addEventListener("click", () => {
	wrapper.classList.toggle("active");
});
dropdownExit.addEventListener("click", () => {
	dropdownItem.classList.toggle("active");
});
dropdownExitMobile.addEventListener("click", () => {
	dropdownItemMobile.classList.toggle("active");
});
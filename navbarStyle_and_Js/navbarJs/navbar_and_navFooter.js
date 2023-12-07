// Navbar DropDown Products
function dropdownFunction() {
	var x = document.getElementById("toggleDropdowncontent");
	if (x.className === "dropdown-content") {
		x.className += " responsive";
	} else {
		x.className = "dropdown-content";
	}
}
// Navbar DropDown Footer Products
function dropdown_footer_Function() {
	var x = document.getElementById("toggle_Dropdown_footer");
	if (x.className === "dropdown_footer_content") {
		x.className += " responsive";
	} else {
		x.className = "dropdown_footer_content";
	}
}

// Menu List Navbar
const navbarHeader = document.querySelector(".navbar_header");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
	navbarHeader.classList.toggle("active");
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

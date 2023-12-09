navbar_html_classlist(); // memanggil html div class (posisi wajib paling atas)
footer_navbar_html_classlist(); // memanggil html div class (posisi wajib paling atas)

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

// Semua isi div navbar ke html
function navbar_html_classlist() {
	let navDiv = document.getElementById("js_navbar_class");

	navDiv.innerHTML = `
	<nav class="navbar_container">
	<a href="/index.html" class="nav_branding">Takaware</a>

	<ul class="nav_menu">
		<li class="nav_item" href="#">
			<a href="#" class="nav_link">About</a>
		</li>
		<li class="nav_item">
			<div class="dropdown">
				<button class="dropbtn" onclick="dropdownFunction()">Product
					<i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content" id="toggleDropdowncontent">
					<div class="product_category">
						<a class="category_links"
							href="/takaware_product/food_container/food_container.html">Food Container</a>
						<ul class="spesifict_submenu_product">
							<a href="#Jade">Jade</a>
							<a href="#Cleo">Cleo</a>
							<a href="#Chloe">Chloe</a>
							<a href="#Gemini">Gemini</a>
							<a href="#Cosmo">Cosmo</a>
							<a href="#Luna">Luna</a>
						</ul>
					</div>
					<div class="product_category">
						<a class="category_links"
							href="/takaware_product/beverageware/beverageware.html">Beverageware</a>
						<ul class="spesifict_submenu_product">
							<a href="#Jade">Zen</a>
							<a href="#Gemini">Kylo</a>
							<a href="#Cosmo">Izzy</a>
						</ul>
					</div>
				</div>
			</div>
		</li>
	</ul>
	<div class="hamburger">
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</div>
</nav>
<div class="desktop_nav_Submenu">
	<div class="product_category">
		<a class="category_links" href="/takaware_product/food_container/food_container.html">Food
			Container</a>
		<div class="spesifict_submenu_container">
			<ul class="spesifict_submenu_product">
				<a href="#Jade">
					<div class="spesifict_links">Jade</div>
				</a>
				<a href="#Cleo">
					<div class="spesifict_links">Cleo</div>
				</a>
				<a href="#Chloe">
					<div class="spesifict_links"> Chloe</div>
				</a>
				<a href="#Gemini">
					<div class="spesifict_links">Gemini</div>
				</a>
				<a href="#Cosmo">
					<div class="spesifict_links">Cosmo</div>
				</a>
				<a href="#Luna">
					<div class="spesifict_links">Luna</div>
				</a>
			</ul>
		</div>
	</div>
	<div class="product_category">
		<a class="category_links" href="/takaware_product/beverageware/beverageware.html">BeverageWare</a>
		<div class="spesifict_submenu_container">
			<ul class="spesifict_submenu_product">
				<a href="#Jade">
					<div class="spesifict_links">Zen</div>
				</a>
				<a href="#Gemini">
					<div class="spesifict_links">Kylo</div>
				</a>
				<a href="#Cosmo">
					<div class="spesifict_links">Izzy</div>
				</a>
			</ul>
		</div>
	</div>
</div>
	`;
}

function footer_navbar_html_classlist() {
	let footer_navdiv = document.getElementById("footer_js_navbar_class");

	footer_navdiv.innerHTML = `
	<div class="navbar_footer">
            <a href="/index.html" class="navFooter_Branding">Takaware</a>
            <a href="#" class="navFooter_Links">
                <div class="About">
                    About

                </div>
            </a>
            <button class="navFooter_Dropdown" onclick="dropdown_footer_Function()">
                <div class="Product">
                    Product
                    <i class="fa fa-caret-down"></i>
                </div>
                <div class="dropdown_footer_content" id="toggle_Dropdown_footer">
                    <div class="footer_product_category">
                        <a href="/takaware_product/food_container/food_container.html">
                            <div class="footer_category_links">Food Container</div>
                        </a>
                        <ul class="footer_spesifict_submenu_product">
                            <a href="#Jade">
                                <div class="footer_spesific_link">Jade</div>
                            </a>
                            <a href="#Cleo">
                                <div class="footer_spesific_link">Cleo</div>
                            </a>
                            <a href="#Chloe">
                                <div class="footer_spesific_link">Chloe</div>
                            </a>
                            <a href="#Gemini">
                                <div class="footer_spesific_link">Gemini</div>
                            </a>
                            <a href="#Cosmo">
                                <div class="footer_spesific_link">Cosmo</div>
                            </a>
                            <a href="#Luna">
                                <div class="footer_spesific_link">Luna</div>
                            </a>
                        </ul>
                    </div>
                    <div class="footer_product_category">
                        <a href="/takaware_product/beverageware/beverageware.html">
                            <div class="footer_category_links">Beverageware</div>
                        </a>
                        <ul class="footer_spesifict_submenu_product">
                            <a href="#Jade">
                                <div class="footer_spesific_link">Zen</div>
                            </a>
                            <a href="#Cleo">
                                <div class="footer_spesific_link">Kylo</div>
                            </a>
                            <a href="#Chloe">
                                <div class="footer_spesific_link">Izzy</div>
                            </a>
                        </ul>
                    </div>
                </div>
        </div>
        </button>
    </div>
    <!-- Media Social Footer  -->
    <div class="footer_MediaSocial">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
        <a href="#"><i class="fa-brands fa-shopify"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
    </div>
    <!-- Copyright Footer -->
    <div class="footer_copyright">
        <p>© 2023 Takaware Com, All Rights Reserved.</p>
    </div>
	`;
}
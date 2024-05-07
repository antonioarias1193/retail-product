const url = window.location.origin + "/all_product_pages/";

const foodcontainer_link = document.getElementById("link_foodcontainer");

if (foodcontainer_link) {
	const slider_link_gemini = document.getElementById("slider_link_gemini");
	const slider_link_cleo = document.getElementById("slider_link_cleo");
	const slider_link_jade = document.getElementById("slider_link_jade");

	const slider_link_luna = document.getElementById("slider_link_luna");
	const slider_link_chloe = document.getElementById("slider_link_chloe");
	const slider_link_cosmo = document.getElementById("slider_link_cosmo");

	const slider_link_ella = document.getElementById("slider_link_ella");
	const slider_link_fuji = document.getElementById("slider_link_fuji");
	const slider_link_leo = document.getElementById("slider_link_leo");

	slider_link_gemini.href = url + "gemini_food_container.html";
	slider_link_cleo.href = url + "cleo_food_container.html";
	slider_link_jade.href = url + "jade_food_container.html";

	slider_link_luna.href = url + "luna_food_container.html";
	slider_link_chloe.href = url + "chloe_food_container.html";
	slider_link_cosmo.href = url + "cosmo_food_container.html";

	slider_link_ella.href = url + "ella_food_container.html";
	slider_link_fuji.href = url + "fuji_food_container.html";
	slider_link_leo.href = url + "leo_food_container.html";
}

const beverageware_link = document.getElementById("link_beverageware");

if (beverageware_link) {
	const slider_link_zen = document.getElementById("slider_link_zen");
	const slider_link_kylo = document.getElementById("slider_link_kylo");
	const slider_link_izzy = document.getElementById("slider_link_izzy");

	const slider_link_akira = document.getElementById("slider_link_akira");
	const slider_link_momo = document.getElementById("slider_link_momo");
	const slider_link_shobu = document.getElementById("slider_link_shobu");

	slider_link_zen.href = url + "zen_beverageware.html";
	slider_link_kylo.href = url + "kylo_beverageware.html";
	slider_link_izzy.href = url + "izzy_beverageware.html";

	slider_link_akira.href = url + "akira_beverageware.html";
	slider_link_momo.href = url + "momo_beverageware.html";
	slider_link_shobu.href = url + "shobu_beverageware.html";
}

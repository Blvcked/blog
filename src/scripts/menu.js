import { $ } from "./utils.js";

$(".burger").addEventListener("click", () => {
	$(".nav-links").classList.toggle("show");
});

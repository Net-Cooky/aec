const openMenu = document.querySelector(".open-menu");
const navMenu = document.querySelector("header .nav-wrapper nav");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click" , () => {
	navMenu.classList.add("open");
	openMenu.style.display = "none";
})

closeMenu.addEventListener("click" , () => {
	navMenu.classList.remove("open");
	openMenu.style.display = "block";
})

const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");

year.textContent = currentYear;
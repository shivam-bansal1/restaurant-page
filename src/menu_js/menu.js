import "../css/general.css";
import "../css/menu.css";
import { loadStartersMenu } from "./starters";
import { loadMainCourseMenu } from "./main_course";

function menuSection() {
    // loadStartersMenu();
    loadMainCourseMenu();
}

function createMenuNav() {
    const nav = document.createElement("nav");

    // Starters button
    const startersButton = document.createElement("button");
    startersButton.textContent = "Starters";
    startersButton.classList.add("menu-navbar-item");


    // Main Dish button
    const mainCourseButton = document.createElement("button");
    mainCourseButton.textContent = "Main Course";
    mainCourseButton.classList.add("menu-navbar-item");

    // Sweets button
    const sweetsButton = document.createElement("button");
    sweetsButton.textContent = "Sweets";
    sweetsButton.classList.add("menu-navbar-item");

    nav.appendChild(startersButton);
    nav.appendChild(mainCourseButton);
    nav.appendChild(sweetsButton);

    return nav;
}

function menuBar() {
    const contentDiv = document.querySelector("#content");
    const menuNav = createMenuNav();
    menuNav.classList.add("menu-navbar");
    contentDiv.appendChild(menuNav);
}

export function loadMenuPage() {
    menuBar();
    menuSection();
}
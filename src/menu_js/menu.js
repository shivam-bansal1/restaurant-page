import "../css/general.css";
import "../css/menu.css";
import { loadStartersMenu } from "./starters";
import { loadMainCourseMenu } from "./main_course";
import { loadSweetsMenu } from "./sweets";

function menuSection() {
    const contentDiv = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    contentDiv.appendChild(menuContainer);

    loadStartersMenu();

    document.querySelector("#starters")
        .addEventListener("click", () => { 
            menuContainer.innerHTML = "";
            loadStartersMenu();
    });

    document.querySelector("#main-course")
        .addEventListener("click", () => { 
            menuContainer.innerHTML = "";
            loadMainCourseMenu();
    });

    document.querySelector("#sweets")
        .addEventListener("click", () => { 
            menuContainer.innerHTML = "";
            loadSweetsMenu();
    });
}

function createMenuNav() {
    const nav = document.createElement("nav");

    // Starters button
    const startersButton = document.createElement("button");
    startersButton.textContent = "Starters";
    startersButton.classList.add("menu-navbar-item");
    startersButton.setAttribute("id", "starters");


    // Main Dish button
    const mainCourseButton = document.createElement("button");
    mainCourseButton.textContent = "Main Course";
    mainCourseButton.classList.add("menu-navbar-item");
    mainCourseButton.setAttribute("id", "main-course");

    // Sweets button
    const sweetsButton = document.createElement("button");
    sweetsButton.textContent = "Sweets";
    sweetsButton.classList.add("menu-navbar-item");
    sweetsButton.setAttribute("id", "sweets");

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
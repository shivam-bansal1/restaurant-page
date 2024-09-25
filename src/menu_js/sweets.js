import "../css/general.css";
import "../css/menu.css";
import { sweetsItems } from "./menu_data";
import { gajar_halwa } from "../images/menu/menu_images";
import { kulfi_faluda } from "../images/menu/menu_images";
import { kulfi } from "../images/menu/menu_images";
import { malpua } from "../images/menu/menu_images";
import { moong_dal_halwa } from "../images/menu/menu_images";
import { rabri } from "../images/menu/menu_images";
import { rasgulla } from "../images/menu/menu_images";
import { rasmalai } from "../images/menu/menu_images";

const menuImage = {
    gajar_halwa,
    kulfi_faluda,
    kulfi,
    malpua,
    moong_dal_halwa,
    rabri,
    rasgulla, 
    rasmalai,
};

function createSweetsMenu() {
    const menuContainer = document.querySelector(".menu-container");
    
    sweetsItems.forEach((starter) => {
        const dishContainerDiv = document.createElement("div");
        dishContainerDiv.classList.add("dish-container");

        // Dish Image
        const dishImage = document.createElement("img");
        dishImage.classList.add("dish-img");
        dishImage.src = menuImage[starter.name.toLowerCase()];
        dishContainerDiv.appendChild(dishImage);

        // Dish Info
        const dishName = document.createElement("h2");
        dishName.textContent = starter.name.replaceAll("_", " ");
        dishName.classList.add("dish-name");
        dishContainerDiv.appendChild(dishName);

        // Dish Info
        const dishInfo = document.createElement("p");
        dishInfo.textContent = starter.description;
        dishInfo.classList.add("dish-info");
        dishContainerDiv.appendChild(dishInfo);
        
        menuContainer.appendChild(dishContainerDiv);
    });
}

export function loadSweetsMenu() {
    createSweetsMenu();
}
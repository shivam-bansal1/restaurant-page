import "../css/general.css";
import "../css/menu.css";
import { starterItems } from "./menu_data";
import { veg_momos } from "../images/menu/menu_images";
import { crispy_chilli_potato } from "../images/menu/menu_images";
import { gol_gappe } from "../images/menu/menu_images";
import { pav_bhaji } from "../images/menu/menu_images";
import { veg_fried_rice } from "../images/menu/menu_images";
import { tandoori_afghani_chaap } from "../images/menu/menu_images";
import { tandoori_malai_chaap } from "../images/menu/menu_images";
import { veg_noodles } from "../images/menu/menu_images";

const menuImage = {
    veg_momos,
    crispy_chilli_potato,
    gol_gappe,
    pav_bhaji,
    veg_fried_rice,
    tandoori_afghani_chaap,
    tandoori_malai_chaap, 
    veg_noodles,
};

function createStartersMenu() {
    const contentDiv = document.querySelector("#content");
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        
        starterItems.forEach((starter) => {
            const dishContainerDiv = document.createElement("div");
            dishContainerDiv.classList.add("dish-container");

            // Dish Image
            const dishImage = document.createElement("img");
            dishImage.classList.add("dish-img");
            console.log(starter);
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
        
        contentDiv.appendChild(menuContainer);
}

export function loadStartersMenu() {
    createStartersMenu();
}
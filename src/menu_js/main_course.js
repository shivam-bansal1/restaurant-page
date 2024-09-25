import "../css/general.css";
import "../css/menu.css";
import { mainCourseItems } from "./menu_data";
import { dal_makhani } from "../images/menu/menu_images";
import { paneer_butter_masala } from "../images/menu/menu_images";
import { shahi_paneer } from "../images/menu/menu_images";
import { matar_mushroom } from "../images/menu/menu_images";
import { malai_kofta } from "../images/menu/menu_images";
import { butter_naan } from "../images/menu/menu_images";
import { jeera_rice } from "../images/menu/menu_images";
import { laccha_parantha } from "../images/menu/menu_images";

const menuImage = {
    dal_makhani,
    paneer_butter_masala,
    shahi_paneer,
    malai_kofta,
    matar_mushroom,
    butter_naan,
    jeera_rice, 
    laccha_parantha,
};

function createMainCourseMenu() {
    const contentDiv = document.querySelector("#content");
        const menuContainer = document.createElement("div");
        menuContainer.classList.add("menu-container");
        
        mainCourseItems.forEach((starter) => {
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

export function loadMainCourseMenu() {
    createMainCourseMenu();
}
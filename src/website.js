import "./css/general.css";
import { loadHomePage } from "./home"
import { loadMenuPage } from "./menu_js/menu";
import { loadContactPage } from "./contact";

function createHeader() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");
    document.querySelector("#content").appendChild(headerElement);
    
    let restaurantName = document.createElement("h1");
    restaurantName.textContent = "Best-o-rant";
    restaurantName.classList.add("restaurant-name");

    headerElement.appendChild(restaurantName);
    headerElement.appendChild(createHeaderNav());
}

function createHeaderNav() {
    const nav = document.createElement("nav");

    // Home button
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("nav-item");
    homeButton.setAttribute("id", "home-button");


    // Menu button
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-item");
    menuButton.setAttribute("id", "menu-button");

    // Contact button
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-item");
    contactButton.setAttribute("id", "contact-button");
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function createFooter() {
    const contentDiv = document.querySelector("#content");

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.textContent = "Made with ❤️ by Shivam Bansal";

    const githubLink = document.createElement("a");
    githubLink.setAttribute("target", "_blank");
    githubLink.href = "https://github.com/shivam-bansal1";

    const githubIcon = document.createElement('i');  // Create <i> element
    githubIcon.classList.add('fab', 'fa-github');  

    githubLink.appendChild(githubIcon);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);
    contentDiv.appendChild(footer);
}

export function renderWebsite() {
    createHeader();
    // loadHomePage();
    // loadMenuPage();
    loadContactPage();
    createFooter();
}
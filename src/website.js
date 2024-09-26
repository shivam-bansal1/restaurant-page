import "./css/general.css";
import { loadHomePage } from "./home"
import { loadMenuPage } from "./menu_js/menu";
import { loadContactPage } from "./contact";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    
    let restaurantName = document.createElement("h1");
    restaurantName.textContent = "Best-o-rant";
    restaurantName.classList.add("restaurant-name");

    header.appendChild(restaurantName);
    header.appendChild(createHeaderNav());

    return header
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

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");
    footerText.textContent = "Made with ❤️ by Shivam Bansal";

    const githubLink = document.createElement("a");
    githubLink.setAttribute("target", "_blank");
    githubLink.href = "https://github.com/shivam-bansal1";

    const githubIcon = document.createElement('i');  
    githubIcon.classList.add('fab', 'fa-github');  

    githubLink.appendChild(githubIcon);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);

    return footer
}


function createMainDiv() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

export function renderWebsite() {
    // Intial render
    const contentDiv = document.querySelector("#content");
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMainDiv());
    contentDiv.appendChild(createFooter());
    loadHomePage();


    document.querySelector("#home-button")
        .addEventListener("click", () => { 
            loadHomePage();
    });

    document.querySelector("#menu-button")
        .addEventListener("click", () => { 
            loadMenuPage();
    });

    document.querySelector("#contact-button")
        .addEventListener("click", () => { 
            loadContactPage();
    });    
}
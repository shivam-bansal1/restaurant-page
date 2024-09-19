import "./style.css";

function createHeader() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");
    document.querySelector("#content").appendChild(headerElement);
    
    let restaurantName = document.createElement("h1");
    restaurantName.textContent = "Rest-o-rant";
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


    // Menu button
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-item");

    // About button
    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.classList.add("nav-item");

    // Contact button
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-item");
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

    return nav;
}

export function createHomePage() {
    createHeader();
}
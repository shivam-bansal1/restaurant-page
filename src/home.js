import "./style.css";
import picture from "./images/chef-image.jpg"

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

function createTagLine() {
    const contentDiv = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");

    const quote = document.createElement("p");
    quote.textContent = "Live your delicious experience with Best-o-rant!!!";
    quote.classList.add("homepage-quote");
    homeDiv.appendChild(quote);

    const homePageImage = document.createElement("img");
    homePageImage.src = picture;
    homePageImage.classList.add("home-image");
    homeDiv.appendChild(homePageImage);

    contentDiv.appendChild(homeDiv);
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

export function createHomePage() {
    createHeader();
    createTagLine();
    createFooter();
}
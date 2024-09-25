import "./css/general.css";
import "./css/home.css";
import picture from "./images/chef-image.jpg"

export function loadHomePage() {
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

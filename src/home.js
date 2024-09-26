import "./css/general.css";
import "./css/home.css";
import picture from "./images/chef-image.jpg"

export function loadHomePage() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";

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

    mainDiv.appendChild(homeDiv);
}

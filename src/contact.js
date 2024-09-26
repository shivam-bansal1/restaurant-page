import "./css/general.css";
import "./css/contact.css";
import picture from "./images/map.png"

export function loadContactPage() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    // Contact Number
    const contactIcon = document.createElement("i");
    contactIcon.classList.add("fa-solid", "fa-phone");
    contactDiv.appendChild(contactIcon);

    const contactNumber = document.createElement("p");
    contactNumber.textContent = "+91 1234567890";
    contactNumber.classList.add("contact-number");
    contactDiv.appendChild(contactNumber);

    // Address
    const addressIcon = document.createElement("i");
    addressIcon.classList.add("fa-solid", "fa-hotel");
    contactDiv.appendChild(addressIcon);
    
    const address = document.createElement("p");
    address.textContent = "Delhi Golf Club, Golf Links, New Delhi, India";
    address.classList.add("address");
    contactDiv.appendChild(address);
    
    // Map 
    const mapImage = document.createElement("img");
    mapImage.src = picture;
    mapImage.classList.add("map");
    contactDiv.appendChild(mapImage);

    mainDiv.appendChild(contactDiv);
}

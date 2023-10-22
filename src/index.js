import { loadNavigation } from "./nav"

const app = document.getElementById("content")
const aboutText = "Welcome to Happy Spouse Pizza. You bought them a pizza oven, now they make you pizza! Yay!"

function displayHome() {
    app.innerHTML = ""
    let newH1 = document.createElement('h1')
    newH1.innerText = "PIZZAAAAAAA!!!"
    let newText = document.createElement('p')
    newText.innerText = aboutText
    app.appendChild(newH1)
    app.appendChild(newText)
}
    
loadNavigation();
displayHome();

export {displayHome}
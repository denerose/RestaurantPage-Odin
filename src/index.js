import { loadNavigation } from "./nav"

const app = document.getElementById("content")

function displayHome() {
    app.innerHTML = ""
    let newH1 = document.createElement("h1")
    newH1.innerText = "PIZZAAAAAAA!!!"
    app.appendChild(newH1)
}
    
loadNavigation();
displayHome();
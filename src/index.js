import { loadNavigation } from "./nav"

const app = document.getElementById("content")

function test () {
    let newH1 = document.createElement("h1")
    newH1.innerText = "PIZZAAAAAAA!!!"
    app.appendChild(newH1)}
    loadNavigation()

test()

console.log("working")
import { displayMenu } from "./menu"
import { displayHome } from "./index"
import { displayContact } from "./contact"

const header = document.getElementById("header")
const app = document.getElementById("content")

const navOptions = ['Home', 'Menu', 'Contact']

const loadNavigation = () => {
    header.innerHTML = ''
    navOptions.forEach(item => {
        const newTab = document.createElement('div')
        newTab.innerText = String(item)
        newTab.id = String(item)
        newTab.className = "navTab"
        header.appendChild(newTab)
    })
    const menuBtn = document.getElementById("Menu")
    menuBtn.addEventListener('click', () => {displayMenu(app)})
    const homeBtn = document.getElementById("Home")
    homeBtn.addEventListener('click', () => {displayHome()})
    const contactBtn = document.getElementById("Contact")
    contactBtn.addEventListener('click', () => {displayContact()})
}

export {loadNavigation}

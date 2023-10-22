const header = document.getElementById("header")
const navOptions = ['Home', 'Menu', 'About']

const loadNavigation = () => {
    header.innerHTML = ''
    navOptions.forEach(item => {
        const newTab = document.createElement('div')
        newTab.innerText = String(item)
        newTab.id = String(item)
        newTab.classList.add("navTab")
        header.appendChild(newTab)
    })
}

export {loadNavigation}

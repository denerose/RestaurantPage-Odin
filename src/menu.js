
const menuList = [
    {title: "margarita",
    toppings: "cheese, baby tomatoes, fresh basil",
    cost: "$10"},
    {title: "hawaiian",
    toppings: "cheese, BBQ sauce, pineapple, vegan bacon", 
    cost: "$12"},
    {title: "supreme",
    toppings: "cheese, BBQ sauce, mushrooms, char-grilled veggies, sun-dried tomatoes, olives",
    cost: "$18"},
]

const displayMenu = (container = document.getElementById("content")) => {
    container.innerHTML = ""
    const menuDiv = document.createElement('div')
    menuDiv.id = "menuDiv"
    menuList.forEach(item => {
        const newMenuCard = document.createElement('div')
        newMenuCard.className = "menuCard"
        newMenuCard.id = item.title
        const newTitle = document.createElement('h2')
        newTitle.innerText = item.title
        newMenuCard.appendChild(newTitle)
        const newDiv = document.createElement('div')
        const newTops = document.createElement('p')
        newTops.innerText = item.toppings
        const newCost = document.createElement('p')
        newCost.innerText = item.cost
        newDiv.appendChild(newTops)
        newDiv.appendChild(newCost)
        newDiv.className = "menuDetails"
        newMenuCard.appendChild(newDiv)
        menuDiv.appendChild(newMenuCard)
    })
    container.appendChild(menuDiv)
}

export {displayMenu}
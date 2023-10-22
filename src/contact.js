const contactAddress = "123 Our House Drive, Mycity, Australia"

function displayContact(container = document.getElementById("content")) {
    container.innerHTML = ""
    const newH1 = document.createElement('h1')
    newH1.innerText = "Find Us"
    const newAddress = document.createElement('p')
    newAddress.innerText = contactAddress
    container.appendChild(newH1)
    container.appendChild(newAddress)
}

export {displayContact}
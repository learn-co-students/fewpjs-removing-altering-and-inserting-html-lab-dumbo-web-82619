// no longer has DOM node 'main#main'
const main = document.querySelector("#main")
main.remove()

// has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Karina is the champion"
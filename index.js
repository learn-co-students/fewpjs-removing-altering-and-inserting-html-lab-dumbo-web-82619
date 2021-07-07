document.querySelector("#main").remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "John is the champion."
newHeader.className = "victory";
document.body.append(newHeader)

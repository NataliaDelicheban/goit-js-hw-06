
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


function creatText(event) {
    event.currentTarget.value === "" ? output.textContent = "Anonymous" : output.textContent = event.currentTarget.value;
}
textInput.addEventListener("input", creatText);
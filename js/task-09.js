function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body")
const btnChange = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

function changeColor(event) {
  bodyColor.style.backgroundColor = getRandomHexColor(event);
  return spanColor.textContent = getRandomHexColor.value;

}
bodyColor.addEventListener("click", changeColor)

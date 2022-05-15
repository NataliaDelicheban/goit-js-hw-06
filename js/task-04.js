let counterValue = 0;

const btnEl = document.querySelectorAll("[data-action]");
console.log(btnEl);

const incremEl = () => {
document.querySelector("#value").textContent = counterValue += 1;
}
const decremEl = () => {
 document.querySelector("#value").textContent = counterValue -= 1;
}

btnEl[0].addEventListener("click", decremEl)
btnEl[1].addEventListener("click", incremEl)

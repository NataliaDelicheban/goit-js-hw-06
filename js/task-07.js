const inputEl = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputEl.addEventListener("input", makeMagic);
function makeMagic(event) {
    inputText.style.fontSize = `${inputEl.value}px`;
}

inputTextRef.style.fontSize = `${inputRangeRef.value}px`;


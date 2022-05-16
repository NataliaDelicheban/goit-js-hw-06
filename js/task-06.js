const textInput = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");


const onInputBlur = (event) => {
    if (event.target.value.length === Number(textInput.dataset.length)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    };
};

textInput.addEventListener("blur", onInputBlur);
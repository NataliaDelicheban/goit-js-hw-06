const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", fullForm);
 
function fullForm(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please, fill in all lines!");
    }
    else {
        const formData = {
            email, password,
        };
    
                console.log(formData);
        }
        event.currentTarget.reset();
    }



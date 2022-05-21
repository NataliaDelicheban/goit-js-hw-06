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
        let formShow = {
            email: email.value,
            password: password.value,
        }
    
        console.log(formShow);
      
        }
        event.currentTarget.reset();
    }



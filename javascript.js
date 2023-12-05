const password = document.querySelector("#password");
const confirmPass = document.querySelector("#confirmPass");
const matchPass = document.querySelector("#matchPass");


function passwordCheck() {
    if (confirmPass.value == password.value)  {
        matchPass.textContent = "Matching"
        confirmPass.style.borderColor = " rgb(118, 225, 118)"
    } else if (password.value !== confirmPass.value) {
        matchPass.textContent= " Not Matching"; 
        confirmPass.style.borderColor = "red"
    }
};


password.addEventListener('keyup', () => {
    if (confirmPass.value.length != 0) {
        passwordCheck();

    }
});

confirmPass.addEventListener('keyup', passwordCheck);

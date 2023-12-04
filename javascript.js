 
 
 const password = document.querySelector(".password");
 const confirmPass = document.querySelector(".confirmPass");
 const matchPass = document.querySelector(".matchPass");

 function passwordCheck () {
    if (confirmPass.value !== password.value)  {

        matchPass.textContent = "Password does not match"
    } else {
        matchPass.textContent = ""; 
    }
 }

 passwordCheck(); 

 // figure out password check
import { app } from '../../firebase/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

let auth = getAuth(app);

let signupForm = document.getElementById("signup-form")

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = signupForm[0].value
    let lastName = signupForm[1].value
    let email = signupForm[2].value
    let password = signupForm[3].value
    let confirmPass = signupForm[4].value

    console.log(password, confirmPass)

    console.log(signupForm);

    if (password !== confirmPass) {
        document.querySelector(".error-para").innerHTML = "Your Password Dost not Match"
        return
    }


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            location.replace("../Signin/signin.html")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.querySelector(".error-para").innerHTML = errorMessage
        });
});


let btn = document.querySelector(".l-btn")
btn.addEventListener("mouseover", () => {
    let remove = document.querySelector(".s-btn")
    remove.classList.remove("s-btn")
})
btn.addEventListener("mouseout", () => {
    let remove = document.getElementById("s-btn")
    remove.classList.add("s-btn")
})



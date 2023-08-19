// Import your modules using relative paths
import { app } from '../../firebase/firebase';
import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Remove the duplicate 'auth' declaration
// let auth = getAuth(app);

// let resetPass = document.querySelector('#resetPass');
let resetEmail = document.querySelector('#submit_data');
resetEmail.addEventListener('click', () => {
  let forget_email = document.querySelector('#forget_email');
  
  // Use the imported 'app' for initializing auth
  const auth = getAuth(app);
  
  sendSignInLinkToEmail(auth, forget_email.value) // Use 'forget_email.value' here
    .then(() => {
      forget_email.value = ""; // Update the value here
      console.log('Password reset link sent');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle errors
    });
});

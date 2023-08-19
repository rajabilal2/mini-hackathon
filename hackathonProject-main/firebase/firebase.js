  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAMN3WlD20gvT3APLV_w6beo81HDrv-wKA",
    authDomain: "testing1-edcdb.firebaseapp.com",
    projectId: "testing1-edcdb",
    storageBucket: "testing1-edcdb.appspot.com",
    messagingSenderId: "819630100193",
    appId: "1:819630100193:web:b57ccf5d887924837ff1a0",
    measurementId: "G-65SNZBPYG3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export {app}
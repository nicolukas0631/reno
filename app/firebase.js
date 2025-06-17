    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBxoQgW5eUD6mjifSaZ0P6dnQ8o47rkGd8",
      authDomain: "proyectoreno-1f9f1.firebaseapp.com",
      projectId: "proyectoreno-1f9f1",
      storageBucket: "proyectoreno-1f9f1.appspot.com",
      messagingSenderId: "138357654355",
      appId: "1:138357654355:web:4f473fb9eb8125125f97a6",
      measurementId: "G-ZMH7KL7PSY"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    export const auth = getAuth(app)
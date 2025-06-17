import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"
const signupForm=document.querySelector("#signup-form")

var boton = document.getElementById("buttonUp")

function handleClick() {
  signupForm.addEventListener("submit" , async (e) => {
    e.preventDefault() 
 
 
    const email = document.querySelector("#up-email").value
    const password = document.querySelector("#up-password").value
    console.log(email, password)
    
    try {
     const users = await createUserWithEmailAndPassword(auth, email, password)
     console.log(users)
 
 
    } catch (error) {
     console.log(error.message)
     console.log(error.code)
 
     if(error.code === "auth/email-already-in-use"){
       alert("Email already in use")
     }
     else if (error.code === "auth/invalid-email"){
       alert("invalid email")
     } else if (error.code === "auth/weak-password")
     alert("Password is too weak, Minimun 6 caracters")
 
    }
 
 } )
}
document.getElementById("buttonUp").addEventListener("click", handleClick)









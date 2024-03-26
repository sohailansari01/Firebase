
  const firebaseConfig = {
    apiKey: "AIzaSyBYM0tkjdUDSzz7UoJt92jQITLXk4DD8lE",
    authDomain: "stdperformance-bf994.firebaseapp.com",
    projectId: "stdperformance-bf994",
    storageBucket: "stdperformance-bf994.appspot.com",
    messagingSenderId: "990002419810",
    appId: "1:990002419810:web:e61ff22f2e52e7664fd93b",
    measurementId: "G-346DHF7S46"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  const auth =firebase.auth();

  // Initialize Firebase
//const app = initializeApp(firebaseConfig);
//````````````````````````````````````````````````````
const email="raviasati@gmail.com"
const password="R@vi25"
function click()
{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.value);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
container.classList.add("sign-up-mode");
click();
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

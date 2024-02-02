
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDwzeJRT4iBTwoykeNG8PtFcWGOSLyY2JM",
      authDomain: "imovie-2365c.firebaseapp.com",
      databaseURL: "https://imovie-2365c-default-rtdb.firebaseio.com",
      projectId: "imovie-2365c",
      storageBucket: "imovie-2365c.appspot.com",
      messagingSenderId: "611610738086",
      appId: "1:611610738086:web:0fb77d796afa3de9b62367"
    };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

function isValidEmail(email) {
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.value = email;
  return emailInput.checkValidity();
}

signupButton.addEventListener('click', (e) => {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log('Email before validation (signup):', email);

  if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
  }

  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed up 
        const user = userCredential.user;
        update(ref(database, 'users/' + user.uid), {
          username: name,
      });

          set(ref(database, 'users/' + user.uid), {
              username: name,
              email: email
          });

          alert('User created!');
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          alert(errorMessage);
          // ..
      });
});
Buttonlogin.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      });

      alert('User logged in!');
      document.getElementById('homepageSection').style.display = 'block';
      document.getElementById('homepageSection').style.display = 'block';
      document.querySelector('.login_form').style.display = 'none';
      document.getElementById('homepageSection').scrollIntoView({ behavior: 'smooth' });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});

Buttonlogout.addEventListener('click', (e) => {
  e.preventDefault(); 

  signOut(auth)
    .then(() => {
      alert('User logged out successfully.');
      console.log('Redirecting...');
      window.location.href = 'iMovie.html';
    })
    .catch((error) => {

      console.error("Logout Error:", error);
      alert('Error occurred during logout. Please try again.');
    });
});



const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});


let reset = document.querySelector("#goreset");
reset.addEventListener("click", function () {
    let email = document.querySelector("#resetEmail").value.trim();

    if (!isValidEmail(email)) {
        alert('Invalid email format');
        return;
    }

    sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("Reset Password Link sent");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
});
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  questionLink = document.querySelector("#question"),
  formCloseBtn = document.querySelector(".form_close"),
  closeBtn4 = document.querySelector("#close4"),
  closeBtn2 = document.querySelector("#close2"),
  closeBtn3 = document.querySelector("#close3"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  forgotPwLink = document.querySelector(".forgot_pw"),
  securityForm = document.querySelector(".security_form"),
  securityForm2 = document.querySelector(".security_form2"),
  backToLoginLink = document.querySelector("#backToLogin"),
  backToSignupLink = document.querySelector("#backToSignup"),
  signupForm = document.querySelector('.signup_form'),
  loginForm = document.querySelector('.login_form'),
  goresetBtn = document.getElementById("goreset"),
  resetForm = document.querySelector(".reset_Form"),
  gosuccessBtn = document.getElementById("gosuccessBtn"),
  loginResetBtn = document.getElementById("login1"),
  resetSucForm = document.querySelector(".resetSuc_Form");

document.addEventListener("DOMContentLoaded", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => {
  console.log("called")
  home.classList.remove("show");
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  securityForm2.classList.remove("active");
  signupForm.classList.remove("active");
  loginForm.classList.remove("active");
});

loginResetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  securityForm.classList.remove("active");
  resetForm.classList.remove("active");
  loginForm.classList.add("active");
});

closeBtn2.addEventListener("click", () => {
  console.log("called2")
  home.classList.remove("show");
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  securityForm2.classList.remove("active");
  signupForm.classList.remove("active");
  loginForm.classList.remove("active");
  resetForm.classList.remove("active");
});
closeBtn3.addEventListener("click", () => {
  console.log("called2")
  home.classList.remove("show");
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  securityForm2.classList.remove("active");
  signupForm.classList.remove("active");
  loginForm.classList.remove("active");
  resetForm.classList.remove("active");
});
closeBtn4.addEventListener("click", () => {
  console.log("called2")
  home.classList.remove("show");
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  securityForm2.classList.remove("active");
  signupForm.classList.remove("active");
  loginForm.classList.remove("active");
  resetForm.classList.remove("active");
  resetSucForm.classList.remove("active");
});
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
  securityForm.classList.remove("active");
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});

forgotPwLink.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  loginForm.classList.remove("active");
  securityForm.classList.add("active");
});

backToLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  securityForm.classList.remove("active");
  signupForm.classList.remove("active");
  resetForm.classList.remove("active"); 
  loginForm.classList.add("active");
});

backToSignupLink.addEventListener('click', (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  securityForm2.classList.remove("active");
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});
 
goresetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("goresetBtn clicked");
  formContainer.classList.remove("active");
  loginForm.classList.remove("active");
  resetForm.classList.add("active");
  console.log("resetForm should be active now");
});


    document.addEventListener('DOMContentLoaded', function () {

      function checkPasswordMatch() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var passwordWarning = document.getElementById("passwordWarning");

        if (password === confirmPassword) {
          passwordWarning.textContent = "";
          return true;
        } else {
          passwordWarning.textContent = "Passwords do not match!";
          return false;
        }
      }

      document.getElementById("signupButton").addEventListener("click", function () {
        if (checkPasswordMatch()) {
          alert("Signup successful!");
       
        }
      });
    });

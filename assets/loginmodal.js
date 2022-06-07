const USERBTN = document.getElementById("fb");
const LoginModal = document.querySelector(".login_modal_bg");
const login_modal_close = document.querySelector(".cross_button");
const login_phone_number = document.querySelector(".login_btn_class4");

USERBTN.addEventListener("click", () => {
  console.log(USERBTN);
  LoginModal.classList.add("login_bg_active");
});
login_modal_close.addEventListener("click", () => {
  LoginModal.classList.remove("login_bg_active");
});

const Fromloginbtn = document.querySelector(".login_BUTTON");
const FormsignupBtn = document.querySelector(".signup_button");

const loginForm = document.querySelector(".LOGIN_FORM");
const signupForm = document.querySelector(".SIGNUP_FORM");
const signup_mobile_section = document.querySelector(".continue_mobile_full");

Fromloginbtn.addEventListener("click", () => {
  signupForm.style.display = "none";
  loginForm.style.display = "block";
  FormsignupBtn.style.color = "#777777c2";
  Fromloginbtn.style.color = "black";
  signup_mobile_section.style.display = "none";
});

FormsignupBtn.addEventListener("click", () => {
  loginForm.style.display = "none";

  signupForm.style.display = "block";
  Fromloginbtn.style.color = "#777777c2";
  FormsignupBtn.style.color = "black";
  signup_mobile_section.style.display = "none";
});
login_phone_number.addEventListener("click", () => {
  loginForm.style.display = "none";

  signupForm.style.display = "none";

  Fromloginbtn.style.color = "#777777c2";
  FormsignupBtn.style.color = "black";
  signup_mobile_section.style.display = "block";
});

// login validation
// login form validation
const Email = document.getElementById("email");

const form = document.querySelector(".form");
const password = document.getElementById("login_modal_pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error");
  console.log(errorDisplay);
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // const sign_up_emailValue = Email_signup.value.trim();
  // const sign_up_passValue = password_signup.value.trim();
  // const confirm_passValue = password_confirm.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

// login_form validation ends
// signup_form_validation

const form_signup = document.getElementById("form_signup");

const Email_signup = document.getElementById("email_2");
const password_signup = document.getElementById("signup_pass");
const password_confirm = document.getElementById("signup_pass_confirm");
form_signup.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs_signup();
});

const setError_signup = (element, message) => {
  const FormControl = element.parentElement;

  const errorDisplay_signup = FormControl.querySelector(".error2");
  console.log(errorDisplay_signup);
  errorDisplay_signup.innerText = message;
  FormControl.classList.add("error2");
  FormControl.classList.remove("success2");
};
const setSuccess_signup = (element) => {
  const FormControl = element.parentElement;
  const errorDisplay_signup = FormControl.querySelector(".error2");
  errorDisplay_signup.innerText = "";
  FormControl.classList.add("success2");
  FormControl.classList.remove("error2");
};
const isValidEmail_signup = (email) => {
  const re2 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re2.test(String(email).toLowerCase());
};

const validateInputs_signup = () => {
  const sign_up_emailValue = Email_signup.value.trim();
  const sign_up_passValue = password_signup.value.trim();
  const confirm_passValue = password_confirm.value.trim();

  if (sign_up_emailValue === "") {
    setError_signup(email_2, "Email is required");
  } else if (!isValidEmail(sign_up_emailValue)) {
    setError_signup(email_2, "Provide a valid email address");
  } else {
    setSuccess_signup(email_2);
  }
  if (sign_up_passValue === "") {
    setError_signup(password_signup, "Password is required");
  } else if (sign_up_passValue.length < 8) {
    setError_signup(password_signup, "Password must be at least 8 character.");
  } else {
    setSuccess_signup(password_signup);
  }
  if (confirm_passValue === "") {
    setError_signup(password_confirm, "Please confirm your Password");
  } else if (confirm_passValue !== sign_up_passValue) {
    setError_signup(password_confirm, "Password Does't match");
  } else {
    setSuccess_signup(password_confirm);
  }
};
// signup_form_validation ends

// password eye

const login_modal_pass = document.getElementById("login_modal_pass");
const eye_icon_login = document.getElementById("eye_icon");
const sign_up_modal_pass = document.getElementById("signup_pass");
const sign_up_modal_pass_confirm = document.getElementById(
  "signup_pass_confirm"
);
function togglePW() {
  if (login_modal_pass.getAttribute("type") === "password") {
    login_modal_pass.setAttribute("type", "text");
  } else {
    login_modal_pass.setAttribute("type", "password");
  }
}

function togglePW1() {
  if (sign_up_modal_pass.getAttribute("type") === "password") {
    sign_up_modal_pass.setAttribute("type", "text");
  } else {
    sign_up_modal_pass.setAttribute("type", "password");
  }
}
function togglePW2() {
  if (sign_up_modal_pass_confirm.getAttribute("type") === "password") {
    sign_up_modal_pass_confirm.setAttribute("type", "text");
  } else {
    sign_up_modal_pass_confirm.setAttribute("type", "password");
  }
}

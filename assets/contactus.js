const Email_contact_us = document.getElementById("contact_us_email");

const form_contact_us = document.getElementById("form");

form_contact_us.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs_contact_us();
});

const setError_contact_us = (element, message) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error");
  console.log(errorDisplay);
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess_contact_us = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail_contact_us = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs_contact_us = () => {
  const emailValue = Email_contact_us.value.trim();

  if (emailValue === "") {
    setError(contact_us_email, "Email is required");
  } else if (!isValidEmail_contact_us(emailValue)) {
    setError_contact_us(contact_us_email, "Provide a valid email address");
  } else {
    setSuccess_contact_us(contact_us_email);
  }
};

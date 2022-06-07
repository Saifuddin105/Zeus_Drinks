const step_1_Form = document.getElementById("step_1_form");
const step_2_Form = document.getElementById("step_2_form");
const step_3_Form = document.getElementById("step_3_form");
const step_4_Form = document.getElementById("step_4_form");

const reg_slider_1 = document.getElementById("reg-slider-1");
const reg_slider_2 = document.getElementById("reg-slider-2");
const reg_slider_3 = document.getElementById("reg-slider-3");
const reg_slider_4 = document.getElementById("reg-slider-4");

const Step_1_btn = document.getElementById("step1_nextBtn");
const Step_2_btn = document.getElementById("next_btn_UK");
const Step_3_btn = document.getElementById("step_3_btn");
const Step_4_btn = document.getElementById("UK_register_btn");

const Step_1 = document.getElementById("step1");
const Step_2 = document.getElementById("step2");
const Step_3 = document.getElementById("step3");
const Step_4 = document.getElementById("step4");

const step_sequence = document.getElementById("step_sequence");

if (
  (step_1_Form != null) &
  (step_2_Form != null) &
  (step_3_Form != null) &
  (step_4_Form != null)
) {
  step_2_Form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    reg_slider_3.style.display = "block";
    reg_slider_1.style.display = "none";
    reg_slider_2.style.display = "none";

    Step_2.classList.add("Success");
    Step_3.classList.add("Active");
    step_sequence.innerHTML = "3";
  });
  step_3_Form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    reg_slider_4.style.display = "block";
    reg_slider_1.style.display = "none";
    reg_slider_2.style.display = "none";
    reg_slider_3.style.display = "none";
    Step_3.classList.add("Success");
    Step_4.classList.add("Active");
    step_sequence.innerHTML = "4";
  });
}

const radioButton1 = document.getElementById("radio1_step_3");
const radioButton2 = document.getElementById("radio2_step_3");
const addressForm = document.querySelector(".for_below_1_year");

// console.log(radioButton1.checked)

if ((radioButton1 != null) & (radioButton2 != null)) {
  radioButton1.addEventListener("click", (e) => {
    addressForm.style.display = "none";
  });
  radioButton2.addEventListener("click", (e) => {
    addressForm.style.display = "block";
  });
}

// email verification step 1
const Email = document.getElementById("uk_register_email");

const form = document.getElementById("step_1_form");

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
  const emailValue = Email.value.trim();

  if (emailValue === "") {
    setError(uk_register_email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(uk_register_email, "Provide a valid email address");
  } else {
    setSuccess(uk_register_email);
    window.scrollTo(0, 0);
    reg_slider_2.style.display = "block";
    reg_slider_1.style.display = "none";
    Step_1.classList.add("Success");
    Step_2.classList.add("Active");
    step_sequence.innerHTML = "2";
  }
};

// terms and conditions agreement
const modal_btn = document.getElementById("modal_text");
const modal_bg = document.querySelector(".modal-bg");
const modal_close_btn = document.querySelector(".modal_close");
const modal_tnc_wholsale = document.getElementById("modal_tnc_wholsale");
const modal_btn_2 = document.getElementById("T_and_C");
// console.log({ modal_tnc_wholsale, modal_bg, modal_close_btn })

// if (modal_bg != null && modal_close_btn != null && modal_tnc_wholsale != null && modal_btn != null) {

if (modal_bg != null && modal_btn != null) {
  modal_btn.addEventListener("click", function () {
    modal_bg.classList.add("bg-active");
  });
}
if (modal_close_btn != null) {
  modal_close_btn.addEventListener("click", function () {
    modal_bg.classList.remove("bg-active");
  });
}
if (modal_tnc_wholsale != null) {
  modal_tnc_wholsale.addEventListener("click", function () {
    console.log("asdasdad");
    modal_bg.classList.add("bg-active");
  });
}

if (modal_btn_2 != null) {
  modal_btn_2.addEventListener("click", (e) => {
    e.preventDefault();

    modal_bg.classList.add("bg-active");
  });
}
if (modal_bg != null) {
  modal_bg.addEventListener("click", function () {
    modal_bg.classList.remove("bg-active");
  });
}

const agreeBtn = document.getElementById("i_agree_btn");
const agree_checkbox = document.getElementById("i_agree_checkbox");
const wholesaleCheckbox = document.getElementById("checkbox_wholesale");
const intRegCheckbox = document.getElementById("int_reg_checkbox");
document.querySelector(".modal_tnc")?.addEventListener("click", (e) => {
  e.stopPropagation();
});

if (wholesaleCheckbox != null) {
  wholesaleCheckbox.addEventListener("click", (e) => {
    modal_bg.classList.add("bg-active");
    wholesaleCheckbox.checked = false;
  });
}
if (intRegCheckbox != null) {
  intRegCheckbox.addEventListener("click", (e) => {
    modal_bg.classList.add("bg-active");
    intRegCheckbox.checked = false;
  });
}

if (agreeBtn != null) {
  agreeBtn.addEventListener("click", (e) => {
    modal_bg.classList.remove("bg-active");
    agree_checkbox.checked = true;
  });

  agreeBtn.addEventListener("click", (e) => {
    wholesaleCheckbox.checked = true;
  });

  agreeBtn.addEventListener("click", (e) => {
    intRegCheckbox.checked = true;
  });
}

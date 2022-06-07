const original_one_time = document.querySelector(".one_time_sec");
const original_subs = document.querySelector(".subscription_sec");
const original_ot_radio = document.querySelector(".plan_radio_inputs_1");
const original_sub_radio = document.querySelector(".plan_radio_inputs_2");

original_ot_radio.addEventListener("click", (e) => {
  original_one_time.style.display = "block";
  original_subs.style.display = "none";
});
original_sub_radio.addEventListener("click", (e) => {
  original_one_time.style.display = "none";
  original_subs.style.display = "block";
});

// suger_free
const suger_one_time = document.querySelector(".one_time_sec_suger_free");
const suger_subs = document.querySelector(".subscription_sec_suger_free");
const suger_ot_radio = document.querySelector(".plan_radio_inputs_two_1");
const suger_sub_radio = document.querySelector(".plan_radio_inputs_two_2");

suger_ot_radio.addEventListener("click", (e) => {
  suger_one_time.style.display = "block";
  suger_subs.style.display = "none";
});
suger_sub_radio.addEventListener("click", (e) => {
  suger_one_time.style.display = "none";
  suger_subs.style.display = "block";
});

// mojito
const mojito_one_time = document.querySelector(".one_time_sec_mojito");
const mojito_subs = document.querySelector(".subscription_sec_mojito");
const mojito_ot_radio = document.querySelector(".plan_radio_inputs_three_1");
const mojito_sub_radio = document.querySelector(".plan_radio_inputs_three_2");

mojito_ot_radio.addEventListener("click", (e) => {
  mojito_one_time.style.display = "block";
  mojito_subs.style.display = "none";
});
mojito_sub_radio.addEventListener("click", (e) => {
  mojito_one_time.style.display = "none";
  mojito_subs.style.display = "block";
});
// orange
const orange_one_time = document.querySelector(".one_time_sec_orange");
const orange_subs = document.querySelector(".subscription_sec_orange");
const orange_ot_radio = document.querySelector(".plan_radio_inputs_four_1");
const orange_sub_radio = document.querySelector(".plan_radio_inputs_four_2");

orange_ot_radio.addEventListener("click", (e) => {
  orange_one_time.style.display = "block";
  orange_subs.style.display = "none";
});
orange_sub_radio.addEventListener("click", (e) => {
  orange_one_time.style.display = "none";
  orange_subs.style.display = "block";
});

// addtocart side bar function
const addtocart = document.querySelector(".addtocart_sidebar");
const sidebar_close_btn = document.querySelector(".sidebar_top_btn");
const sidebar_blur = document.querySelector(".sidebar_blur");

function cart_open() {
  addtocart.style.right = "0px";
  sidebar_blur.style.display = "block";
}
sidebar_close_btn.addEventListener("click", (e) => {
  addtocart.style.right = "-330px";
  sidebar_blur.style.display = "none";
});
var initial = 0;
var initial_2 = 0;

const ROOT = document.querySelector(".ROOT");
const ROOT_2 = document.querySelector(".ROOT_2");
if ((ROOT != null) & (ROOT_2 != null)) {
  ROOT.innerText = initial;
  ROOT_2.innerText = initial_2;
}

if ((ROOT != null) & (ROOT_2 != null)) {
  function decrement() {
    initial = initial - 1;
    initial_2 = initial_2 - 7.49;

    ROOT.innerText = initial;
    ROOT_2.innerText = parseFloat(initial_2).toFixed(2);
  }
  function increament() {
    initial = initial + 1;
    initial_2 = initial_2 + 7.49;

    ROOT.innerText = initial;
    ROOT_2.innerText = parseFloat(initial_2).toFixed(2);
  }
}
// Box two

var initial_two = 0;
var initial_2_two = 0;

const ROOT_two = document.querySelector(".ROOT_two");
const ROOT_2_two = document.querySelector(".ROOT_2_two");
if ((ROOT_two != null) & (ROOT_2_two != null)) {
  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = initial_2_two;
}

function decrement_two() {
  initial_two = initial_two - 1;
  initial_2_two = initial_2_two - 7.49;

  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = parseFloat(initial_2_two).toFixed(2);
}
function increment_two() {
  initial_two = initial_two + 1;
  initial_2_two = initial_2_two + 7.49;

  ROOT_two.innerText = initial_two;
  ROOT_2_two.innerText = parseFloat(initial_2_two).toFixed(2);
}
//box three
var initial_three = 0;
var initial_2_three = 0;
const ROOT_three = document.querySelector(".ROOT_three");
const ROOT_2_three = document.querySelector(".ROOT_2_three");
if ((ROOT_three != null) & (ROOT_2_three != null)) {
  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = initial_2_three;
}

function decrement_three() {
  initial_three = initial_three - 1;
  initial_2_three = initial_2_three - 7.49;

  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = parseFloat(initial_2_three).toFixed(2);
}
function increment_three() {
  initial_three = initial_three + 1;
  initial_2_three = initial_2_three + 7.49;

  ROOT_three.innerText = initial_three;
  ROOT_2_three.innerText = parseFloat(initial_2_three).toFixed(2);
}

// newsletter function
const newsletterButton = document.querySelector(".newsletter_email");
const subscribeBtn = document.getElementById("newsletter_bttn");
const upperWrapper = document.querySelector(".upper-wrapper");

if (newsletterButton != null) {
  newsletterButton.addEventListener("click", (e) => {
    // console.log("adsaa")
    upperWrapper.style.opacity = "1";
  });
}

function diplay_wide(event) {
  if (event.target.value != "") {
    newsletterButton.style.width = "220px";
    subscribeBtn.addEventListener("click", (e) => {
      alert("Subscription added");
    });
  }
}

const modal_newsletter_tnc = document.getElementById("modal_newletter_btn");
const modal_bg = document.querySelector(".modal-bg");
const modal_close_btn = document.querySelector(".modal_close");
const modal_tnc_content = document.querySelector(".modal_tnc");
const modal_main_heading = document.getElementById("main_heading");

modal_newsletter_tnc.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});

modal_close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
});

// modal add to cart tnc
modal_close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
});
// newsletter ends

const addtocart_tnc = document.getElementById("modal_text");
addtocart_tnc.addEventListener("click", (e) => {
  modal_bg.classList.add("bg-active");
});

// more info part
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// login modal terms and conditions
const sign_up_terms = document.getElementById("Anchor");
const login_form_checkbox = document.getElementById("login_form_checkbox");
const agreeBtn = document.getElementById("i_agree_btn");
sign_up_terms.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});
agreeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
  login_form_checkbox.checked = true;
});

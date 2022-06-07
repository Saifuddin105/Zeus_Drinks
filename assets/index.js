window.onscroll = function () {
  scrollRotate();
};
function scrollRotate() {
  let image = document.querySelector(".scroll_text");
  image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}
const NS = document.querySelector(".N-s");
const PS = document.querySelector(".P-s");
const second_NS = document.querySelector(".second_NS");
const second_PS = document.querySelector(".second_PS");
const third_NS = document.querySelector(".third_NS");
const third_PS = document.querySelector(".third_PS");
const fourth_NS = document.querySelector(".fourth_NS");
const fourth_PS = document.querySelector(".fourth_PS");

PS.addEventListener("click", (e) => {
  e.preventDefault();
  PS.style.display = "none";
  NS.style.display = "block";
  second_NS.style.display = "none";
  second_PS.style.display = "block";
  third_NS.style.display = "none";
  third_PS.style.display = "block";
  fourth_NS.style.display = "none";
  fourth_PS.style.display = "block";
});

// $("P-s").click(function)() {

// };

NS.addEventListener("click", (e) => {
  e.preventDefault();
  NS.style.display = "none";
  PS.style.display = "block";
});

second_PS.addEventListener("click", (e) => {
  e.preventDefault();
  second_PS.style.display = "none";
  second_NS.style.display = "block";
  NS.style.display = "none";
  PS.style.display = "block";
  third_NS.style.display = "none";
  third_PS.style.display = "block";
  fourth_NS.style.display = "none";
  fourth_PS.style.display = "block";
});
second_NS.addEventListener("click", (e) => {
  e.preventDefault();
  second_NS.style.display = "none";
  second_PS.style.display = "block";
});

third_PS.addEventListener("click", (e) => {
  e.preventDefault();
  third_PS.style.display = "none";
  third_NS.style.display = "block";
  NS.style.display = "none";
  PS.style.display = "block";
  second_NS.style.display = "none";
  second_PS.style.display = "block";
  fourth_NS.style.display = "none";
  fourth_PS.style.display = "block";
});
third_NS.addEventListener("click", (e) => {
  e.preventDefault();
  third_NS.style.display = "none";
  third_PS.style.display = "block";
});

fourth_PS.addEventListener("click", (e) => {
  e.preventDefault();
  fourth_PS.style.display = "none";
  fourth_NS.style.display = "block";
  NS.style.display = "none";
  PS.style.display = "block";
  second_NS.style.display = "none";
  second_PS.style.display = "block";
  third_NS.style.display = "none";
  third_PS.style.display = "block";
});
fourth_NS.addEventListener("click", (e) => {
  e.preventDefault();
  fourth_NS.style.display = "none";
  fourth_PS.style.display = "block";
});
// } else if ((PS.style.display = "none")) {
//   PS.style.display = "block";
//   NS.style.display = "none";

// newsletter function
const newsletterButton = document.querySelector(".newsletter_email");
const subscribeBtn = document.getElementById("newsletter_bttn");
const upperWrapper = document.querySelector(".upper-wrapper");
const newsletter_checkbox = document.getElementById("switch");

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
const agreeBtn = document.getElementById("i_agree_btn");
const sign_up_terms = document.getElementById("Anchor");
const login_form_checkbox = document.getElementById("login_form_checkbox");

modal_newsletter_tnc.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});

modal_close_btn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
});

agreeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
  newsletter_checkbox.checked = true;
});
sign_up_terms.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.add("bg-active");
});
agreeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal_bg.classList.remove("bg-active");
  login_form_checkbox.checked = true;
});

// newsletter function end
/* menu functionality js*/

// document.getElementById("menu_button").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".menu_full_content").style.display = "block";
// });
// document.getElementById("menu_cross_Btn").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector(".menu_full_content").style.display = "none";
// });
$(document).ready(function () {
  $("#menu_button").click(function (e) {
    e.preventDefault();
    $(".menu_full_content").css("display", "block");
  });
  $("#menu_cross_Btn").click(function (e) {
    e.preventDefault();
    $(".menu_full_content").css("display", "none");
  });
});

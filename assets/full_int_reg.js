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
    intRegCheckbox.checked = true;
  });
}

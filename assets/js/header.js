const $ = document;

const hamburgerBtn = $.querySelector(".header__hamburger");
const mobileHeader = $.querySelector(".header__mobile");
const closeMobile = $.querySelector(".mobile__svg");
const overlay = $.querySelector(".overlay");

const closeMobileAndOverlay = () => {
  mobileHeader.classList.remove("mobile__heeader--active");
  overlay.classList.remove("overlay--active");
};

window.document.body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeMobileAndOverlay();
  }
});

hamburgerBtn.addEventListener("click", () => {
  mobileHeader.classList.add("mobile__heeader--active");
  overlay.classList.add("overlay--active");
});

closeMobile.addEventListener("click", () => {
   closeMobileAndOverlay();
});

overlay.addEventListener("click", () => {
   closeMobileAndOverlay();
});

const navLinks = document.querySelector(".nav-links");
const burer = document.querySelector(".fa");
const sec1 = document.querySelector(".sec1");
const nav = document.querySelector("nav");

burer.addEventListener("click", function () {
  navLinks.classList.toggle("navFade");
  burer.classList.toggle("fa-times");
  window.scrollTo(0, 0);
  navLinks.classList.remove("navLinkHidden");
});

function navItemClick() {
  burer.classList.remove("fa-times");
  navLinks.classList.remove("navFade");
  navLinks.classList.toggle("navLinkHidden");
}

onscroll = function () {
  nav.classList.toggle("navv", window.scrollY > 0);
};
//scroll reveal
sr.reveal("nav", {
  origin: "top",
});

sr.reveal(".footer", {
  origin: "bottom",
});

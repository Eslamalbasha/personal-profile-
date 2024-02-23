// show menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// remove menu mobile
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// shadow header
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
//  ============== Email js ========

// const contactForm = document.getElementById("contact--form"),
//   contactMessage = document.getElementById("contact-message");
// const sendEmail = (e) => {
//   e.preventDefault();
//   emailJs
//     .sendForm(
//       "service_deqoilq",
//       "template_738nehd",
//       "#contact--form",
//       "A_wBBxYmXfrIhV1Yx"
//     )
//     .then(
//       () => {
//         contactMessage.textContent = "Message Sent Successfully";
//         setTimeout(() => {
//           contactMessage.textContent = "";
//         }, 5000);
//         contactForm.reset();
//       },
//       () => {
//         contactMessage.textContent = "Message not sent (service error)";
//       }
//     );
// };
// contactForm.addEventListener("submit", sendEmail);

//  ================= show scroll ========
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

//  =========== Dark Mode ================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil uil-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil uil-moon" : "uil uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentIcon());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
//  =============== scroll animation =========
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
// sr.reveal(".home--perfil, .about--image", { origin: "right" });
// sr.reveal(".home--name,.home--info , .about--container .section--title-1", {
//   origin: "left",
// })
// sr.reveal();
sr.reveal(`.home--perfil, .about--image , .contact--mail`, { origin: "right" });
sr.reveal(
  `.home--name,.home--info ,.about--container .section--title-1 , about--info,.contac--socila .contact--data
   `,
  { origin: "left" }
);
sr.reveal(".services--card, .project--card", { interval: 100 });

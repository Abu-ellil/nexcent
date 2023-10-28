const navbar = document.querySelector(".link-list");
const fa = document.querySelector(".fa-bars");
const navToggle = document.querySelector(".mobile-links");
const toTopButton = document.getElementById("toTopButton");

console.log(navToggle);
navToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
  fa.classList.toggle("fa-x");
});

// to top button
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    toTopButton.style.display = "block";
  } else {
    // Otherwise, hide the button
    toTopButton.style.display = "none";
  }
});

toTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

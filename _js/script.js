const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

mobileMenu.addEventListener("click", () => {
  menuBtn.classList.remove("is-active");
  mobileMenu.classList.remove("is-active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observeeEl = document.querySelectorAll(".observee");
observeeEl.forEach((el) => observer.observe(el));

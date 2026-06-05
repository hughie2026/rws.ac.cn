const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPath) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    if (siteNav) {
      siteNav.classList.remove("open");
    }
  });
});

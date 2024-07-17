<<<<<<< HEAD
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    navbar.classList.add("navbar-hidden");
  } else {
    // Scroll up
    navbar.classList.remove("navbar-hidden");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
=======
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    navbar.classList.add("navbar-hidden");
  } else {
    // Scroll up
    navbar.classList.remove("navbar-hidden");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
>>>>>>> dace5826eb53cb5bdc9f839bc358de1168232c02

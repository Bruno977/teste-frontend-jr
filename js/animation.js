// Animação no scroll
const sections = document.querySelectorAll(".js-scroll");
if (sections.length) {
  const windowHalf = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", animateScroll);
}
animateScroll();

const btnResponsive = document.getElementById("btn-responsive");

function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnResponsive.addEventListener("click", toggleMenu);

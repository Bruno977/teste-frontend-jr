const btnResponsive = document.getElementById("btn-responsive");

function toggleMenu() {
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");
}
btnResponsive.addEventListener("click", toggleMenu);

// function show_hide() {
//   var click = document.getElementById("list-items");
//   if (click.style.display === "none") {
//     click.style.display = "block";
//   } else {
//     click.style.display = "none";
//   }
// }
// const btn = document.getElementsByClassName("button");

// function toggleMenu1() {
//   const button = document.getElementsByClassName("dropdown");

//   button.classList.toggle("active");
// }
// btn.addEventListener("click", toggleMenu1);

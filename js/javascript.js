// INICIO NAVBAR

const btnResponsive = document.getElementById("btn-responsive");

function toggleMenu() {
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");
}
btnResponsive.addEventListener("click", toggleMenu);

const clickLink = document.getElementById("menu");

function closeNav() {
  const removeClassActive = document.getElementById("nav");
  removeClassActive.classList.remove("active");
}

clickLink.addEventListener("click", closeNav);
//FIM NAVBAR

// INICIO SIMULAÇÃO DE VENDAS
// Incrementa input através do botão +
function increments() {
  let newValue = 0;
  let currentvalue = Number(document.getElementById("sales").value);
  newValue = currentvalue + 1;
  document.getElementById("sales").value = newValue;
  totalSales();
}

// Calculo de comissão
function totalSales() {
  const sales = Number(document.getElementById("sales").value);

  if (sales === 0 || sales < 0) {
    document.getElementById("plan1").innerHTML = "";
    document.getElementById("plan2").innerHTML = "";
    document.getElementById("plan3").innerHTML = "";
  } else {
    document.getElementById("plan1").innerHTML = (
      sales * 134.85
    ).toLocaleString("pt-BR", { currency: "BRL" });
    document.getElementById("plan2").innerHTML = (
      (sales + 2) *
      134.85
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    document.getElementById("plan3").innerHTML = (
      (sales + 4) *
      134.85
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    limitInput();
  }
}

// Pega input
const sales = document.getElementById("sales");
sales.addEventListener("keyup", totalSales);

// Limita valor do input
function limitInput() {
  if (Number(sales.value) >= 999) {
    sales.value = 999;
  }
}
//FIM SIMULAÇÃO DE VENDAS

//INICIO PERGUNTAS
// Mostra e oculta perguntas
const questions = document.querySelectorAll(".question");

function showQuestions(event) {
  event.currentTarget.classList.toggle("active");
}

questions.forEach((item) => {
  item.addEventListener("click", showQuestions);
});
//FIM PERGUNTAS

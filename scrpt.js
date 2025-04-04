let valorConta = 0;
let numPessoas = 0;
let taxaGorjeta = 0;

const inputConta = document.querySelector("#conta");
inputConta.addEventListener("input", atualizarConta);

function atualizarConta(e) {
  valorConta = Number(e.target.value);
  atualizarCalculo();
}

const inputPessoas = document.querySelector("#pessoas");
inputPessoas.addEventListener("input", atualizarPessoas);

function atualizarPessoas(e) {
  const erroTexto = document.querySelector(".pessoas #erro");
  const caixaInput = document.querySelector(".pessoas .input-box");

  if (e.target.value === "0") {
    erroTexto.style.display = "block";
    caixaInput.setAttribute("id", "erro-div");
  } else {
    erroTexto.style.display = "none";
    caixaInput.removeAttribute("id");
    numPessoas = Number(e.target.value);
  }

  atualizarCalculo();
}

const botoes = document.querySelectorAll(".gorjeta input[type='button']");

botoes.forEach(btn => {
  btn.addEventListener("click", definirGorjeta);
});

function definirGorjeta(e) {
  botoes.forEach(btn => {
    btn.classList.remove("botao-ativo");
    if (btn.value === e.target.value) {
      btn.classList.add("botao-ativo");
    }
  });

  taxaGorjeta = e.target.value !== "" ? parseFloat(e.target.value) / 100 : 0;
  atualizarCalculo();
}

const inputCustom = document.querySelector("#outra");
inputCustom.addEventListener("input", definirGorjeta);

function atualizarCalculo() {
  if (valorConta > 0 && taxaGorjeta > 0 && numPessoas > 0) {
    const campoGorjeta = document.querySelector(".gorjeta-total > strong");
    campoGorjeta.innerHTML = `R$ ${(valorConta * taxaGorjeta / numPessoas).toFixed(2)}`;

    const campoTotal = document.querySelector(".total > strong");
    campoTotal.innerHTML = `R$ ${((valorConta + valorConta * taxaGorjeta) / numPessoas).toFixed(2)}`;
  }
}

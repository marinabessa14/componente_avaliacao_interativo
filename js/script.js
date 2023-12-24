const aval_cards = document.querySelectorAll(".classificacoes span");
const submit_btn = document.querySelector(".submit_btn");
const secao_classi = document.querySelector(".secao_classi");
const agradec_secao = document.querySelector(".agradec_secao");
const classificacao = document.getElementById("classificacao"); 
let avaliacao = null; 

aval_cards.forEach((aval_card) => {
  aval_card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    avaliacao = e.target.innerText; 
    console.log(avaliacao);
  });
});

submit_btn.addEventListener("click", () => {
  if (avaliacao) {
    classificacao.innerText = avaliacao; 
    secao_classi.classList.add("hidden");
    agradec_secao.classList.remove("hidden");
  }
});
const TAXA_FIXA = 18;

function formatar(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function atualizarResumo() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const preco = Number(item.dataset.preco);
    const qtd = Number(item.querySelector(".qty").innerText);
    subtotal += preco * qtd;
  });

  document.getElementById("subtotal").innerText = formatar(subtotal);
  document.getElementById("taxa").innerText = formatar(TAXA_FIXA);
  document.getElementById("total").innerText = formatar(subtotal + TAXA_FIXA);
}

document.addEventListener("click", e => {
  const item = e.target.closest(".cart-item");
  if (!item) return;

  const qtyEl = item.querySelector(".qty");
  let qtd = Number(qtyEl.innerText);

  // +
  if (e.target.classList.contains("btn-plus")) {
    qtd++;
    qtyEl.innerText = qtd;
  }

  // -
  if (e.target.classList.contains("btn-minus")) {
    if (qtd > 1) {
      qtd--;
      qtyEl.innerText = qtd;
    }
  }

  // remover
  if (e.target.classList.contains("btn-remove")) {
    item.remove();
  }

  atualizarResumo();
});

// inicial
atualizarResumo();

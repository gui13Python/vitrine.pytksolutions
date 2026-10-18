/* ============================================================
   PyTK Solutions — Catálogo de utilitários
   ------------------------------------------------------------
   Para adicionar um novo produto no futuro, basta copiar um
   objeto da lista PRODUCTS abaixo, preencher os campos e
   salvar. O card aparece automaticamente na vitrine, sem
   precisar mexer no HTML ou no CSS.

   Campos:
   - code:      código do catálogo, ex: "PYTK-002" (mostrado no topo do card)
   - name:      nome do produto
   - tagline:   descrição curta (1 linha)
   - icon:      um emoji ou caractere que represente o produto
   - price:     texto do preço, ex: "R$ 37,00". Deixe "" se ainda não tiver preço.
   - status:    "disponivel" ou "em-breve"
   - url:       link para a página do produto. Use "#" enquanto não tiver.
   ============================================================ */

const PRODUCTS = [
  {
    code: "PYTK-001",
    name: "Tecla Ghost Fix \u{2328}\u{2705}",
    tagline: "Bloqueia ou remapeia teclas com defeito sem trocar o teclado.",
    icon: "⌘",
    price: "Testar Gratis:  \u{27A1}",
    Teste: "sim",
    status: "disponivel",
    url: "https://mapeador-tecla.pytksolutions.com.br/"
  },
  {
    code: "PYTK-002",
    name: "PyTK Downloader\u{1F3B6}",
    tagline: "Com PyTK Downloader baixa em MP3 ou MP4, playlist inteira se quiser, e organiza tudo numa pasta pra você..",
    icon: "\u{1F3B5}",
    price: "Baixar o Teste: \u{27A1}",
    status: "disponivel",
    url: "https://baixar-musica.pytksolutions.com.br/"
  },
  {
    code: "PYTK-003",
    name: "Robo PagaBarato",
    tagline: "O PagaBarato varre a Shopee, monta seus links de afiliado e posta sozinho no Telegram, Facebook e Instagram — 24 horas por dia, direto de uma conta que é só sua.",
    icon: "\u{1F916}",
    price: "79,90/vitalicio",
    status: "em-breve",
    url: "https://vendas.pytksolutions.com.br/"
  },
  {
    code: "PYTK-004",
    name: "ApostaCerta\u{1F340}",
    tagline: "Monte seu jogo em segundosEscolha suas dezenas de sorte ou deixe o gerador completar o resto com filtros estatísticos.",
    icon: "\u{1F3AF}",
    price: "GRATIS \u{27A1}",
    status: "disponivel",
    url: "https://loterias.pytksolutions.com.br/"
  },
  
  {
    code: "PYTK-005",
    name: "Loteria PyTK Solutions\u{1F3B2} \u{1F916}\u{1F4F1}",
    tagline: "Gerador de números aleatórios • Grátis • Sem cadastro na Play Store",
    icon: "\u{1F3AF}",
    price: "GRATIS \u{27A1}",
    status: "disponivel",
    url: "https://testar-app.pytksolutions.com.br/"
  }
];

function createCard(product) {
  const isAvailable = product.status === "disponivel";

  const card = document.createElement("article");
  card.className = "card" + (isAvailable ? "" : " is-placeholder");

  const statusLabel = isAvailable ? "Disponível" : "Em breve";
  const statusClass = isAvailable ? "disponivel" : "em-breve";

  const priceHtml = product.price
    ? `<span class="card-price">${product.price}</span>`
    : `<span class="card-price"></span>`;

  const ctaHtml = isAvailable
    ? `<a class="card-cta" href="${product.url}" target="_blank" rel="noopener noreferrer">Ver produto →</a>`
    : `<span class="card-cta is-disabled">Em construção</span>`;

  card.innerHTML = `
    <div class="card-tab">
      <span class="card-code">${product.code}</span>
      <span class="card-status ${statusClass}">${statusLabel}</span>
    </div>
    <div class="card-perf" aria-hidden="true"></div>
    <div class="card-body">
      <div class="card-icon">${product.icon}</div>
      <h3>${product.name}</h3>
      <p>${product.tagline}</p>
      <div class="card-footer">
        ${priceHtml}
        ${ctaHtml}
      </div>
    </div>
  `;

  return card;
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  grid.innerHTML = "";
  PRODUCTS.forEach((product) => {
    grid.appendChild(createCard(product));
  });
}

function renderStats() {
  const disponivelEl = document.getElementById("stat-disponivel");
  const construcaoEl = document.getElementById("stat-construcao");
  if (!disponivelEl || !construcaoEl) return;

  const disponivel = PRODUCTS.filter((p) => p.status === "disponivel").length;
  const construcao = PRODUCTS.filter((p) => p.status === "em-breve").length;

  disponivelEl.textContent = disponivel;
  construcaoEl.textContent = construcao;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderStats();
});
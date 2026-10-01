/**
 * Base de Dados Completa de Modelos (Apple & Samsung)
 * Condições: Novo (Lacrado) e Swap Grade A
 * Lojas confiáveis no Brasil (Amazon, Magalu, Mercado Livre) e Paraguai (Nissei, Cellshop, Mega Eletrônicos)
 */
const database = [
  // --- APPLE IPHONES ---
  // iPhone 14
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 3999, note: "À vista Pix/boleto", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 4099, note: "Vendido e entregue Magalu", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 3949, note: "Loja Oficial Apple / ML", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / Magalu", usd: null, brlFixed: 2450, note: "Recondicionado revisado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 545, brlFixed: null, note: "Revendedor Autorizado Apple", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop Importados", usd: 550, brlFixed: null, note: "Shopping Cellshop CDE", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 540, brlFixed: null, note: "Av. Monseñor Rodríguez", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center / CDE", usd: 275, brlFixed: null, note: "Aparelho revisado Grade A", status: "Em estoque" },

  // iPhone 14 Plus (14 Max)
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 4399, note: "Tela 6.7\" (14 Max)", status: "Estoque baixo" },
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 4499, note: "Tela 6.7\" (14 Max)", status: "Estoque baixo" },
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre", usd: null, brlFixed: 2990, note: "Recondicionado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 615, brlFixed: null, note: "Novo lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 625, brlFixed: null, note: "Novo lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Plus", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Mega Eletrônicos", usd: 365, brlFixed: null, note: "Swap revisado", status: "Em estoque" },

  // iPhone 14 Pro
  { brand: "Apple", model: "iPhone 14 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre (Lojas Certificadas)", usd: null, brlFixed: 5299, note: "Descontinuado oficial", status: "Raro" },
  { brand: "Apple", model: "iPhone 14 Pro", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / Magalu", usd: null, brlFixed: 3990, note: "Vitrine / Caixa aberta", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 680, brlFixed: null, note: "Novo lacrado (fim estoque)", status: "Poucas unid." },
  { brand: "Apple", model: "iPhone 14 Pro", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Casa Nissei", usd: 420, brlFixed: null, note: "Swap certificado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Pro", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Mega Eletrônicos", usd: 410, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // iPhone 14 Pro Max (14 Max)
  { brand: "Apple", model: "iPhone 14 Pro Max", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre (Lojas Certificadas)", usd: null, brlFixed: 5899, note: "Descontinuado oficial", status: "Raro" },
  { brand: "Apple", model: "iPhone 14 Pro Max", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / Magalu", usd: null, brlFixed: 3999, note: "Vitrine / Recondicionado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Pro Max", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 730, brlFixed: null, note: "Novo lacrado", status: "Poucas unid." },
  { brand: "Apple", model: "iPhone 14 Pro Max", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Cellshop", usd: 450, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 14 Pro Max", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 440, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // iPhone 15
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 3998, note: "Preço à vista Pix", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 4299, note: "Vendido/Entregue Amazon", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 4443, note: "Parcelado sem juros", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Fast Shop", usd: null, brlFixed: 4399, note: "Consulte CEP entrega", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 655, brlFixed: null, note: "Lacrado Global A3090", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 660, brlFixed: null, note: "Autorizada Apple CDE", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 665, brlFixed: null, note: "Loja Cellshop CDE", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 395, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // iPhone 15 Plus (15 Max)
  { brand: "Apple", model: "iPhone 15 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 4999, note: "Tela 6.7\" (15 Max)", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 5199, note: "Tela 6.7\" (15 Max)", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 755, brlFixed: null, note: "Novo lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Plus", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 765, brlFixed: null, note: "Novo lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Plus", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Mega Eletrônicos", usd: 490, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // iPhone 15 Pro
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 5750, note: "Lojas Oficiais ML", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 5899, note: "Vendedores homologados", status: "Estoque baixo" },
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Magazine Luiza / ML", usd: null, brlFixed: 4450, note: "Vitrine / Caixa aberta", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 795, brlFixed: null, note: "Titânio / Lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 810, brlFixed: null, note: "Titânio / Lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Mega Eletrônicos", usd: 540, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // iPhone 15 Pro Max (15 Max)
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 6999, note: "Base 256GB Titânio", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 7199, note: "Base 256GB Titânio", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Swap (Grade A)", country: "Brasil", store: "Magazine Luiza / ML", usd: null, brlFixed: 5200, note: "Vitrine / Seminovos", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 920, brlFixed: null, note: "Novo 256GB Lacrado", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 930, brlFixed: null, note: "Autorizada Apple CDE", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 940, brlFixed: null, note: "Shopping Cellshop", status: "Em estoque" },
  { brand: "Apple", model: "iPhone 15 Pro Max", cap: "256GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 630, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // --- SAMSUNG GALAXY S24 & S25 SERIES ---
  // Samsung Galaxy S24
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 2899, note: "Preço à vista Pix", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 2999, note: "Entrega Prime oficial", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 3199, note: "Loja Oficial Samsung", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / TrocaFone", usd: null, brlFixed: 1990, note: "Seminovo revisado", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 450, brlFixed: null, note: "Versão Global / Lacrado", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 460, brlFixed: null, note: "Loja Nissei CDE", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 470, brlFixed: null, note: "Garantia de procedência", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S24", cap: "128GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 260, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // Samsung Galaxy S25
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 3699, note: "Preço à vista Pix", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 3899, note: "Oficial Samsung Brasil", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 3999, note: "Loja Oficial Samsung", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / Magalu", usd: null, brlFixed: 2790, note: "Vitrine / Seminovos", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 615, brlFixed: null, note: "Novo 256GB Lacrado", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 620, brlFixed: null, note: "Novo lacrado CDE", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 630, brlFixed: null, note: "Shopping Cellshop CDE", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25", cap: "256GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 390, brlFixed: null, note: "Swap Grade A", status: "Em estoque" },

  // Samsung Galaxy S25 Plus
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Magazine Luiza", usd: null, brlFixed: 4499, note: "Preço à vista Pix", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Amazon Brasil", usd: null, brlFixed: 4699, note: "Oficial Samsung Brasil", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Brasil", store: "Mercado Livre Oficial", usd: null, brlFixed: 4899, note: "Loja Oficial Samsung", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Swap (Grade A)", country: "Brasil", store: "Mercado Livre / Magalu", usd: null, brlFixed: 3350, note: "Vitrine / Seminovos", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Mega Eletrônicos", usd: 735, brlFixed: null, note: "Novo 256GB Lacrado", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Casa Nissei", usd: 740, brlFixed: null, note: "Novo lacrado CDE", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Novo (Lacrado)", country: "Paraguai", store: "Cellshop", usd: 750, brlFixed: null, note: "Shopping Cellshop CDE", status: "Em estoque" },
  { brand: "Samsung", model: "Galaxy S25 Plus", cap: "256GB", cond: "Swap (Grade A)", country: "Paraguai", store: "Madrid Center", usd: 480, brlFixed: null, note: "Swap Grade A", status: "Em estoque" }
];

// Referência de Preço Novo no Brasil para cálculo de economia
const benchmarkBrasilNovos = {
  "iPhone 14": 3999,
  "iPhone 14 Plus": 4399,
  "iPhone 14 Pro": 5299,
  "iPhone 14 Pro Max": 5899,
  "iPhone 15": 3998,
  "iPhone 15 Plus": 4999,
  "iPhone 15 Pro": 5750,
  "iPhone 15 Pro Max": 6999,
  "Galaxy S24": 2899,
  "Galaxy S25": 3699,
  "Galaxy S25 Plus": 4499
};

// Gerenciamento de Tema (Modo Escuro / Claro)
let isDarkMode = false;
try {
  const saved = localStorage.getItem('site_theme');
  if (saved === 'dark') isDarkMode = true;
} catch (e) {}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  try {
    localStorage.setItem('site_theme', isDarkMode ? 'dark' : 'light');
  } catch (e) {}
  applyTheme();
}

function applyTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");
  const text = document.getElementById("themeText");

  if (isDarkMode) {
    html.classList.add("dark");
    if (icon) {
      icon.innerHTML = `<svg class="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
    }
    if (text) text.innerText = "Modo Claro";
  } else {
    html.classList.remove("dark");
    if (icon) {
      icon.innerHTML = `<svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>`;
    }
    if (text) text.innerText = "Modo Escuro";
  }

  renderTable();
}

function onBrandChange() {
  const brandVal = document.getElementById("filterBrand").value;
  const appleOpt = document.getElementById("groupApple");
  const samsungOpt = document.getElementById("groupSamsung");
  const modelSelect = document.getElementById("filterModel");

  if (brandVal === "Apple") {
    if (appleOpt) appleOpt.style.display = "";
    if (samsungOpt) samsungOpt.style.display = "none";
  } else if (brandVal === "Samsung") {
    if (appleOpt) appleOpt.style.display = "none";
    if (samsungOpt) samsungOpt.style.display = "";
  } else {
    if (appleOpt) appleOpt.style.display = "";
    if (samsungOpt) samsungOpt.style.display = "";
  }
  if (modelSelect) modelSelect.value = "ALL";
  filterData();
}

function getDolarRate() {
  const input = document.getElementById("dolarRate");
  const val = parseFloat(input ? input.value : 5.35);
  return isNaN(val) || val <= 0 ? 5.35 : val;
}

function recalculatePrices() {
  const rate = getDolarRate();
  const statRef = document.getElementById("statDolarRef");
  if (statRef) {
    statRef.innerText = "R$ " + rate.toFixed(2).replace('.', ',');
  }

  const saving15PM = 6999 - (920 * rate);
  const statMax = document.getElementById("statMaxSaving");
  if (statMax) {
    statMax.innerText = "~R$ " + Math.round(saving15PM).toLocaleString('pt-BR');
  }

  renderTable();
}

function filterData() {
  renderTable();
}

function renderTable() {
  const rate = getDolarRate();
  const filterBrandEl = document.getElementById("filterBrand");
  const filterModelEl = document.getElementById("filterModel");
  const filterCountryEl = document.getElementById("filterCountry");
  const filterCondEl = document.getElementById("filterCondition");
  const searchBoxEl = document.getElementById("searchBox");

  const brandVal = filterBrandEl ? filterBrandEl.value : "ALL";
  const modelVal = filterModelEl ? filterModelEl.value : "ALL";
  const countryVal = filterCountryEl ? filterCountryEl.value : "ALL";
  const conditionVal = filterCondEl ? filterCondEl.value : "ALL";
  const searchVal = searchBoxEl ? searchBoxEl.value.toLowerCase().trim() : "";

  const tbody = document.getElementById("tableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const filtered = database.filter(item => {
    if (brandVal !== "ALL" && item.brand !== brandVal) return false;
    if (modelVal !== "ALL" && !item.model.includes(modelVal)) return false;
    if (countryVal !== "ALL" && item.country !== countryVal) return false;
    if (conditionVal === "Novo" && !item.cond.includes("Novo")) return false;
    if (conditionVal === "Swap" && !item.cond.includes("Swap")) return false;
    if (searchVal) {
      const matchStr = `${item.brand} ${item.model} ${item.store} ${item.country} ${item.cond} ${item.note}`.toLowerCase();
      if (!matchStr.includes(searchVal)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-8 text-slate-400 dark:text-slate-500">Nenhum smartphone encontrado com os filtros selecionados.</td></tr>`;
    return;
  }

  filtered.forEach(item => {
    let finalBRL = item.brlFixed;
    if (item.usd) {
      finalBRL = Math.round(item.usd * rate);
    }

    // Comparativo vs Brasil
    let compareBadge = '<span class="text-slate-400 dark:text-slate-600">-</span>';
    if (item.country === "Paraguai") {
      const brPrice = benchmarkBrasilNovos[item.model] || 3500;
      const diff = brPrice - finalBRL;
      const pct = Math.round((diff / brPrice) * 100);
      if (diff > 0) {
        compareBadge = `<span class="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full text-xs">
          -R$ ${diff.toLocaleString('pt-BR')} (${pct}%)
        </span>`;
      }
    } else {
      compareBadge = `<span class="text-xs text-slate-400 dark:text-slate-500 font-medium">Ref. Nacional</span>`;
    }

    const isParaguai = item.country === "Paraguai";
    const countryBadge = isParaguai 
      ? `<span class="px-2 py-0.5 rounded-md font-medium text-xs bg-red-500/10 text-red-500 dark:text-red-400">Paraguai</span>`
      : `<span class="px-2 py-0.5 rounded-md font-medium text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Brasil</span>`;

    const isNovo = item.cond.includes("Novo");
    const condBadge = isNovo 
      ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">Lacrado Novo</span>`
      : `<span class="px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400">Swap / Vitrine</span>`;

    const brandBadge = item.brand === "Apple"
      ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mr-1 border border-slate-200 dark:border-slate-700">Apple</span>`
      : `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 mr-1 border border-blue-200 dark:border-blue-900">Samsung</span>`;

    const row = document.createElement("tr");
    row.className = "hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors";
    row.innerHTML = `
      <td class="py-3 px-4 font-semibold text-slate-900 dark:text-slate-100">
        <div class="flex items-center">
          ${brandBadge}
          <span>${item.model}</span>
        </div>
        <span class="text-xs font-normal text-slate-400 dark:text-slate-500 block ml-0.5 mt-0.5">${item.cap}</span>
      </td>
      <td class="py-3 px-3">${condBadge}</td>
      <td class="py-3 px-3">${countryBadge}</td>
      <td class="py-3 px-4">
        <span class="font-medium text-slate-800 dark:text-slate-200 block">${item.store}</span>
        <span class="text-[11px] text-slate-400 dark:text-slate-500">${item.note}</span>
      </td>
      <td class="py-3 px-3 text-right font-mono font-medium ${item.usd ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-400 dark:text-slate-600'}">
        ${item.usd ? 'US$ ' + item.usd.toFixed(2) : '-'}
      </td>
      <td class="py-3 px-3 text-right font-bold text-sm sm:text-base font-mono text-slate-900 dark:text-slate-100">
        R$ ${finalBRL.toLocaleString('pt-BR')}
      </td>
      <td class="py-3 px-3 text-right">
        ${compareBadge}
      </td>
      <td class="py-3 px-3 text-center">
        <span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">${item.status}</span>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function downloadCSV() {
  const rate = getDolarRate();
  let csv = "Marca,Modelo,Capacidade,Condicao,Pais,Loja,Preco_USD,Cotacao_Dolar,Preco_BRL,Observacao\n";
  database.forEach(d => {
    const brl = d.brlFixed ? d.brlFixed : Math.round(d.usd * rate);
    const usdStr = d.usd ? d.usd.toFixed(2) : "";
    csv += `"${d.brand}","${d.model}","${d.cap}","${d.cond}","${d.country}","${d.store}","${usdStr}","${rate.toFixed(2)}","${brl}","${d.note}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `tabela_smartphones_brasil_paraguai_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Inicialização automática ao carregar o script
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  recalculatePrices();
});

// Execução imediata caso o DOM já esteja pronto
if (document.readyState === "complete" || document.readyState === "interactive") {
  applyTheme();
  recalculatePrices();
}

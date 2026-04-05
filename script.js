// LISTA DE PRODUTOS
// Para adicionar: { id: "numero_da_foto", nome: "Nome da Peça", preco: Valor, antigo: ValorOuZero, selo: "PROMO/NOVO/Vazio" }
const capulanas = [
    { id: "001", nome: "Vermelha Étnica", preco: 500, antigo: 700, selo: "PROMO" },
    { id: "002", nome: "Azul Oceano", preco: 500, antigo: 0, selo: "NOVO" },
    { id: "003", nome: "Kente Sol", preco: 500, antigo: 0, selo: "" },
    { id: "004", nome: "Geométrica Azul", preco: 500, antigo: 650, selo: "PROMO" },
    { id: "005", nome: "Realeza Ouro", preco: 500, antigo: 0, selo: "" },
    { id: "006", nome: "Fogo e Terra", preco: 550, antigo: 0, selo: "EXCLUSIVO" },
    { id: "007", nome: "Noite de Nampula", preco: 500, antigo: 0, selo: "NOVO" },
    { id: "008", nome: "Raízes da Terra", preco: 500, antigo: 0, selo: "" },
    { id: "009", nome: "Sol Nascente", preco: 500, antigo: 600, selo: "PROMO" },
    { id: "010", nome: "Tradição e Ouro", preco: 500, antigo: 0, selo: "" },
    { id: "011", nome: "Preciosidade Azul", preco: 500, antigo: 0, selo: "NOVO" },
    { id: "012", nome: "Mistério de Nampula", preco: 500, antigo: 0, selo: "" },
    { id: "013", nome: "Flores do Índico", preco: 500, antigo: 600, selo: "PROMO" },
    { id: "014", nome: "Ouro de Monapo", preco: 500, antigo: 0, selo: "" }

];

   

const meuNumero = "258866750011";

function renderizarProdutos() {
    const vitrine = document.getElementById('catalogo');
    let conteudo = "";

    capulanas.forEach(p => {
        // Lógica do preço antigo e selos
        const precoAntigoHTML = p.antigo > 0 ? `<span class="preco-antigo">${p.antigo} MT</span>` : "";
        const seloClass = p.selo === "NOVO" ? "selo-novo" : "selo-promo";
        const seloHTML = p.selo ? `<div class="selo ${seloClass}">${p.selo}</div>` : "";
        
        // Link dinâmico do WhatsApp com o nome do produto
        const msg = encodeURIComponent(`Olá! Quero encomendar a Capulana: ${p.nome} (Ref: ${p.id})`);
        const linkWhats = `https://wa.me/${meuNumero}?text=${msg}`;

        conteudo += `
            <div class="produto-card">
                ${seloHTML}
                <img src="imagem/${p.id}.jpg" alt="${p.nome}">
                <div class="info">
                    <h3>${p.nome}</h3>
                    <div class="precos">
                        ${precoAntigoHTML}
                        <span class="preco-atual">${p.preco} MT</span>
                    </div>
                    <a href="${linkWhats}" class="btn-whats-card">Comprar Agora</a>
                </div>
            </div>
        `;
    });

    vitrine.innerHTML = conteudo;
}

// Inicia o site
document.addEventListener('DOMContentLoaded', renderizarProdutos);



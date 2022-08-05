//eventListener no botão -> conversão
const button = document.getElementById("button_converter");

//eventListener no select -> troca bandeiras
const select = document.getElementById("moeda-select");

const dolar = 5.2; //valor do dolar
const euro = 5.9; //valor do euro
const bitcoin = 118597646.94; //valor do bitcoin  118597646.94

//Criando uma função do input dentro do botão, para converter reais em dólar / reais em euro
const convertValues = () => {
  const inputReais = document.getElementById("input_real").value; //quero só ver o valor
  const text_real = document.getElementById("valor_real"); //atualizando o valor abaixo da bandeira brasil_reais

  const moedaText = document.getElementById("valor_moeda"); //atualizando o valor abaixo da bandeira EUA_dolar /euro

  //SEM FORMATAÇÃO
  //text_real.innerHTML = inputReais;
  //moedaText.innerHTML = inputReais / dolar

  //Com formatação

  text_real.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dolar americano") {
    moedaText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    moedaText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }
  if (select.value === "Ƀ Bitcoin")
    moedaText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 8,
    }).format(inputReais / bitcoin);
};

//FUNÇÃO TROCA DE BANDEIRA DAS MOEDAS
mudarMoeda = () => {
  const trocaMoeda = document.getElementById("troca_moeda");
  const trocaImg = document.getElementById("troca_band");

  if (select.value === "US$ Dolar americano") {
    trocaMoeda.innerHTML = "Dólar Americano"; //texto em dolar
    trocaImg.src = "img/eua.png"; //bandeira eua
  }

  if (select.value === "€ Euro") {
    trocaMoeda.innerHTML = "Euro"; //texto em euro
    trocaImg.src = "img/euro.png"; //bandeira euro
  }
  if (select.value === "Ƀ Bitcoin") {
    trocaMoeda.innerHTML = "Bitcoin"; //texto em Bitcoin
    trocaImg.src = "img/bitcoin.png"; //bandeira Bitcoin
  }
  convertValues(); //chama a função de converter os valores para ficar formatado o texto dos valores
};

//ao clicar o botão vamos saber o valor convertido
//Toda vez que o botão é clicado ele vai chamar a função CONVERTVALUES()
button.addEventListener("click", convertValues);

//Toda vez que troca o valor, vai trocar o valor e as bandeiras
select.addEventListener("change", mudarMoeda);

//BITCOIN o valor é em fração

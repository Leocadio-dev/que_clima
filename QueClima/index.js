const apiKey = "2624348629b1d5ce175e2838060b49e6";

const buttonSearch = document.getElementById("button-search");
const loading = document.getElementById("loading");
const cityInput = document.getElementById("city-input");
const dadosClima = document.getElementById("dados-clima");
const cityElement = document.getElementById("city");
const tempElement = document.getElementById("temperatura");

// Arrow function pro evento de transformar o botão
buttonSearch.addEventListener("click", () => {
    // Desativa o botão assim que clicado
    buttonSearch.disabled = true;
    // Escondendo seu conteúdo e fazendo o ícone aparecer
    buttonSearch.textContent = "";
    // buttonSearch.classList.add("onclick");
    // Adicionando um tempo de 2 segundos para que o botão volte ao normal
    setTimeout(() => {
        // buttonSearch.classList.remove("onclick");
        loading.classList.remove("hide");
        buttonSearch.textContent = "Pesquisar";
        buttonSearch.disabled = false;
        dadosClima.classList.remove("hide");
    }, "1200");
})

// Arrow function para pegar o clima
const pegarClima = async (city) => {
    // URL da API
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    // Pegando a resposta da API
    const res = await fetch(weatherUrl);
    // Transformando a resposta em JSON
    const data = await res.json();
    // Mostrando os dados no console
    console.log(data);
    return data;
}

// Inserindo dados na div
const MostrarDadosClima = async (city) => {
    
    const dados = await pegarClima(city);
    cityElement.innerHTML = dados.name;
    // Inserindo a temperatura, umidade e vento no texto
    document.getElementById("temperatura").innerHTML = dados.main.temp;
    document.getElementById("umidade").innerHTML = dados.main.humidity;
    document.getElementById("vento").innerHTML = dados.wind.speed;
    
}

buttonSearch.addEventListener("click", (e) => {
    // Previne o comportamento padrão do botão
    e.preventDefault();
    // Pegando o valor do input
    const city = cityInput.value;
    // Chamando a função pegarClima
    MostrarDadosClima(city);
})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        MostrarDadosClima(city);
    }
})
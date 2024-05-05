const apiKey = "2624348629b1d5ce175e2838060b49e6";
const buttonSearch = document.getElementById("button-search");
const cityInput = document.getElementById("city-input")

// Arrow function pro evento de esconder botão e carregar loading

function pesquisarLocal() {
    // Desativa o botão assim que clicado
    buttonSearch.disabled = true;
    // Escondendo o botão e seu conteúdo
    buttonSearch.textContent = "";
    buttonSearch.classList.add("onclick");
    setTimeout(() => {
        buttonSearch.classList.remove("onclick")
        buttonSearch.textContent = "Pesquisar";
        buttonSearch.disabled = false
    }, "2000");

    realizarRequisicao();
}

// Função para realizar a requisição
// async function realizarRequisicao() {
//   const nomeCidade = document.getElementById("city-input").value.toLowerCase();
//   let vento, chanceChuva, temperatura, local, requisicao, informacao, lat, lon;
//   console.log(nomeCidade);
//   try {
//     requisicao = await fetch(
//       `http://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&units=metric&appid=${apiKey}`
//     );
//     if (!requisicao.ok) {
//       throw new Error("Não foi possível achar o nome dessa cidade");
//     }
//     informacao = await requisicao.json();
//     lon = informacao[0].lon;
//     lat = informacao[0].lat;
//     console.log(informacao[0]);
//     requisicao = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
//     );
//     informacao = await requisicao.json();
//     console.log(informacao);
//     temperatura = informacao.main.temp - 273;
//     console.log(temperatura);
//   } catch (error) {
//     console.log(error);
//   }
// }

const pegarClima = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(weatherUrl);
    const data = await res.json();

    console.log(data);
    return data;
}

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    pegarClima(city);
})
async function realizarRequisicao() {
    // Arrow function pro evento de esconder botão e carregar loading
    const buttonAnimation = () => {
        var buttonSearch = document.getElementById("button-search");
        var loading = document.getElementById("loading");
        // Desativa o botão assim que clicado
        buttonSearch.disabled = true;
        // Escondendo o botão
        buttonSearch.style.opacity = 0;


    };
    buttonAnimation();
    const nomeCidade = document.getElementById("city-input").value.toLowerCase();
    console.log(nomeCidade);
    try {
        const requisicao = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${nomeCidade}&limit=1&appid=2624348629b1d5ce175e2838060b49e6`
        );
        if (!requisicao.ok) {
            throw new Error("Não foi possível achar o nome dessa cidade");
        }
        const data = await requisicao.json();

        console.log(data.name);
    } catch (error) {
        console.log(error);
    }
}

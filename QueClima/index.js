realizarRequisicao();

async function realizarRequisicao(){
    const nomeCidade = document.getElementById("city-input").value.toLowerCase();
    console.log(nomeCidade);
    try{
        const requisicao = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${nomeCidade}&limit=1&appid=2624348629b1d5ce175e2838060b49e6`);
        if (!requisicao.ok){
            throw new Error("Não foi possível achar o nome dessa cidade");
        }
        const data = await requisicao.json();
        
        console.log(data.name);
        
    }catch(error){
        console.log(error);
    }
}
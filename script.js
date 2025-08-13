const API_KEY = "e127fd54f180cb857541a5547d08c6d9";
const buscarBtn = document.getElementById("buscar");
const cidadeInput = document.getElementById("cidade");

buscarBtn.addEventListener("click", () => {
    const cidade = cidadeInput.value.trim();
if (cidade) {
    buscarClima(cidade);
} else {
    alert("Por favor, digite o nome de uma cidade!");
}
});

async function buscarClima(cidade) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Cidade não encontrada");

        const dados = await resposta.json();

        document.getElementById("nomeCidade").textContent = `${dados.name}, ${dados.sys.country}`;
        document.getElementById("descricao").textContent = `Clima: ${dados.weather[0].description}`;
        document.getElementById("temperatura").textContent = `🌡️ Temperatura: ${dados.main.temp}ºC`;
    } catch (erro) {
        alert(erro.message);
    }
}
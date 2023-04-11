const valorReal = document.getElementById("valor_real");
const cambioDolar = document.getElementById("cambio_dolar");
const cambioEuro = document.getElementById("cambio_euro");
const cambioPalm = document.getElementById("cambio_palm");
const buttonConvert = document.getElementById("converter_btn");
let valorDolar = document.getElementById("valor_dolar");
const valorEuro = document.getElementById("valor_euro");
const valorPalm = document.getElementById("valor_palm");

function converter() {
    const real = parseFloat(valorReal.value);
    const cotacao_dolar = parseFloat(cambioDolar.value);
    const cotacao_euro = parseFloat(cambioEuro.value);

    //Conversão Dólar
    const dolar = real / cotacao_dolar;

    const euro = real / cotacao_euro;

    //Exibir o Valor do dólar
    valorDolar.innerHTML = `<p> R$${real} é equivalente à $${dolar}</p>`;    

}


buttonConvert.addEventListener("click", converter);
const valorReal = document.getElementById("valor_real");
const cambioDolar = document.getElementById("cambio_dolar");
const cambioEuro = document.getElementById("cambio_euro");
const cambioPalm = document.getElementById("cambio_palm");
const buttonConvert = document.getElementById("convert_btn");
const valorDolar = document.getElementById("valor_dolar");
const valorEuro = document.getElementById("valor_euro");
const valorPalm = document.getElementById("valor_palm");

function converter() {
    const real = parseFloat(valorReal.value);
    const cotacaoDolar = parseFloat(cambioDolar.value);

    //Conversão Dólar
    const dolar = real / cotacaoDolar;

    //Exibir o Valor do dólar
    
    //Conversão Euro
    euro = real / cotacaoEuro;

    //Conversão Palms
    palm = real / cotacaoPalm;

}

buttonConvert.addEventListener("click", converter);
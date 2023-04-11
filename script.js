const valorReal = document.getElementById("valorReal");
const cambioDolar = document.getElementById("cambioDolar");
const cambioEuro = document.getElementById("cambioEuro");
const cambioPalm = document.getElementById("cambioPalm");
const buttonConvert = document.getElementById("convertBtn");
const valorDolar = document.getElementById("valorDolar");
const valorEuro = document.getElementById("valorEuro");
const valorPalm = document.getElementById("valorPalm");

function converter() {
    const real = parseFloat(valorReal.value);
    const cotacaoDolar = parseFloat(cambioDolar.value);
    const cotacaoEuro = parseFloat(cambioDolar.value);
    const cotacaoPalm = parseFloat(cambioPalm.value);

    //Conversão Dólar
   const dolar = real / cotacaoDolar;
    
    //Conversão Euro
   const euro = real / cotacaoEuro;

    //Conversão Palms
   const palm = real / cotacaoPalm;

   valorDolar.value = `${dolar}`;
}
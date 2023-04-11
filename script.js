function converter() {
    var real, dolar, euro, palm, valorDolar, valorEuro, valorPalm;
    real = parseFloat(document.getElementById("valorReal").value);
    dolar = parseFloat(document.getElementById("cambioDolar").value);
    euro = parseFloat(document.getElementById("cambioEuro").value);
    palm = parseFloat(document.getElementById("cambioPalm").value);

    //Conversão Dólar
    valorDolar = real / dolar;
   document.getElementById("valorDolar").value = valorDolar;
}
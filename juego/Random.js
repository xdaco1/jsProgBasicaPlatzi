var caja1 = document.getElementById("pi_number1");
var caja2 = document.getElementById("pi_number2");
var cajaRestultado = document.getElementById("po_result");
var botonCalculo = document.getElementById("calcButton");

botonCalculo.addEventListener("click",generaAleatorio);

function generaAleatorio (){
  var randomValue = Math.random();
  var min = parseInt(caja1.value);
  var max = parseInt(caja2.value);
  var resultado;

  resultado = Math.floor(randomValue * (max-min+1))+min;

  cajaRestultado.value = resultado;
}

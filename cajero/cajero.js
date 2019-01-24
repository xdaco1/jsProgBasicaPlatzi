class Billete {
    constructor(v,c) {
        this.valor = v,
        this.cantidad = c
    }
}

var disponibleCajero = []
var entregadoUsuario = []
var bt_calculo = document.getElementById("bt_calcular");
//bt_calculo.addEventListener("click",entregarDinero);
var div_resultado = document.getElementById("resultado");
var txt_monto = document.getElementById("cajaMonto");

disponibleCajero.push(new Billete(50,3))
disponibleCajero.push(new Billete(20,2))
disponibleCajero.push(new Billete(10,2))

var dinero = parseInt(txt_monto.value);
var div = 0;
var papeles = 0;

while (dinero > 0) {
    
}

div_resultado.innerHTML="abcd";
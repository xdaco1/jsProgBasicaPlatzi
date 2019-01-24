var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var boton2=document.getElementById("circulito");
boton2.addEventListener("click",dibujarCirculo);

var botonLimpiar=document.getElementById("bt_limpiar");
botonLimpiar.addEventListener("click",limpiar);


var d = document.getElementById('dibujito');
var lienzo = d.getContext("2d");
var anchoLienzo = d.width;
//dibujarLinea("pink",10,300,220,10);
//dibujarLinea("yellow",300,10,10,220);

function dibujar(numLineas){
  var lineas = parseInt(numLineas);
  var espacio = anchoLienzo/numLineas;
  var l = 0;
  var yi =0; var xf=0;
  var colorLinea = "red";
    while (l <= lineas) {
      dibujarLinea(colorLinea,0,yi,xf,300);
      dibujarLinea(colorLinea,yi,300,300,300-yi);
      dibujarLinea(colorLinea,300,300-yi,300-yi,0);
      dibujarLinea(colorLinea,300-yi,0,0,xf);
      yi = espacio * l;
      xf = espacio * (l + 1);
      l++;
    }
}

function limpiar(){
  lienzo.clearRect(0,0,300,300);
  texto.value="";
}

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  lienzo.clearRect(0,0,300,300);
  var xxx = parseInt(texto.value);
  dibujar(xxx);
}

function dibujarCirculo(){

  var pI = anchoLienzo / 2;

  //dibujarLinea("red",pI,pI,50,250);
  //dibujarLinea("red",pI,pI,50,150);
  //dibujarLinea("red",pI,pI,150,50);
  //dibujarLinea("red",pI,pI,250,150);

  dibujarLinea("red",150,50,150,250);
  dibujarLinea("red",140,50,160,250);
  dibujarLinea("red",130,50,170,250);
  dibujarLinea("red",120,50,180,250);
  dibujarLinea("red",90,50,210,250);

}

document.addEventListener("keyup", dibujarTeclado);

function  dibujarTeclado(evento){
  //console.log(evento);
  var colorcito = "blue";
  var movimiento=10;
  switch (evento.keyCode) {
    case teclas.DOWN:
      dibujarLinea(colorcito,xi,yi,xi, yi+movimiento,papel);
      yi=yi+movimiento;
      break;
    case teclas.UP:
      dibujarLinea(colorcito,xi,yi,xi, yi-movimiento,papel);
      yi=yi-movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito,xi,yi,xi-movimiento, yi,papel);
      xi = xi-movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,xi,yi,xi+movimiento, yi,papel);
      xi = xi+movimiento;
      break;
    default:
      break;
  }
}
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

console.log(teclas);


var cuadro=document.getElementById("areaDibujo");
var papel=cuadro.getContext("2d");

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

var xi = 100;
var yi = 100;
dibujarLinea("red",xi-1,yi-1,xi+1,yi-1,papel);

/*Dibujar con mouse dentro del canvas y con click izquierdo únicamente*/
var canvasObject = document.getElementById("areaDibujo");
canvasObject.addEventListener("mousemove",dibujarConMouse);

var leftClick = 1;
var clickMouse = {
  DOWN:0,
  UP:1
}

function dibujarConMouse(e){

  if (e.button==clickMouse.DOWN && e.buttons==leftClick){

    var xi = e.clientX;
    var yi = e.clientY;
    var xm = e.movementX;
    var ym = e.movementY;
    var xf = xi + xm;
    var yf = yi + ym;

    dibujarLinea("green",xi,yi,xf,yf,papel);

  }
}

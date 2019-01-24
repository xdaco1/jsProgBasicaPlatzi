var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
//var mapa = "tile.png";

var cantidad = aleatorio(1,2);

var fondo = {
    url:"tile.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOk: false
}

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

/*
var cerdo = new Image();
cerdo.srv = "cerdo.png";
cerdo.addEventListener("load",cargarCerdo);
var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load",cargarPollo);
*/

function dibujar (){
    if (fondo.cargaOk){
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOk){

        for(var v = 0; v < cantidad; v++){
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);

            papel.drawImage(vaca.imagen,x,y);
        }
        
    }
    
}

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOk = true;
    //dibujar();
}
/*
function dibujarVaca (){
    papel.drawImage(vaca,10,10);
}

function dibujarCerdo (){
    papel.drawImage(cerdo,10,300);
}

function dibujarPollo (){
    papel.drawImage(pollo,300,150);
}
*/

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max -min +1 )) + min;
    return resultado;
}

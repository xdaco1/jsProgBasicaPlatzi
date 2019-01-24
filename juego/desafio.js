/* Para preparar 

document.addEventListener("keyup",showKey);
function showKey(e){
    console.log(e);
}
*/

/********* Objects *********/
/***************************/
var campo = document.getElementById("villaPlatzi");
var lienzo = campo.getContext("2d");
document.addEventListener("keyup",moverVacaTeclado);
campo.addEventListener("mousemove",moverVacaMouse);

var fondo = {
    url:"tile.png",
    cargado: false,
    x: 0,
    y: 0
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",dibujar);

var vaca = {
    url: "vaca.png",
    cargado: false,
    x: aleatorio(0,420),
    y: aleatorio(0,420)
}
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",dibujaVaca);

var keyMove = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

/********* Functions *********/
/***************************/

function aleatorio(min,max){
    var resultado;

    resultado = Math.floor(Math.random() * (max - min + 1));

    return resultado;
}

function dibujar(){
    fondo.cargado = true;
    dibujaFondo();
    vaca.cargado = true;
    dibujaVaca();
}

function dibujaFondo(){
    if (fondo.cargado) {
        lienzo.drawImage(fondo.imagen,fondo.x,fondo.y);    
    }
}

function dibujaVaca(x,y){
    if (vaca.cargado) {
        x = vaca.x;
        y = vaca.y;
        lienzo.drawImage(vaca.imagen,vaca.x,vaca.y);
    }
}

function moverVacaTeclado(e){
    
    var lengthMove = 10;


    switch (e.keyCode) {
        case keyMove.UP:
            
            if (vaca.y >= 0) {
                
                vaca.y = vaca.y - lengthMove;    

            }
                
            break;

        case keyMove.DOWN:

            if (vaca.y <= 420) {
                
                vaca.y = vaca.y + lengthMove;

            }

            break;

        case keyMove.LEFT:
            
            if (vaca.x >= 0) {
            
                vaca.x = vaca.x - lengthMove;

            }
            
            break;

        case keyMove.RIGHT:

            if (vaca.x <= 420) {
                
                vaca.x = vaca.x + lengthMove;
            }

            break;
    }    
    

    dibujaFondo();
    dibujaVaca(vaca.x,vaca.y);
    
}

function moverVacaMouse (e){

    if (
        e.buttons == 1 && 
        e.clientX >= vaca.x && e.clientX <= vaca.x + 80 &&  e.clientX >= 20 && e.clientX <= 480 &&
        e.clientY >= vaca.y && e.clientY <= vaca.y + 80 &&  e.clientY >= 20 && e.clientY <= 480
    ) {

        var xMove = e.movementX;
        var yMove = e.movementY;

        vaca.x = vaca.x + xMove;
        vaca.y = vaca.y + yMove;

        dibujaFondo();
        dibujaVaca(vaca.x,vaca.y);
    }

}
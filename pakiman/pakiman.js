class Pakiman{
    constructor(n,v,a){
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre]
        
    }

    hablar(){
        alert(this.nombre);
    }

    mostrar(){
        document.body.appendChild(this.imagen);  
        document.write("<p>");  
        document.write("<strong>"+this.nombre+"</strong>");
        document.write("<br>Vida: "+this.vida);
        document.write("<br>Ataque")
        document.write("</p>");
    }
}
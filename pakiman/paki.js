var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png"

// var cauchin = new Pakiman("cauchin",100,30);
// var pokacho = new Pakiman("pokacho",80,50);
// var tocinauro = new Pakiman("tocinauro",120,40);

var coleccion = [];
coleccion.push(new Pakiman("cauchin",100,30));
coleccion.push(new Pakiman("pokacho",80,50));
coleccion.push(new Pakiman("tocinauro",120,40));

// coleccion[0].mostrar();
// coleccion[1].mostrar();
// coleccion[2].mostrar();

// for (var pakiman in coleccion){ //"in" para el uso del índice
//     coleccion[pakiman].mostrar();
// }

for (var pakiman of coleccion){ //"of" para el uso del objeto
    pakiman.mostrar();
}

// coleccion.forEach(element => { //función de flecha(?)
//     element.mostrar()
// });
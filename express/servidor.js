var express = require("express");
var app = express();

app.get("/",inicio);
app.get("/cursos",cursos);

function inicio(req,resp){
    resp.send("Este es el home")
}

function cursos(req,resp){
    resp.send("Estos son los cursos")
}

app.listen(8989)
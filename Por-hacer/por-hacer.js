const fs = require('fs');


let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) {
            throw new Error("Ha sucedido un error en la creacion del archivo", err);
        } else {
            console.log("Se ha creado Correctamente el archivo");
        }

    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false,
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const getListado = (estado) => {
    cargarDB();
    if (estado === false) {
        let aux = listadoPorHacer.filter((elemento) => elemento.completado === estado)
        console.log(aux);
        return aux;
    } else {
        let aux = listadoPorHacer.filter((elemento) => elemento.completado === estado)
        console.log(aux);
        return aux;
    }
}

const actualizar = (descripcion, completado = "true") => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((descripcionElemento) => descripcionElemento.descripcion === descripcion);
    if (index >= 0) {
        let aux = listadoPorHacer.filter((elemento) => elemento.descripcion !== descripcion);
        listadoPorHacer = aux;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//exportamos

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
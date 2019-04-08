let descripcion = {
    alias: 'd',

    desc: 'Descripcion de la tarea por hacer'
}

let completado = {
    alias: 'c',
    default: "true",
    desc: "Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
    .command("crear", "Crear tarea", {
        descripcion
    })
    .command("listar", " Listar tareas ", {
        descripcion,
        completado
    })
    .command("actualizar", "actualizar lista", {
        descripcion,
        completado
    })
    .command("borrar", "borrar tareas por hacer", {
        descripcion,
    })
    .help()
    .argv;

//exportamos
module.exports = {
    argv
}
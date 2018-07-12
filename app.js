'use strict'
let argv = require('./config/yargs').argv;
let tarea = require('./tareas/tareas');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea_ = tarea.crear(argv.descripcion);
    console.log(tarea_);
    break;
  case 'listar':
    console.log('==============LISTA DE TAREAS============'.green);
    let listado = tarea.getListado();
    for(let tarea of listado){
      console.log('==========tarea========='.green);
      console.log(tarea.descripcion);
      console.log('estado: ',tarea.completado);
      console.log('========================='.green);
    }
    break;
  case 'actualizar':
    let actualizado = tarea.actualizarEstado(argv.d,argv.c);
    console.log(actualizado);
    break;
  case 'borrar':
    try{
      let borrado = tarea.borrar(argv.descripcion);
      console.log(`borrado de la tarea: ${borrado}`);
    }catch{console.log('se produjo un error');}
  break;
  default:
    console.log('comando no reconocido');
}

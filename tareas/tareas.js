'use strict'

const fs = require('fs');

let listadoPorHacer = [];

const guardarBD = ()=>{
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('./BD.json',data,(err)=>{
    if(err) throw new Error('no se pudo grabar',err);
    console.log("tarea guardada!");
  })
}

const cargarBD = ()=>{
  try {
  listadoPorHacer = require('../BD.json');
  } catch (err) {
  listadoPorHacer = [];
  }
}

const getListado = ()=>{
  cargarBD();
  return listadoPorHacer;
}

const crear = (descripcion)=>{
    cargarBD();
    let tarea = {
      descripcion,
      completado:false
    }

    listadoPorHacer.push(tarea);
    guardarBD();
    return tarea;

}

const actualizarEstado =(descripcion,completado = true)=>{
  cargarBD();
  let index = listadoPorHacer.findIndex(tarea =>{
    return tarea.descripcion === descripcion;
  });
  if(index >=0){
    listadoPorHacer[index].completado = completado;
    guardarBD();
    return true;
  }else{return false;}
}

const borrar = (descripcion)=>{
  cargarBD();
  let index = listadoPorHacer.findIndex(tarea =>{
    return tarea.descripcion === descripcion;
  });
  if(index >=0){
    console.log('tarea: ',listadoPorHacer[index].descripcion);

    let nuevaLista = listadoPorHacer.filter((tarea) => {
      return tarea.descripcion !== descripcion;
    })
    if(listadoPorHacer.length === nuevaLista.length){
      return false;
    }else{
      listadoPorHacer = nuevaLista;
      guardarBD();
      return true;
    }
  }else{return false;}
}

module.exports ={
  crear,
  getListado,
  actualizarEstado,
  borrar
}

'use strict'

const argv = require('yargs')
.command('crear', 'crea una tarea nueva',{
  descripcion:{
    describe:'descripcion de la tarea por hacer',
    alias: 'd',
    demand: true
  }
})
.command('actualizar','actualiza el estado de una tarea',{
  descripcion:{
    describe:'muestra una descripcion de la tarea',
    alias: 'd'
  },
  completado:{
    default: true,
    alias: 'c',
    describe:'marca como completada/pendiente la tarea'
  }
})
.command('listar','muestra la lista de tarea',{})
.command('borrar','borrado de tarea',{
  descripcion:{
    describe:'descripcion de la tarea por hacer',
    alias: 'd',
    demand: true
  }
})
.help()
.argv;

module.exports = {
  argv
};

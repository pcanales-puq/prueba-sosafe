const utils = require('./utils/bisiesto');
let anio = 2004;
console.log('el año [' + anio + (utils.esBisiesto(anio)? '] es bisiesto' : '] no es bisiesto'));

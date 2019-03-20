function esBisiesto(anio)  
{ 
return (anio % 400) ? ((anio % 100) ? ((anio % 4) ? false : true) : false) : true; 
} 
exports.esBisiesto=esBisiesto;
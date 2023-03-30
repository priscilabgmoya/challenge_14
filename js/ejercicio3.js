/**
 * 3-  (Introducir un número y devolver el doble del mismo num)
 */

let numero_ingresado = parseInt(prompt('Ingrese un numero')); 

if(! isNaN(numero_ingresado)){
    document.write(`<h1>El doble de ${numero_ingresado} es: ${numero_ingresado*2}</h1>`);
}else{
    alert('Ingrese un numero valido');
}
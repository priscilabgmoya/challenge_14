/**
 * 4- Recibir el apellido del usuario y mostrar por consola la ultima letra
 */

let apellido = prompt('ingrese un apellido');
let posicion = apellido.length -1;
if(apellido !== null){
    console.log(`Ultima letra del apellido ingresado es: ${apellido[posicion]}`);
}else{
    console.log('Ingrese un apellido correcto'); 
}
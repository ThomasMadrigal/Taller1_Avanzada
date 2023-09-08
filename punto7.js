//Funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
let numeros = [11, -22, -3, -2, -4, 5, -6, 7, -8, 9, -10];
function numero_cercano_cero(numeros) {
    let numero_mas_cercano = numeros[0]
    for (let numero of numeros) {
      if (Math.abs(numero) < Math.abs(numero_mas_cercano)) {
        numero_mas_cercano = numero*-1;
      }
    }
    console.log('El numero mas cercano a 0 es: ',numero_mas_cercano)
  } 
numero_mas_cercano = numero_cercano_cero(numeros);

///////////////////////////////////////////////////////////////////////////////////////

//funcion flecha
let numero_cercano_cero = (numeros) =>{
    let numero_mas_cercano = numeros[0]
    for (let numero of numeros) {
      if (Math.abs(numero) < Math.abs(numero_mas_cercano)) {
        numero_mas_cercano = numero*-1;
      }
    }
    console.log('El numero mas cercano a 0 es: ',numero_mas_cercano)
  } 
numero_mas_cercano = numero_cercano_cero(numeros);


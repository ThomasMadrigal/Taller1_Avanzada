//Funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
let maximo = 100;
let minimo = 1;
let numero_mayor = -Infinity;
let edad_repetida = {};

for (let i = 0; i < 20; i++) {
  let edad_aletoria = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  console.log(edad_aletoria);  
  if (edad_aletoria > numero_mayor) {
    numero_mayor = edad_aletoria;
  }
  if (edad_repetida[edad_aletoria] === undefined) {
    edad_repetida[edad_aletoria] = 1;
  } else {
    edad_repetida[edad_aletoria]++;
  }
}
console.log("La edad mayor es:", numero_mayor);
console.log("Las Edades que se repiten son:");
for (let edad in edad_repetida) {
  if (edad_repetida[edad] > 1) {
    console.log( edad + " años: " + edad_repetida[edad] + " repeticiones");
  }
}

///////////////////////////////////////////////////////////////////////////////////////

//Funcion flecha

let aletoria = () =>{
    for (let i = 0; i < 20; i++){
    edad_aletoria = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  console.log(edad_aletoria);  
  if (edad_aletoria > numero_mayor) {
    numero_mayor = edad_aletoria;
  }
  if (edad_repetida[edad_aletoria] === undefined) {
    edad_repetida[edad_aletoria] = 1;
  } else {
    edad_repetida[edad_aletoria]++;
  }
}
console.log("La edad mayor es:", numero_mayor);
console.log("Las Edades que se repiten son:");
for (let edad in edad_repetida) {
  if (edad_repetida[edad] > 1) {
    console.log( edad + " años: " + edad_repetida[edad] + " repeticiones");
  }
}
}
aletoria()
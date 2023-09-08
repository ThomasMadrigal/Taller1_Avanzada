//funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
let planeta_uno_x= -46
let planeta_uno_y= 50
let planeta_dos_x= 65
let planeta_dos_y= -15

resta_de_cordenada_y = planeta_uno_y-planeta_dos_y
resta_de_cordenada_x = planeta_uno_x-planeta_dos_x

potencia_de_cordenada_x=Math.pow(resta_de_cordenada_x,2)
potencia_de_cordenada_y=Math.pow(resta_de_cordenada_y,2)

distacia_entre_planetas= Math.sqrt(potencia_de_cordenada_x + potencia_de_cordenada_y)
console.log("La distacia entre los planetas es de: "+ distacia_entre_planetas)

////////////////////////////////////////////////////////////////////////////////////////////////////

//funcion flecha
const calcularDistanciaEntrePlanetas = () => {
  
const resta_de_cordenada_y = planeta_uno_y - planeta_dos_y;
const resta_de_cordenada_x = planeta_uno_x - planeta_dos_x;

const potencia_de_cordenada_x = Math.pow(resta_de_cordenada_x, 2);
const potencia_de_cordenada_y = Math.pow(resta_de_cordenada_y, 2);

const distacia_entre_planetas = Math.sqrt(potencia_de_cordenada_x + potencia_de_cordenada_y);

console.log(`La distancia entre los planetas es de: ${distacia_entre_planetas}`);
   };
calcularDistanciaEntrePlanetas();
  
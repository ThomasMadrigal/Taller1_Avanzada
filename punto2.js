//funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
function nombre_piloto(clave){
return clave.split(':')[1]
}
console.log(nombre_piloto('ARQ2555:Sara Bel-Sun'))
console.log(nombre_piloto('ARQ2556:Nodin Chavdri'))
console.log(nombre_piloto('ARQ2557:finn'))

///////////////////////////////////////////////////////////////////////////////////////

//Funcion flecha
let nombre_piloto=(clave) => clave.split(":")[1]; 
console.log(nombre_piloto('ARQ2555:Sara Bel-Sun'))
console.log(nombre_piloto('ARQ2556:Nodin Chavdri'))
console.log(nombre_piloto('ARQ2557:finn'))

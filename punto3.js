//funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
let temperatura_max_dia_uno= 100
let temperatura_min_dia_uno= 80
let temperatura_max_dia_dos= 50
let temperatura_min_dia_dos= 25

temperatura_media_dia_uno = (temperatura_max_dia_uno+temperatura_min_dia_uno)/2
temperatura_media_dia_dos = (temperatura_max_dia_dos+temperatura_min_dia_dos)/2

console.log("La temperatura media del dia 1, es de: "+temperatura_media_dia_uno)
console.log("La temperatura media del dia 2, es de: "+temperatura_media_dia_dos)

///////////////////////////////////////////////////////////////////////////////////////

//funcion flecha
let temperatura_media = () =>{
temperatura_media_dia_uno = (temperatura_max_dia_uno+temperatura_min_dia_uno)/2
temperatura_media_dia_dos = (temperatura_max_dia_dos+temperatura_min_dia_dos)/2

console.log("La temperatura media del dia 1, es de: "+temperatura_media_dia_uno)
console.log("La temperatura media del dia 2, es de: "+temperatura_media_dia_dos)
}
temperatura_media();
//instalar libreria: --save readline-sync
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
const input = require ('readline-sync')

let salario=  3500000
let comision= 1500000
let impuestos = 0.05

//funcion tradicional
function calcular_salario(licencias){
licencias = parseFloat(input.question('Cuantas licencias vendio: '))
salario_total= salario+(comision*licencias)/impuestos
console.log(`el salario total del vendedor es de: `+salario_total)
}
calcular_salario()

///////////////////////////////////////////////////////////////////////////////////////

//funcion flecha
let calcular_salario=(licencias) =>{
licencias = parseFloat(input.question('Cuantas licencias vendio: '))
console.log(`el salario total del vendedor es de: `,salario_total= salario+(comision*licencias)/impuestos)
}
calcular_salario()

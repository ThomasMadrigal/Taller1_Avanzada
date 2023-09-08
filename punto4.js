//funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
let sable_uno = [3, 5, -3, -5, -9]
let sable_dos = [3, -5, -3, -5, -9]
let negativos_sable_uno =0, negativos_sable_dos=0

for ( i = 0; i < sable_uno.length; i++){
  if(sable_uno[i]<0){
    negativos_sable_uno++;
  }if(sable_dos[i]<0)
  negativos_sable_dos++;
}
console.log('la cantidad de sables negativos del sable uno, son: '+ negativos_sable_uno)
console.log('la cantidad de sables negativos del sable dos, son: '+ negativos_sable_dos)

///////////////////////////////////////////////////////////////////////////////////////

//Funcion flecha
let sables_negativos = () =>{
  for ( i = 0; i < sable_uno.length; i++){
    if(sable_uno[i]<0){
      negativos_sable_uno++;
    }if(sable_dos[i]<0)
    negativos_sable_dos++;
  }
  console.log('la cantidad de sables negativos del sable uno, son: '+ negativos_sable_uno)
  console.log('la cantidad de sables negativos del sable dos, son: '+ negativos_sable_dos)
}
sables_negativos();


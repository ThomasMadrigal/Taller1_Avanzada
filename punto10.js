//funcion tradicional
const alimentos =[]

function obtenerNombre() {
    const caracteresValidosPlanetas = 'abcedfghijklmnopqrstuvwxyz-123456/Hinokami'
    let nombreAlimento=''
    for(let i=0;i<6;i++){
        const nuevoCaracter = Math.floor(Math.random() * caracteresValidosPlanetas.length)
        nombreAlimento = nombreAlimento + caracteresValidosPlanetas.charAt(nuevoCaracter)
    }
    return nombreAlimento
}
function obtenerTipo  () {
    const tipos =['vegetal', 'animal', 'insecto']
    const i = Math.floor(Math.random() * 3) 
    return tipos[i]
}

function mostrarAlimentosNutritivos  (alimentos) {
   const alimentosFiltrados =[]
    alimentos.map((alimento)=>{
        alimento.nivelEnergia>200 && alimento.tipo=='vegetal'? alimentosFiltrados.push(alimento) : null
    })
    return alimentosFiltrados
}
function obtenerAlimentos () {
    for(let i=0; i<300; i++){
        const alimento ={
            nombre: obtenerNombre(),
            tipo: obtenerTipo(),
            nivelEnergia: Math.floor(Math.random() * (501 - 100))+100
        }
        alimentos.push(alimento)
    }
    setTimeout(()=>{
       let nivelEnergiaTotal=0
        mostrarAlimentosNutritivos(alimentos).map((AlimentoFiltrado)=>{
            nivelEnergiaTotal=nivelEnergiaTotal+AlimentoFiltrado.nivelEnergia
        })
       console.log(`El nivel de energia total que recibio Grogu fue de ${nivelEnergiaTotal}`);
    },5000)

}

///////////////////////////////////////////////////////////////////////////////////////

//funcion flecha
const obtenerNombre = () =>{
    const caracteresValidosPlanetas = 'abcedfghijklmnopqrstuvwxyz-123456/Hinokami'
    let nombreAlimento=''
    for(let i=0;i<6;i++){
        const nuevoCaracter = Math.floor(Math.random() * caracteresValidosPlanetas.length)
        nombreAlimento = nombreAlimento + caracteresValidosPlanetas.charAt(nuevoCaracter)
    }
    return nombreAlimento
}
const obtenerTipo = () =>{
    const tipos =['vegetal', 'animal', 'insecto']
    const i = Math.floor(Math.random() * 3) 
    return tipos[i]
}

const mostrarAlimentosNutritivos = (alimentos) =>{
   const alimentosFiltrados =[]
    alimentos.map((alimento)=>{
        alimento.nivelEnergia>200 && alimento.tipo=='vegetal'? alimentosFiltrados.push(alimento) : null
    })
    return alimentosFiltrados
}
const obtenerAlimentos =() =>{
    for(let i=0; i<300; i++){
        const alimento ={
            nombre: obtenerNombre(),
            tipo: obtenerTipo(),
            nivelEnergia: Math.floor(Math.random() * (501 - 100))+100
        }
        alimentos.push(alimento)
    }
    setTimeout(()=>{
       let nivelEnergiaTotal=0
        mostrarAlimentosNutritivos(alimentos).map((AlimentoFiltrado)=>{
            nivelEnergiaTotal=nivelEnergiaTotal+AlimentoFiltrado.nivelEnergia
        })
       console.log(`El nivel de energia total que recibio Grogu fue de ${nivelEnergiaTotal}`);
    },5000)
}
console.log()
obtenerAlimentos();


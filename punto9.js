
//funcion tradicional
//(para ejecutar la funcion flecha o la tradicional primero debes comentar una de las 2)
function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        let padawan={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}
crearPadawan("grogu","yodora" ,10,30,function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`el ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, vas a la clase de la fuerza`)
    }else{

        console.log(`el ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, vas a la clase manejo del sable de luz`)
    }
})



///////////////////////////////////////////////////////////////////////////////////////

//funcion flecha

let crearPadawan = (nombre,planeta,edad,estatura,clasificarPadawan) =>{
    setTimeout(function(){
        let padawan={
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}
crearPadawan("grogu","yodora" ,10,30,function(padawan){
    if(padawan.edadEstudiante<15){
        console.log(`el ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, vas a la clase de la fuerza`)
    }else{

        console.log(`el ${padawan.nombreEstudiante}, tienes ${padawan.edadEstudiante} años, vas a la clase manejo del sable de luz`)
    }
})



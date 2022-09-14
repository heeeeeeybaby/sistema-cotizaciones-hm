

//Inicia el Simulador 
const valorJornada = 80000;

// funcion prompt

let jornadas = parseInt(prompt("Ingrese un número del 1 al 5: Cuántas jornadas de grabación necesitas?")); 
let camaras = parseInt(prompt("Ingrese un número del 1 al 5: Cuántas cámaras necesitas?"));
let minutaje = parseInt(prompt("Ingrese un número del 1 al 5: De cuánto minutaje necesitas tu video?"));


if( (jornadas >= 1 && jornadas <=5) && (camaras >= 1 && camaras <=5) && (minutaje >= 1 && minutaje <=5)){
    // Hace correr el cálculo
    calcularJornada(jornadas, camaras, minutaje);
} else {
    alert("Has ingresado mal los datos, refresca la página"); 
}


// Proceso de Datos: Calcula variables por separado
function resultadoJornadas (jornadas) {
    let valorJornadas = jornadas * valorJornada;
	return valorJornadas;
}

function resultadoCamaras (camaras) {
    let valorCamaras = camaras * (valorJornada * 0.2); 
    return valorCamaras;
}

function resultadoMinutaje (minutaje){
    let valorMinutaje; 
    if(minutaje <= 1){
        valorMinutaje = minutaje * valorJornada; 
    }else if(minutaje > 1 && minutaje <= 3){
        valorMinutaje = minutaje * (valorJornada * 1.5);
    }else if(minutaje > 3 && minutaje <= 5){
        valorMinutaje = minutaje * (valorJornada * 2);
    }else if(minutaje > 5 && minutaje <= 7){
        valorMinutaje = minutaje * (valorJornada * 2.2);
    }else(valorMinutaje = minutaje *(valorJornada * (minutaje * 0.3)));
    return valorMinutaje; 
}

// Saca el total del servicio
function calcularJornada(jornadas, camaras, minutaje){

	let totalServicio = resultadoJornadas(jornadas) + resultadoCamaras(camaras) + resultadoMinutaje(minutaje) ;
    alert("Tu video tiene un valor de: CLP$" + totalServicio); 
}


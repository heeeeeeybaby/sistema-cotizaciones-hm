/***************** UX Funcionalidades ********************
 * 
 * {CHECK} Función Primaria: Crear un nuevo presupuesto para un nuevo cliente ingresando sus datos manualmente
 * 
 * Función Secundaria: Revisar y filtrar según criterios de búsqueda los presupuestos anteriores
 * 
 */

// Define Variables con Información del Usuario

let id = Math.ceil(Math.random() * 100); 
let nombre = prompt("Nombre del Cliente"); 
let rut = prompt("RUT o DNI del cliente (sin puntos ni guión)"); 
let empresa = prompt("Nombre de la empresa"); 
let email = prompt("e-mail de contacto"); 
let presupuesto; 

// Define una clase para la Información del Cliente
class Cotizante {
    constructor(id, nombre, rut, empresa, email, presupuesto){
        this.id = id,
        this.nombre = nombre, 
        this.rut = rut,
        this.empresa = empresa,
        this.email = email,
        this.presupuesto = presupuesto
    }
}

// Pasa la información ingresada por el usuario a la clase
const datosCliente = new Cotizante(id, nombre, rut, empresa, email, presupuesto); 

// Confirma que los datos hayan sido ingresados correctamente
let confirmacion = window.confirm(`PRESUPUESTO ID: ${datosCliente.id} | Revise si los datos están correctos: Nombre Cliente: ${datosCliente.nombre}, RUT: ${datosCliente.rut}, Empresa: ${datosCliente.empresa}, Email:${datosCliente.email}`);

if (confirmacion == true){
    alert("Perfecto!, Ahora agrega el detalle del servicio para calcular");
}else(alert("Recarga la página para volver a comenzar"));

// Inicia Etapa de Presupuesto
const valorJornada = 80000;

class Video{
    constructor(cantidad, jornada, camara, minutaje){
        this.cantidad = cantidad, 
        this.jornada = jornada, 
        this.camara = camara,
        this.minutaje = minutaje
    }
}

// Pide información al usuario para cotizar

let jornada = parseInt(prompt("Ingrese un número del 1 al 5: Cuántas jornadas de grabación necesitas?")); 
let camara = parseInt(prompt("Ingrese un número del 1 al 5: Cuántas cámaras necesitas?"));
let minutaje = parseInt(prompt("Ingrese un número del 1 al 5: De cuánto minutaje necesitas tu video?"));
let cantidad = parseInt(prompt("Ingrese un número del 1 al 5: Cuántos videos de ese minutaje necesita?")); 

if( (jornada >= 1 && jornada <=5) && (camara >= 1 && camara <=5) && (minutaje >= 1 && minutaje <=5) && (cantidad >=1 && cantidad <= 5)){
    // Hace correr el cálculo
    calcularJornada(jornada, camara, minutaje, cantidad);
} else {
    alert("Has ingresado mal los datos, refresca la página"); 
}

// Proceso de Datos: Calcula variables por separado
function resultadoJornadas (jornada) {
    let valorJornadas = jornada * valorJornada;
	return valorJornadas;
}

function resultadoCamaras (camara) {
    let valorCamaras = camara * (valorJornada * 0.2); 
    return valorCamaras;
}

function resultadoMinutaje (minutaje){
    let valorMinutaje = minutaje *(valorJornada * (minutaje * 0.3));
    return valorMinutaje; 
}

// Saca el total del servicio
function calcularJornada(jornada, camara, minutaje, cantidad){

	let totalServicio = (resultadoJornadas(jornada) + resultadoCamaras(camara) + resultadoMinutaje(minutaje)) * cantidad ;
    alert(`Para el presupuesto ID: ${datosCliente.id}, El Servicio tiene un valor de: CLP$ ${totalServicio} para ${cantidad} unidad(es)`); 
    datosCliente.presupuesto = totalServicio; 
    console.log(datosCliente);
}


// Editar Presupuestos 

const presupuestoEnviado_01 = new Cotizante(35, "María", 3444566, "Acme Ltda", "maria@acme.com", 1234444); 
const presupuestoEnviado_02 = new Cotizante(44, "Juan", 4543563, "Tom, the Cat", "juan@tom-the-cat.com", 3545434); 
const presupuestoEnviado_03 = new Cotizante(27, "Amy", 676887, "Madness SpA", "amy@madness.cl", 554654);

presupuestosEnviados =[]; 

presupuestosEnviados.push(presupuestoEnviado_01); 
presupuestosEnviados.push(presupuestoEnviado_02);
presupuestosEnviados.push(presupuestoEnviado_03);  
presupuestosEnviados.push(datosCliente);

const presupuestosEnviadosAll = presupuestosEnviados.map  (presupuesto => presupuesto.nombre); 


let verPresupuestos = window.confirm("Quieres revisar los presupuestos enviados?"); 
if(verPresupuestos == true){
    alert(`Los clientes a los que les has enviado presupuesto son los siguientes: ${presupuestosEnviadosAll}`);
}else{
    alert("Gracias por ingresar al cotizador, vuelve pronto!");
}

/***************** UX Funcionalidades ********************
 * 
 * Función Primaria: Crear un nuevo presupuesto para un nuevo cliente ingresando sus datos manualmente
 * 
 * Función Secundaria: Revisar y filtrar según criterios de búsqueda los presupuestos anteriores
 * 
 * Función Terciaria: Modificar datos de un cliente en específico en un presupuesto determinado
 * 
 */

// Inicia el Cotizador
let inicio = Number(prompt("Bienvenido al Sistema de Cotizaciones, Escriba 1, para Crear nuevo Presupuesto. 2, para Revisar presupuestos anteriores. 3, Para Modificar datos de un cliente"));



// Define Variables con Información del Usuario
let nombre = prompt("Nombre del Cliente");
let rut = prompt("RUT o DNI del cliente (sin puntos ni guión)");
let empresa = prompt("Nombre de la empresa"); 
let email = prompt("e-mail de contacto"); 

// Define una clase para la Información del Cliente
class Cotizante {
    constructor(nombre, rut, empresa, email){
        this.nombre = nombre, 
        this.rut = rut,
        this.empresa = empresa,
        this.email = email
    }
}

// Pasa la información ingresada por el usuario a la clase
const datosCliente = new Cotizante(nombre, rut, empresa, email); 

// Confirma que los datos hayan sido ingresados correctamente
let confirmacion = window.confirm("Revise si los datos están correctos: " + "Nombre Cliente: " + datosCliente.nombre + ", RUT: " + datosCliente.rut + ", Empresa: " + datosCliente.empresa + ", Email: " + datosCliente.email);

if (confirmacion == true){
    alert("Perfecto!, Ahora agrega el detalle del servicio para calcular");
}else(alert("Recarga la página para volver a comenzar"));

// Inicia Etapa de Presupuesto
class Video{
    constructor(cantidad, jornada, camara, minutaje){
        this.cantidad = cantidad, 
        this.jornada = jornada, 
        this.camara = camara,
        this.minutaje = minutaje
    }
}
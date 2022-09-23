// Define una clase para la Información del Cliente
class Cliente {
    constructor(id, nombre, rut, empresa, email, cantidad, jornada, camara, minutaje){
        this.id = id,
        this.nombre = nombre, 
        this.rut = rut,
        this.empresa = empresa,
        this.email = email,
        this.cantidad = cantidad, 
        this.jornada = jornada, 
        this.camara = camara,
        this.minutaje = minutaje
    }
}

let arrayClientes = []; 

// Define ell calculo de presupuesto

const valorJornada = 80000;

function calcularPresupuesto() {
    let presupuesto = ((Cliente.jornada * valorJornada) + (Cliente.camara * (valorJornada * 0.2)) + (Cliente.minutaje *(valorJornada * (Cliente.minutaje * 0.3)) * Cliente.cantidad)); 
    return presupuesto; 
} 

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{

    e.preventDefault();

    const id = Math.ceil(Math.random() * 100); 
    const nombre = document.getElementById("nombreCliente"); 
    const rut = document.getElementById("rutCliente"); 
    const empresa = document.getElementById("nombreEmpresa");
    const email = document.getElementById("emailCliente");
    const jornada = document.getElementById("cantJornadas"); 
    const camara = document.getElementById("cantCamaras");
    const minutaje = document.getElementById("minutaje");
    const cantidad = document.getElementById("cantVideos");
    const presupuesto = calcularPresupuesto(); 
    const cliente = new Cliente(id, nombre.value, rut.value, empresa.value, email.value, cantidad.value, jornada.value, camara.value, minutaje.value); 

    arrayClientes.push(cliente);
    console.log(arrayClientes);
    formulario.reset();

});



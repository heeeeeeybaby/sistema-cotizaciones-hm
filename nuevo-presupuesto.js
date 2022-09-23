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
    calcularPresupuesto() {
        return ((this.jornada * valorJornada) + (this.camara * (valorJornada * 0.2)) + (this.minutaje *(valorJornada * (this.minutaje * 0.3)) * this.cantidad)); 
    }
}

let arrayClientes = []; 

// Define una clase para el video que cotiza
const valorJornada = 80000;

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) =>{

    e.preventDefault();

    const id = Math.ceil(Math.random() * 100); 
    const nombre = document.getElementById("nombreCliente").value; 
    const rut = document.getElementById("rutCliente").value; 
    const empresa = document.getElementById("nombreEmpresa").value;
    const email = document.getElementById("emailCliente").value;
    const jornada = document.getElementById("cantJornadas").value; 
    const camara = document.getElementById("cantCamaras").value;
    const minutaje = document.getElementById("minutaje").value;
    const cantidad = document.getElementById("cantVideos").value;
    const presupuesto = cliente.calcularPresupuesto(); 
    const cliente = new Cliente(id, nombre, rut, empresa, email, cantidad, jornada, camara, minutaje, presupuesto); 

    console.log(presupuesto);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    formulario.reset();

    mostrarInfo(cliente); 
});

// Define Variables con Información del Usuario

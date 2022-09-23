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
    mostrarInfo(cliente); 

});

// Mostrar Info

const cardPresupuesto = document.getElementById("_cardsPresupuesto"); 
const mostrarInfo = (cliente) => {
    let aux =""; 
    aux += `<div class="col-lg-4 col-sm-6 col-10 mb-4">
            <div class="card">
                <div class="card-body bg-light">
                    <h5 class="card-title">Presupuesto ${cliente.id}</h5>
                    <p class="card-text text-secondary"><i class="bi bi-coin"></i>
                        CLP 400.000</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-muted"><i class="bi bi-person-fill"></i>
                    ${cliente.nombre}</li>
                    <li class="list-group-item text-info"><i class="bi bi-building"></i> ${cliente.empresa}</li>
                    <li class="list-group-item text-muted"> Enviado el 28 Sept 2022</li>                 
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-info btn-sm mb-2">Enviar Presupuesto</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm mb-2">Editar</button>
                </div>
            </div>
            </div>`
            cardPresupuesto.innerHTML = aux; 
}



// Define constantes globales

const valorJornada = 80000;

// Define una clase para la Información del Cliente

class Cliente {
    constructor(id, fecha, nombre, rut, empresa, email, resultado){
        this.id = id,
        this.fecha = fecha,
        this.nombre = nombre, 
        this.rut = rut,
        this.empresa = empresa,
        this.email = email,
        this.resultado = resultado
    }
}
let arrayClientes = []; 

class Presupuesto{
    constructor(cantidad, jornada, camara, minutaje){
        this.cantidad = cantidad, 
        this.jornada = jornada, 
        this.camara = camara,
        this.minutaje = minutaje
    }
    calcularPresupuesto() {
        let presupuesto = valorJornada * (this.jornada + this.camara * 0.2 + (this.minutaje * this.cantidad * 0.3)); 
        return presupuesto; 
    } 
}

// Procesa los datos del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{

    e.preventDefault();

    const id = Math.ceil(Math.random() * 1000); 
    const fecha = new Date().toLocaleDateString();
    const nombre = document.getElementById("nombreCliente"); 
    const rut = document.getElementById("rutCliente"); 
    const empresa = document.getElementById("nombreEmpresa");
    const email = document.getElementById("emailCliente");
    const jornada = Number(document.getElementById("cantJornadas")); 
    const camara = +document.getElementById("cantCamaras");
    const minutaje = Number(document.getElementById("minutaje"));
    const cantidad = +document.getElementById("cantVideos");

    const presupuesto = new Presupuesto(cantidad.value, jornada.value, camara.value, minutaje.value); 

    const resultado = typeof camara + typeof cantidad  + (cantidad + camara); 

    const cliente = new Cliente(id, fecha, nombre.value, rut.value, empresa.value, email.value, resultado); 

    arrayClientes.push(cliente);

    formulario.reset();

    arrayClientes.forEach(cliente => mostrarInfo(cliente));
    console.log(arrayClientes);

});

// Mostrar Info

const cardPresupuesto = document.getElementById("_cardsPresupuesto"); 

function mostrarInfo(cliente){
        let aux =""; 
        aux += `<div class="col-lg-4 col-sm-6 col-10 mb-4">
                <div class="card">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Presupuesto ${cliente.id}</h5>
                        <p class="card-text text-secondary">
                            <i class="bi bi-coin"></i>
                            CLP $${cliente.resultado}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-muted">
                            <i class="bi bi-person-fill"></i>
                            ${cliente.nombre}
                        </li>
                        <li class="list-group-item text-info">
                            <i class="bi bi-building"></i> 
                            ${cliente.empresa}
                        </li>
                        <li class="list-group-item text-muted"> 
                            Enviado el ${cliente.fecha}
                        </li>                 
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-info btn-sm mb-2">Enviar Presupuesto</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm mb-2">Editar</button>
                    </div>
                </div>
                </div>`
        cardPresupuesto.innerHTML = aux; 
    };

// Define constantes globales
const { dinero } = window.dinero.js;
const { CLP } = window['@dinero.js/currencies'];
const valorJornada = 80000;
const cardPresupuesto = document.getElementById("_cardsPresupuesto"); 
const onboarding = document.getElementById("_onboarding");


// Define una clase para la Información del Cliente

class Presupuesto{
    constructor(cantidad, jornada, camara, minutaje){
        this.cantidad = cantidad, 
        this.jornada = jornada, 
        this.camara = camara,
        this.minutaje = minutaje
    } 
}
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

function onboardingCheck(){
    if(arrayClientes.length >= 1){
        console.log("Estoy leyendo esto");
        onboarding.className = "d-none";
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
    const jornada = document.getElementById("cantJornadas"); 
    const camara = document.getElementById("cantCamaras");
    const minutaje = document.getElementById("minutaje");
    const cantidad = document.getElementById("cantVideos");

    const presupuesto = new Presupuesto(cantidad.value, jornada.value, camara.value, minutaje.value); 

    const resultado = valorJornada * (jornada.value + (camara.value * 0.2) + (minutaje.value * cantidad.value)); 

    const cliente = new Cliente(id, fecha, nombre.value, rut.value, empresa.value, email.value, resultado.toFixed(0)); 

    arrayClientes.push(cliente);


    //Agrego al localStorage
    localStorage.setItem("presupuestos", JSON.stringify(arrayClientes));
    //Limpio el form
    formulario.reset();
    onboardingCheck(); 
    mostrarInfo(arrayClientes);

    //console.log(arrayClientes);

});

// Mostrar Info

function mostrarInfo(clientes){
    onboardingCheck();
    cardPresupuesto.innerHTML = "";
    clientes.forEach( cliente => {
        const div = document.createElement("div"); 
        div.className = "col-lg-4 col-sm-6 col-10 mb-4"; 
        div.innerHTML = `<div class="card">
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
                            ${cliente.empresa} | RUT: ${cliente.rut}
                        </li>
                        <li class="list-group-item text-muted"> 
                            Enviado el ${cliente.fecha}
                        </li>                 
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-info btn-sm mb-2">Enviar Presupuesto</button>
                        <button type="button" class="btn btn-outline-secondary btn-sm mb-2">Editar</button>
                    </div>
                <div>`; 
        cardPresupuesto.appendChild(div);
    })
}

if(localStorage.getItem("presupuestos")){

    let presupuesto = JSON.parse(localStorage.getItem("presupuestos")); 
    console.log(presupuesto);
    
    for (let i = 0; i < presupuesto.length; i++){
        cardPresupuesto.innerHTML = "";
        arrayClientes.push(presupuesto[i]);
        mostrarInfo(arrayClientes);
    } 
}

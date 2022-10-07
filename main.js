// Define constantes globales

const arrayClientes = []; 
const arrayPresupuestos = []; 
const presupuestosCliente = []; 
const valorJornada = 80000;
const cardPresupuesto = document.getElementById("_cardsPresupuesto"); 
const listaClientes = document.getElementById("_listaClientes"); 
const onboarding = document.getElementsByClassName("onboarding");

//Verifica data

if(localStorage.getItem("presupuestos")){

    let localPresupuesto = JSON.parse(localStorage.getItem("presupuestos")); 
    console.log(localPresupuesto);
    
    for (let i = 0; i < localPresupuesto.length; i++){
        arrayPresupuestos.push(localPresupuesto[i]);
        mostrarInfo(arrayPresupuestos);
    } 

}

// Define una clase para la Información del Cliente

class Cliente {
    constructor(id, nombre, rut, empresa, direccion, email, presupuestosCliente){
        this.id =  id,
        this.nombre = nombre, 
        this.rut = rut,
        this.empresa = empresa,
        this.direccion = direccion, 
        this.email = email, 
        this.presupuestosCliente = presupuestosCliente
    }

    createId(){
        this.id = Math.ceil(Math.random() * 1000);
    }
}

class Presupuesto{

        constructor(id, fecha, proyecto, jornada, camara, minutaje, cantidad, resultado, idCliente){
            this.id = id,
            this.fecha = fecha,
            this.proyecto = proyecto, 
            this.jornada = jornada, 
            this.camara= camara, 
            this.minutaje = minutaje, 
            this.cantidad = cantidad, 
            this.resultado = resultado, 
            this.idCliente = idCliente
        }
        createId(){
            this.id = Math.ceil(Math.random() * 1000);
        }
}

    function onboardingCheck(){
        arrayClientes.length >= 1 && onboarding.className === "d-none";
    }
    function alertOk(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Presupuesto Creado',
            showConfirmButton: false,
            timer: 1500
        })
    }

      
// Procesa los datos del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{

    e.preventDefault();

// Clase CLIENTE
    const nombre = document.getElementById("nombreCliente"); 
    const rut = document.getElementById("rutCliente"); 
    const empresa = document.getElementById("nombreEmpresa");
    const direccion = document.getElementById("direccionCliente");
    const email = document.getElementById("emailCliente");

// clase PRESUPUESTO
    const fecha = new Date().toLocaleDateString();
    const proyecto = document.getElementById("nombreProyecto");
    const jornada = document.getElementById("cantJornadas"); 
    const camara = document.getElementById("cantCamaras");
    const minutaje = document.getElementById("minutaje");
    const cantidad = document.getElementById("cantVideos");

    const cliente = new Cliente(undefined, nombre.value, rut.value, empresa.value, direccion.value, email.value, presupuestosCliente);
    cliente.createId(); 
    arrayClientes.push(cliente);
    const idCliente = cliente.id; 
    const resultado = valorJornada * (jornada.value + (camara.value * 0.2) + (minutaje.value * cantidad.value));

    const presupuesto = new Presupuesto(undefined, fecha, proyecto.value, jornada.value, camara.value, minutaje.value, cantidad.value, resultado.toFixed(0), idCliente);

    presupuesto.createId(); 
    arrayPresupuestos.push(presupuesto); 
    presupuestosCliente.push(presupuesto.id);




 /*    function anexarPresupuesto(clientes, cliente){
        if(clientes.find(id === cliente.id)){
            cliente.presupuestosCliente.push(presupuesto);
        }else{
        cliente.presupuesto = []; 
        cliente.presupuestosCliente.push(presupuesto);
        }
    }
    anexarPresupuesto(arrayClientes, cliente);  */


    //Agrego al localStorage
    localStorage.setItem("clientes", JSON.stringify(arrayClientes));
    localStorage.setItem("presupuestos", JSON.stringify(arrayPresupuestos));
// Función: Que vaya a buscar el cliente con el ID que le pase por el presupuesto y guardarlo en una variable 

    //Limpio el form
    formulario.reset();
    alertOk(); 
    onboardingCheck(); 
    mostrarInfo(arrayPresupuestos);

});

// Mostrar Info

  function mostrarInfo(presupuestos){
    onboardingCheck();
    cardPresupuesto.innerHTML = "";
    presupuestos.forEach( presupuesto => {
        const div = document.createElement("div"); 
        div.className = "col-lg-4 col-sm-6 col-10 mb-4"; 
        div.innerHTML = `<div class="card">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Título</h5>
                        <p class="card-text text-secondary">
                            ID:${presupuesto.id}
                            <i class="bi bi-coin"></i>
                            CLP $${presupuesto.resultado}
                        </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-info">
                            <i class="bi bi-building"></i> 
                            Empresa
                        </li>
                        <li class="list-group-item text-muted">
                            <i class="bi bi-person-fill"></i>
                           Nombre Cliente
                        </li>

                        <li class="list-group-item text-muted"> 
                            Enviado el ${presupuesto.fecha}
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

// Listado Clientes

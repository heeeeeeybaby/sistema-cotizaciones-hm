// ***************** INITIAL SETUP *****************
// Define constantes globales

const arrayClientes = []; 
const arrayPresupuestos = []; 
const presupuestosCliente = []; 
const valorJornada = 80000;
const formularioClientes = document.getElementById("formularioCliente");
const formularioPresupuesto = document.getElementById("formularioPresupuestos");
const cardPresupuesto = document.getElementById("_cardsPresupuesto"); 
const listaClientes = document.getElementById("_listaClientes"); 
const onboarding = document.getElementsByClassName("onboarding");
const listado = document.getElementById("_listadoClientes"); 
const listadoClientes = "json/data.json"; 


//Verifica data en localStorage

if(localStorage.getItem("presupuestos")){

    let localPresupuesto = JSON.parse(localStorage.getItem("presupuestos")); 
    for (let i = 0; i < localPresupuesto.length; i++){
        arrayPresupuestos.push(localPresupuesto[i]);
    } 
    mostrarInfo(arrayPresupuestos);
}
// ***************** MAIN CLASSES *****************
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

class Presupuesto extends Cliente{
    constructor(id, fecha, proyecto, jornada, camara, minutaje, cantidad, resultado, idCliente){
        super(); 
        this.id = id,
        this.fecha = fecha,
        this.proyecto = proyecto, 
        this.jornada = jornada, 
        this.camara = camara, 
        this.minutaje = minutaje, 
        this.cantidad = cantidad, 
        this.resultado = resultado, 
        this.idCliente = idCliente
    }
    sumarTotal(){
        this.resultado = (valorJornada * (this.jornada + (this.camara * 0.2) + (this.minutaje * this.cantidad)));
    }
}
// ***************** UTILITY SHORT FUNCTIONS *****************

// Quita pantalla de onboarding cuando hay contenido
    function onboardingCheck(){
        arrayClientes.length >= 1 && onboarding.className === "d-none";
    }

// Muestra un alert al crear un nuevo presupuesto 
    function alertOk(mensaje){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        })
    }
// Muestra las cards con cada presupuesto en página de Presupuestos
    function mostrarInfo(presupuestos){
        onboardingCheck();
        cardPresupuesto.innerHTML = "";
        presupuestos.forEach( presupuesto => {
            const div = document.createElement("div"); 
            div.className = "col-lg-4 col-sm-6 col-10 mb-4"; 
            div.innerHTML = `<div class="card">
                        <div class="card-body bg-light">
                            <div class="row justify-content-between">
                                <div class="col-7 text-start">
                                    <h5 class="card-title">${presupuesto.proyecto}</h5>
                                    <span class="badge rounded-pill text-bg-success">Enviado el ${presupuesto.fecha}</span> 
                                </div>
                                <div class="col-5 text-end">
                                    <button type="button" class="btn btn-outline-dark"><i class="bi bi-pencil"></i></button>
                                    <div class="mt-2">
                                    <small class="card-text text-secondary">ID: ${presupuesto.id}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-muted">
                                <i class="bi bi-coin"></i>
                                Importe: $${presupuesto.resultado} CLP
                            </li>
                            <li class="list-group-item text-muted">
                                <i class="bi bi-person-fill"></i>
                                Nombre Cliente
                            </li>
                            <li class="list-group-item text-muted">
                                <div class="row">
                                    <div class="col-4">
                                        <i class="bi bi-bar-chart"></i> 8
                                    </div>
                                    <div class="col-4">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                </div>                 
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-info mb-2">Ver Presupuesto</button>
                        </div>
                    <div>`; 
            cardPresupuesto.appendChild(div);
        })
    } 

// ***************** CREAR PRESUPUESTO ***************** 
// Procesa los datos del formulario de la página de Presupuestos

formularioPresupuesto.addEventListener("submit", (e) =>{

    e.preventDefault();

// Clase CLIENTE
    const nombre = document.getElementById("nombreCliente"); 
    const rut = document.getElementById("rutCliente"); 
    const empresa = document.getElementById("nombreEmpresa");
    const direccion = document.getElementById("direccionCliente");
    const email = document.getElementById("emailCliente");

// clase PRESUPUESTO
    const fecha = new Date().toLocaleDateString();
    const proyecto = document.getElementById("nombreProyecto").value;
    const jornada = Number(document.getElementById("cantJornadas").value); 
    const camara = Number(document.getElementById("cantCamaras").value);
    const minutaje = Number(document.getElementById("minutaje").value);
    const cantidad = Number(document.getElementById("cantVideos").value);
    let resultado;

    const cliente = new Cliente(undefined, nombre.value, rut.value, empresa.value, direccion.value, email.value, presupuestosCliente);
    
    cliente.createId(); 
    arrayClientes.push(cliente);
    const idCliente = cliente.id; 

    const presupuesto = new Presupuesto(undefined, fecha, proyecto, jornada, camara, minutaje, cantidad, resultado, idCliente);

    presupuesto.createId(); 
    presupuesto.sumarTotal(); 
    arrayPresupuestos.push(presupuesto); 
    presupuestosCliente.push(presupuesto.id);

    //Agrego al localStorage
    localStorage.setItem("clientes", JSON.stringify(arrayClientes));
    localStorage.setItem("presupuestos", JSON.stringify(arrayPresupuestos));
// Función: Que vaya a buscar el cliente con el ID que le pase por el presupuesto y guardarlo en una variable 

    //Limpio el form
    formularioPresupuesto.reset();
    alertOk("Presupuesto Creado"); 
    onboardingCheck(); 
    mostrarInfo(arrayPresupuestos);

});

fetch(listadoClientes)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(cliente => {
            let contador = 1; 
            listado.innerHTML += `
            <tr>
                <th scope="row">${contador}</th>
                <td>${cliente.nombre}</td>
                <td>${cliente.empresa}</td>
                <td>${cliente.rut}</td>
                <td>${cliente.email}</td>
                <td>${cliente.presupuestos}</td>
            </tr>
            `   
            contador++;
        })
        .catch(error => console.error(error))
        .finally(() => console.log("Proceso Finalizado"));
    })

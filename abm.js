/**Formulario ABM**/
let formulario=document.getElementById('formABM');
let personasList=document.getElementById('personasList');
const tabla=document.getElementById('tablaInvent');
const modal=document.querySelector('#modal');
const inputs=document.querySelectorAll('input');
const btnCerrarModal=document.querySelector("#btn-cerrar-modal");

let count=0;


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Obtener los valores de los campos del formulario
    //let fotoProd=document.getElementById('foto-prod').value;
    //let nombreProd=document.getElementById('nombre-prod').value;
    //let detalleProd=document.getElementById('detalle-prod').value;
    //nuevo codigo
    let transaccion= new FormData(formulario);
    let llenarTabla=document.getElementById("tablaInvent");
    let nuevaFila=llenarTabla.insertRow(-1);
    let nuevaCelda=nuevaFila.insertCell(0);
    nuevaCelda.textContent=transaccion.get("foto-prod");
    nuevaCelda=nuevaFila.insertCell(1);
    nuevaCelda.textContent=transaccion.get("nombre-prod");
    nuevaCelda=nuevaFila.insertCell(2);
    nuevaCelda.textContent=transaccion.get("detalle-prod");
    let nuevaCeldaEliminar=nuevaFila.insertCell(3);
    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";
    nuevaCeldaEliminar.appendChild(botonEliminar);
    botonEliminar.addEventListener("click", (event)=>{
        event.target.parentNode.parentNode.remove();
    });
    //boton editar
    let nuevaCeldaEditar=nuevaFila.insertCell(4);
    let botonEditar=document.createElement("button");
    botonEditar.textContent="Editar";
    botonEditar.className="btn-editar";
    nuevaCeldaEditar.appendChild(botonEditar);
    //botonEditar.addEventListener("click", (event)=>{
     //   event.target.parentNode.cambiarContenido();
     botonEditar.addEventListener("click", ()=>{
        modal.showModal();
    });
    btnCerrarModal.addEventListener("click", ()=>{
        modal.closest();
    });
    let celdaActualizarDatos=nuevaFila.insertCell(5);
    let botonActualizar=document.createElement("button");
    botonActualizar.textContent="Actualizar";
    botonActualizar.className="btn-actualizar";
    celdaActualizarDatos.appendChild(botonActualizar);
    
    //al accionar botón actualizar

    function pregunta_Validar_Campos(){
    let obtenerDato=document.getElementsByTagName("td");
    let datoTd1=obtenerDato[0].innerHTML;
    let datoTd2=obtenerDato[1].innerHTML;
    let datoTd3=obtenerDato[2].innerHTML;
        var aArray= [datoTd1, datoTd2, datoTd3];
        
         var table = document.getElementById("tablaInvent");
          var rowCount = table.rows.length;
        
        
         // Recorremos todas las filas y columnas de la tabla con el objetivo de recuperar y validar todos los campos introducidos en la tabla 
                 for (var i = 0; i < rowCount-1; i++) {
                    for (var j= 0; j < aArray.length; j++) {
                        
            document.write(aArray[j]);  // aqui solo testea los valores recibidos llegando solo los campos de la primera fila
                                                              }
                if (confirm('Los datos serán guardados en la Base de Datos. ¿Estás seguro de realizar esta acción?'))
               {document.Actualizar.submit() } 
                                           } 
                                        }
    
    botonActualizar.addEventListener("click", ()=>{
        pregunta_Validar_Campos();
        
    })
    
    formulario.reset();

});


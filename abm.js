/**Formulario ABM**/
let formulario=document.getElementById('formABM');
let personasList=document.getElementById('personasList');
const tabla=document.getElementById('tablaInvent');
const modal=document.querySelector('#modal');
const inputs=document.querySelectorAll('input');
const btnCerrarModal=document.querySelector("#btn-cerrar-modal");
let count=0;
//crear al botón guardar del modal, la funcionionalidad para que edite
const btnGuardarModal=document.querySelector("#button-save");
let formuModal=document.getElementById('formModal');


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
    let seleccionarProduc=document.createElement("input");
    seleccionarProduc.type="checkbox";
    seleccionarProduc.name="checkbox";
    nuevaCelda.appendChild(seleccionarProduc);
    
    nuevaCelda=nuevaFila.insertCell(1);
    nuevaCelda.setAttribute("id", "celdaImagen");
    let imagen=document.getElementById('imgForm').src;
    
    //nuevaCelda.textContent=transaccion.get("foto-prod");
    
    nuevaCelda.insertAdjacentHTML(
        "beforeend",
        `<img width="50px" heigth="50px"src=${imagen} alt=${imagen}>` // Backticks para img variable
      );
    
    /*const imagen = "imagen.png" //Img en variable para enviar lo que desees
    const contenedor = document.getElementById("imgContainer");
    contenedor.insertAdjacentHTML(
      "beforeend",
      `<img src=${imagen} alt=${imagen}>` // Backticks para img variable
    );*/

    nuevaCelda=nuevaFila.insertCell(2);
    nuevaCelda.setAttribute("id", "celdaNombre");
    nuevaCelda.textContent=transaccion.get("nombre-prod");
    nuevaCelda=nuevaFila.insertCell(3);
    nuevaCelda.setAttribute("id", "celdaDetalle");
    nuevaCelda.textContent=transaccion.get("detalle-prod");
    let nuevaCeldaEliminar=nuevaFila.insertCell(4);
    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";
    nuevaCeldaEliminar.appendChild(botonEliminar);
    botonEliminar.addEventListener("click", (event)=>{
        event.target.parentNode.parentNode.remove();
    });
    //boton editar
    let nuevaCeldaEditar=nuevaFila.insertCell(5);
    let botonEditar=document.createElement("button");
    botonEditar.textContent="Editar";
    botonEditar.className="btn-editar";
    nuevaCeldaEditar.appendChild(botonEditar);
    //botonEditar.addEventListener("click", (event)=>{
     //   event.target.parentNode.cambiarContenido();
     botonEditar.addEventListener("click", ()=>{
        modal.showModal();
    });
    //btnCerrarModal.addEventListener("click", ()=>{
    //    modal.closest();
    //});
    let celdaActualizarDatos=nuevaFila.insertCell(6);
    let botonActualizar=document.createElement("button");
    botonActualizar.textContent="Actualizar";
    botonActualizar.className="btn-actualizar";
    celdaActualizarDatos.appendChild(botonActualizar);
    
    //al accionar botón actualizar

    function pregunta_Validar_Campos(){
    let obtenerDato=document.getElementsByTagName("td");
    //let datoTd1=obtenerDato[0].innerHTML;
    let datoTd2=obtenerDato[1].innerHTML;
    let datoTd3=obtenerDato[2].innerHTML;
    let datoTd4=obtenerDato[3].innerHTML;
        var aArray= [datoTd2, datoTd3, datoTd4];
        
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
    let botonEliminarChequeado=document.getElementById("deleteAll");
    botonEliminarChequeado.addEventListener('click', ()=>{
        let checkboxs= document.getElementsByName("checkbox");
        checkboxs.forEach((v)=>{
            if(v.checked){
                v.parentElement.parentElement.remove();
            }
        })
    })


    formulario.reset();

});

//Previsualización de la imagen al cargarla en el formulario
document.getElementById('foto-prod').addEventListener('change',function(event){
    let archivoImagen= event.target.files[0];
    let reader = new FileReader();

    reader.onload = ()=>{
        let dataUrl =reader.result;
        let divImagen=document.getElementById('imgPre');
        divImagen.innerHTML='<img id="imgForm" width="100px" heigth="100px" src="' +dataUrl+ '" alt="imagen">';
    };
    reader.readAsDataURL(archivoImagen);
});


formuModal.addEventListener('submit', function(e){
    e.preventDefault();
    let operacion= new FormData(formuModal);
    let editarTabla=document.getElementById("tablaInvent");
    //primer celda=> id: celdaImagen
    //segunda celda=> id: celdaNombre
    let celda_imagen=document.getElementById('celdaImagen');
    celda_imagen.textContent=operacion.get("fotoProd");
    let celda_nombre=document.getElementById('celdaNombre');
    celda_nombre.textContent=operacion.get('nombreProd');
    let celda_detalle= document.getElementById('celdaDetalle');
    celda_detalle.textContent=operacion.get('detalleProd');
    

});

function cerrarVentana(){
    //la referencia de la ventana es el objeto window del popup. Lo utilizo para acceder al método close
    modal.close()
}

/**Formulario ABM**/
let formulario=document.getElementById('formABM');
let personasList=document.getElementById('personasList');


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



    //crear un li con los datos

    //let listItem= document.createElement('li');
    
    //listItem.innerHTML=fotoProd+' '+nombreProd+' '+detalleProd;
    
    //Agregar el elemento de la lista a la lista de personas
    //personasList.appendChild(listItem);
    
    formulario.reset();

});
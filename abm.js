/**Formulario ABM**/
let formulario=document.getElementById('formABM');
let personasList=document.getElementById('personasList');


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Obtener los valores de los campos del formulario
    let fotoProd=document.getElementById('foto-prod').value;
    let nombreProd=document.getElementById('nombre-prod').value;
    let detalleProd=document.getElementById('detalle-prod').value;

    //crear un li con los datos

    let listItem= document.createElement('li');
    
    listItem.innerHTML=fotoProd+' '+nombreProd+' '+detalleProd;
    
    //Agregar el elemento de la lista a la lista de personas
    personasList.appendChild(listItem);
    
    formulario.reset();

});
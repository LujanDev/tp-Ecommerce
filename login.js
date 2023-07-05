var usuario={
    nombre: 'yanina',
    contraseña: '12345'
}
let btnLogIn=document.getElementById('login');
btnLogIn.addEventListener("click", function(e){
    e.preventDefault();
    validarCampos();
});
function validarCampos(){
    let nombre= document.getElementById('user').value;
    let contraseña=document.getElementById('password').value;
    if(usuario.nombre.toLowerCase()===nombre&&usuario.contraseña===contraseña){
        console.log('Ingresó a inventario');
        window.location.href='abm.html';
    }else{
        console.log('No entra al sistema de inventarios');
        document.getElementById('msjError').innerHTML='Usuario y/o contraseña incorrectos';

    }
}
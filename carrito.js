/**carrito**/
const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

const carInfo=document.querySelector('.cart-product');
const rowProduct=document.querySelector('.row-product');

//Lista: productos en los divs
const listaProductos=document.querySelector('.container-products');

let allProducts=[];

const valorTotal=document.querySelector('.total-pagar');
const contadorProductos=document.querySelector('#contador-productos');


listaProductos.addEventListener('click', e=>{

    if(e.target.classList.contains('btn-añadir-cart')){
        const product=e.target.parentElement;
       // console.log(product.querySelector('h3').textContent)
       //crear un objeto
       const infoProduct={
        cantidad:1,
        titulo:product.querySelector('h3').textContent,
        precio:product.querySelector('p').textContent,
       }
       const existeProducto= allProducts.some(product=>product.titulo===infoProduct.titulo)
       if(existeProducto){
        const productos=allProducts.map(product=>{
            if(product.titulo===infoProduct.titulo){
                product.cantidad++;
                return product;
            }else{
                return product;
            }
        })
        allProducts=[...productos];}else{
            allProducts=[...allProducts, infoProduct];

        }

       mostrarLista();
    }
    })

rowProduct.addEventListener('click', (e=>{
    console.log(e.target.classList.contains('close'));
    if(e.target.classList.contains('close')){
        const product= e.target.parentElement;
        const titulo=product.querySelector('p').textContent;

        allProducts= allProducts.filter(product=> product.titulo !== titulo);
        mostrarLista();
    }
}))




//funcion para mostrar la lista del carrito
const mostrarLista= ()=>{
    rowProduct.innerHTML='';
    var totalDinero=0;
    var totalProductos=0;

    allProducts.forEach(product =>{
        const filaProducto=document.createElement('div');
        filaProducto.classList.add('cart-product');
        filaProducto.innerHTML=`
                     <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">${product.cantidad}</span>
                        <p class="titulo-producto-carrito">${product.titulo}</p>
                        <span class="precio-producto-carrito">${product.precio}</span>
                    </div>
                     <div class="close">
                     <i class="fa-solid fa-xmark"></i>
                     </div>
        
        `
        rowProduct.append(filaProducto);
        totalDinero= totalDinero+ parseInt(product.cantidad*product.precio.slice(1));
        totalProductos= totalProductos + product.cantidad;
    })
    
    valorTotal.innerText=`$${totalDinero}`;
    contadorProductos.innerText=totalProductos;


}



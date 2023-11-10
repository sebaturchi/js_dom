let contenedorCards = document.getElementById('instrumentosCards');
let botones = document.getElementsByClassName('compra');
let carrito = [];
let totalDom = document.getElementById('total');

function renderizarCards(listaProductos){
    for (const producto of listaProductos){
        contenedorCards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top zoomProducto" src= ${producto.foto} alt="...">
            <div class="card-body">
                <h4 class="card-title"> ${producto.modelo}</h5>
                <h5 class="card-title"> ${producto.marca}</h5>
                <p class="card-text"> $${producto.precio}</p>
                <button id=${producto.id} class="btn btn-primary compra">Comprar</button>
            </div>
        </div>
        `;
    }

    for (const boton of botones){
        boton.addEventListener('click', () => {
            const prodACarrito = listaProductos.find(prod => prod.id == boton.id);
            agregarAlCarrito(prodACarrito);
        });
    }
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    let totalActual = calcularTotal();
    totalDom.innerText = 'Total a pagar: $' + totalActual;
}

function calcularTotal(){
    let total = 0;
    for (const item of carrito){
        total += item.precio;
    }
    return total;
}

renderizarCards(guitarras);


const selectorMarcasFormulario = document.getElementById('marcasForm');

selectorMarcasFormulario.addEventListener('click', () => {
    if (selectorMarcasFormulario == 'Gibson'){
        selectorMarcasFormulario.style.color = 'red';
    }else if (selectorMarcasFormulario == 'Fender'){
        selectorMarcasFormulario.style.color = 'blue';
    }else if (selectorMarcasFormulario == 'Epiphone'){
        selectorMarcasFormulario.style.color = 'green';
    }else {selectorMarcasFormulario.style.color = 'violet'}

})



const cambiaFondoFooter = document.getElementById('pie')

cambiaFondoFooter.onmouseover = () => {
    cambiaFondoFooter.style.backgroundColor = 'red';
}

cambiaFondoFooter.onmouseout = () => {
    cambiaFondoFooter.style.backgroundColor = 'white';
}
const contenedor=document.querySelector(`#container`)

fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        // Aquí manipulas tus datos como lo haces actualmente con `productos`
        mostrarProductos(data);
    })
    .catch(error => console.error('Error al cargar datos desde JSON:', error));

function mostrarProductos(productos) {
    const contenedor = document.querySelector('#container');

    // Limpiamos el contenedor antes de agregar nuevos productos
    contenedor.innerHTML = '';

    // Recorremos los productos y los agregamos al contenedor
    productos.forEach(producto => {
        const cardProducto = document.createElement('article');
        cardProducto.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div>
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button id="${producto.id}" class="btn-compra">Comprar</button>
            </div>
        `;
        contenedor.appendChild(cardProducto);
    });
}

const mostrarProductos=(data)=> {
    data.forEach(producto =>{
        const cardProducto=document.createElement(`article`)
        cardProducto.setAttribute(`id`,`tarjeta-producto`)
        cardProducto.innerHTML= `
                                <img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}" style="width: 300px "
                                <div class="prod-description">
                                    <h5 class="ropa-nombre">${producto?.nombre}</h5>
                                    <button id="${producto.id}" class="btn-compra">comprar</button>
                                </div>
`;
        contenedor.appendChild(cardProducto);
    })
    const btnComprar = document.querySelectorAll(`.btn-compra`)
    btnComprar.forEach(el=>{
        el.addEventListener(`click`,(e)=>
        agregarAlCarrito(e.target.id)
        )
    })
}
mostrarProductos(productos);
const carrito=[]
function agregarAlCarrito(id){
    const existe= carrito.some(prod=>prod.id===parseInt(id))
    if (existe){
//modificar la cantidad de producto
    } else {
        let productoEncontrado =productos.find(prod=> prod.id ===parseInt(id));
        carrito.push(productoEncontrado)
    }
   
    console.log(carrito)
}
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementsByName('nombre')[0].value;
    var numero = document.getElementsByName('numero')[0].value;
    var comentario = document.getElementsByName('comentario')[0].value;

    var formData = {
        nombre: nombre,
        numero: numero,
        comentario: comentario
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
});
document.addEventListener('DOMContentLoaded', function() {
    var formDataString = localStorage.getItem('formData');
    if (formDataString) {
        var formData = JSON.parse(formDataString);
        console.log(formData);
    }
});

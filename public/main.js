const contenedor=document.querySelector(`#container`)

 const verProductos = () =>{
 fetch('productos.json')
    .then((response) => response.json())
    .then(informacion => {
        let acumulador = ``;
        informacion.forEach((productos)=>{
        console.log(productos)
        acumulador += `<div class="card">
            <img src="${productos.img}">
            <h2>${productos.nombre}<h2>
            <h2>$${productos.precio}<h2>
            <button id="${productos.id}" class="btn-compra">Comprar</button>
            </div>`
        })
        document.getElementById(`container`).innerHTML=acumulador;
        const btnComprar = document.querySelectorAll(`.btn-compra`)
        btnComprar.forEach(el=>{
            el.addEventListener(`click`,(e)=>
            agregarAlCarrito(e.target.id)
            )
        })
        })    
}
verProductos()
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

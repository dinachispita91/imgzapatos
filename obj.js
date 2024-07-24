

// Dentro de un formulario, será necesario incluir
// todos los inputs necesarios para poder introducir
//   los datos de un nuevo producto. La imagen será introducida
//  con su ruta a través de un input de tipo texto.


//llame a el formulario cree la variable 'nuevoproductro '....
console.log('funciona');
let nuevoProducto = document.getElementById('formulario-principal')
console.log(nuevoProducto);
nuevoProducto.onsubmit = addProduct
// =================================================
// onSubmit () le permite interceptar la información 
// de la transacción autorizada antes de que el
//  formulario realice un POST en la URL definida 
//  en kr-post-success-url.
// =====================================================
let producto =[]

function addProduct(ev) {
    ev.preventDefault()
    console.log('funcion agregar producto');
    let nombre= document.getElementById('nombre').value
    console.log(nombre);

    let precio= document.getElementById('precio').value
    console.log(precio);

    let imagen= document.getElementById('imagen').value
    console.log(imagen);
    
    let descripcion = document.getElementById('descripcion').value
    console.log(descripcion);

    producto.push({nombre,precio,imagen,descripcion})
    console.log(producto);
    mostrarProducto(producto)
    sumar(producto)
}
// ===============================================
// llame a los apatados de el formulario y los meti en ua array
// con un objeto.
let tusProductos = document.getElementById('cajon')
console.log(tusProductos);
function mostrarProducto(miarray) {
    let mostrar =``
    for (let i = 0; i < miarray.length; i++) {
        console.log(i);
        
        let imagen =`<div id="producto"><div><img src="${miarray[i].imagen}" alt="tacon de salon
negro de charol " /></div>`

let descripcion=`<div>
<h2> ${miarray[i].nombre}</h2>
<p>${miarray[i].descripcion}

</p>
</div>`
let precio =  ` <div id="aliminarproducto">
        <h2>precio ${miarray[i].precio} euros</h2>
        <button class="eliminarProducto">eliminar</button>
      </div></div>`

mostrar = mostrar +imagen +descripcion+ precio

}
tusProductos.innerHTML= mostrar
    
}

function sumar(sumAarray) {
    total = 0
    for (let i = 0; i < sumAarray.length; i++) {
        total = parseFloat(total) + parseFloat(sumAarray[i].precio)
            console.log(total);

        }
    let header = document.getElementById('precio-total')
    console.log(header);
}




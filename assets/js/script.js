let asignarEventos = () => {
    let btnCalcular = document.getElementById('btnCalcular');
    btnCalcular.addEventListener('click', integracion);
}

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito {
    constructor(productos, valorFinalAPagar) {
        this.productos = productos;
        this.valorFinalAPagar = valorFinalAPagar;
    }

    agregarProductos(unProducto) {
        this.productos.push(unProducto);
    }

    calcularTotalCompra() {
        let total = 0;
        for (const producto of this.productos) {
            let precioParcial = producto.precio * producto.cantidad; 
            total += precioParcial; 
        }
        this.valorFinalAPagar = total; 
        return total; // Devolver el total calculado
    }

    finalizarCompra() {
        let elTxtValorFinalAPagar = document.getElementById('txtValorFinalAPagar');
        elTxtValorFinalAPagar.innerText = this.valorFinalAPagar; // Mostrar total en el DOM
    }

    mostrarDetallesCompra() {
        let mensaje = '';
        let elPrfDetallesCompra = document.getElementById('prfDetallesCompra');
        for (const producto of this.productos) {
            if (producto.cantidad > 0) {
                mensaje += `Producto: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad} <br>`; 
            }
        }
        elPrfDetallesCompra.innerHTML = mensaje; // Mostrar detalles en el DOM
    }
}

let atraparDatos = () => {
    let objCarrito = new Carrito([], 0); // Crear un objeto carrito con arreglo de productos vacío y valor final a pagar 0 

    let valorMandarinas = 800;
    let cantidadMandarinas = Number(document.getElementById('txtMandarinas').value);
    if (cantidadMandarinas > 0) { 
        let objMandarina = new Producto('Mandarinas', valorMandarinas, cantidadMandarinas);
        objCarrito.agregarProductos(objMandarina);
    }

    let valorCaramelos = 1500;
    let cantidadCaramelos = Number(document.getElementById('txtCaramelos').value);
    if (cantidadCaramelos > 0) {
        let objCara = new Producto('Caramelos', valorCaramelos, cantidadCaramelos);
        objCarrito.agregarProductos(objCara);
    }

    let valorUva = 1690;
    let cantidadUva = Number(document.getElementById('txtUva').value);
    if (cantidadUva > 0) {
        let objUva = new Producto('Uvas', valorUva, cantidadUva);
        objCarrito.agregarProductos(objUva);
    }

    let valorSandia = 4650;
    let cantidadSandia = Number(document.getElementById('txtSandia').value);
    if (cantidadSandia > 0) {
        let objSandia = new Producto('Sandía', valorSandia, cantidadSandia);
        objCarrito.agregarProductos(objSandia);
    }

    let valorTomate = 2000;
    let cantidadTomate = Number(document.getElementById('txtTomate').value);
    if (cantidadTomate > 0) {
        let objTomate = new Producto('Tomate', valorTomate, cantidadTomate);
        objCarrito.agregarProductos(objTomate);
    }

    let valorAvellana = 2000;
    let cantidadAvellana = Number(document.getElementById('txtAvellana').value);
    if (cantidadAvellana > 0) {
        let objAvellana = new Producto('Avellanas', valorAvellana, cantidadAvellana);
        objCarrito.agregarProductos(objAvellana);
    }

    objCarrito.calcularTotalCompra(); // Calcular el total
    objCarrito.finalizarCompra(); 
    return objCarrito; 
}

let integracion = () => {
    let elCarritoDeCompras = atraparDatos(); // Atrapar datos y crear carrito
    console.log(elCarritoDeCompras); // Mostrar carrito en consola
    elCarritoDeCompras.mostrarDetallesCompra(); // Mostrar detalles
}
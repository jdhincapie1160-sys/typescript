interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
}

function gestionarCarrito(): void {
    let carrito: Producto[] = [];

    function agregarProducto(nombre: string, precio: number, cantidad: number): void {
        let producto: Producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        carrito.push(producto);
        console.log(nombre + " agregado al carrito.");
    }

    console.log("\n--- Módulo: Carrito de Compras ---");
    agregarProducto("Camisa", 25, 2);
    agregarProducto("Pantalón", 40, 1);
    agregarProducto("Zapatos", 60, 1);

    let totalPagar: number = 0;
    console.log("\n--- Recibo de Compra ---");
    
    for (let item of carrito) {
        let subtotal: number = item.precio * item.cantidad;
        console.log(item.nombre + " x " + item.cantidad + " = $" + subtotal);
        totalPagar += subtotal;
    }

    console.log("Total final a pagar: $" + totalPagar);
}
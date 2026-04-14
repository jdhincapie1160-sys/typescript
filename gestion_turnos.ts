function gestionarTurnos(): void {
    // Tipamos el arreglo como un arreglo de textos
    let fila: string[] = ["Cliente 1", "Cliente 2", "Cliente 3"];

    // Tipamos el parámetro 'nombre'
    function nuevoTurno(nombre: string): void {
        fila.push(nombre);
        console.log(nombre + " ha tomado un turno. Posición: " + fila.length);
    }

    function atenderCliente(): void {
        if (fila.length > 0) {
            let clienteAtendido = fila.shift(); // Saca al primero de la fila
            console.log("Atendiendo a: " + clienteAtendido);
            console.log("Clientes restantes en espera: " + fila.length);
        } else {
            console.log("No hay más clientes en la fila.");
        }
    }

    // Simulación
    console.log("\n--- Módulo: Gestión de Turnos ---");
    nuevoTurno("Cliente 4");
    atenderCliente(); // Atiende al 1
    atenderCliente(); // Atiende al 2
    console.log("Fila actualizada:", fila);
}

export { gestionarTurnos };
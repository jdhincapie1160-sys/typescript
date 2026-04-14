let saldo = 1000; // Saldo inicial
let opcion = 0;

// Simulación de menú (puedes cambiar 'opcion' para probar cada caso)
opcion = 1; // 1: Consulta, 2: Retiro, 3: Transferencia

switch (opcion) {
    case 1:
        console.log("Su saldo actual es: $" + saldo);
        break;
    case 2:
        let retiro = 200;
        if (retiro <= saldo) {
            saldo -= retiro;
            console.log("Retiro exitoso. Nuevo saldo: $" + saldo);
        } else {
            console.log("Fondos insuficientes.");
        }
        break;
    case 3:
        let transferencia = 300;
        let cuentaDestino = "12345678";
        if (transferencia <= saldo) {
            saldo -= transferencia;
            console.log("Transferencia de $" + transferencia + " enviada a la cuenta " + cuentaDestino);
            console.log("Saldo restante: $" + saldo);
        } else {
            console.log("Saldo insuficiente para transferir.");
        }
        break;
    default:
        console.log("Opción no válida.");
}
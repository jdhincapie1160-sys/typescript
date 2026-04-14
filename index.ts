// Importamos todas las funciones de tus módulos
import { gestionarReservaHotel } from './reserva_hotel.js';
import { gestionarBoletasEstadio } from './boletas_estadio.js';
import { gestionarCarrito } from './carrito_compras.js';
import { gestionarTurnos } from './gestion_turnos.js';

console.log("=========================================================");
console.log("               SISTEMAS MÚLTIPLES - TALLER 3 TS");
console.log("=========================================================\n");

// 1. Hotel
console.log(">> Iniciando Módulo: Reserva de Hotel...");
gestionarReservaHotel();
console.log("\n---------------------------------------------------------\n");

// 2. Boletas
console.log(">> Iniciando Módulo: Gestión de Boletas...");
gestionarBoletasEstadio();
console.log("\n---------------------------------------------------------\n");

// 3. Carrito de compras
console.log(">> Iniciando Módulo: Carrito de Compras...");
gestionarCarrito();
console.log("\n---------------------------------------------------------\n");

// 4. Turnos
console.log(">> Iniciando Módulo: Gestión de Turnos...");
gestionarTurnos();

console.log("\n=========================================================");
console.log("          TODOS LOS PROCESOS FINALIZADOS");
console.log("=========================================================");
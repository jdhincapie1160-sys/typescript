const habitaciones = [
    { id: 101, tipo: "Sencilla", precio: 50, disponible: true },
    { id: 102, tipo: "Doble", precio: 80, disponible: false },
    { id: 103, tipo: "Sencilla", precio: 50, disponible: true },
    { id: 104, tipo: "Suite", precio: 150, disponible: true },
    { id: 105, tipo: "Doble", precio: 80, disponible: true }
];

// 1. Filter: Ver cuáles están disponibles
let disponibles = habitaciones.filter(hab => hab.disponible === true);
console.log("Habitaciones libres:", disponibles);

// 2. Map: Crear una lista de solo los precios de las disponibles
let preciosDisponibles = disponibles.map(hab => hab.precio);
console.log("Precios de habitaciones libres:", preciosDisponibles);

// 3. Reduce: Calcular el costo total si reservara todas las disponibles
let costoTotal = preciosDisponibles.reduce((acumulado, actual) => acumulado + actual, 0);

console.log("--- Resumen de Hotel ---");
console.log("Total habitaciones libres: " + disponibles.length);
console.log("Costo total si se ocupan todas: $" + costoTotal);
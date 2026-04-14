// 1. Tipado estricto: Estructura del estadio sin la línea [key: string]
export interface Estadio {
    norte: number;
    sur: number;
    oriental: number;
    occidental: number;
}

// 2. Modularidad
function gestionarBoletasEstadio(): void {
    
    let estadio: Estadio = {
        norte: 50,
        sur: 50,
        oriental: 100,
        occidental: 100
    };

    function venderBoleta(zonaIngresada: string, cantidad: number): void {
        // EL TRUCO: Le decimos a TS que trate este texto como una llave válida de Estadio
        let zona = zonaIngresada.toLowerCase() as keyof Estadio;

        // Ahora TypeScript dejará de marcar error en estadio[zona]
        if (estadio[zona] !== undefined) {
            if (estadio[zona] >= cantidad) {
                estadio[zona] -= cantidad;
                console.log("Venta exitosa: " + cantidad + " boletas para zona " + zonaIngresada.toUpperCase());
            } else {
                console.log("Lo sentimos, solo quedan " + estadio[zona] + " boletas en esta zona.");
            }
        } else {
            console.log("La zona ingresada no existe.");
        }
    }

    // Simulación de ventas
    console.log("\n--- Módulo: Boletas Estadio ---");
    console.log("Estado inicial:", estadio);
    venderBoleta("norte", 10);
    venderBoleta("oriental", 110); 
    venderBoleta("sur", 5);
    console.log("Estado final del estadio:", estadio);
}
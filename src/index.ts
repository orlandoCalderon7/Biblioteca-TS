import { Lector } from "./roles/Lector";
import { Administrador } from "./roles/Administrador";

// --- Administrador ---
const admin = new Administrador("Carlos Pérez", "12345678", "ADMIN2024");
console.log(admin.mostrarInfo());       // Método heredado de UsuarioBiblioteca
console.log(`Rol: ${admin.obtenerRol()}`);

admin.agregarLibro("Clean Code", "ADMIN2024");
admin.agregarLibro("TypeScript Deep Dive", "ADMIN2024");
admin.agregarLibro("El Quijote", "ADMIN2024");
admin.verCatalogo();
admin.eliminarLibro("El Quijote", "ADMIN2024");

console.log("\n" + "=".repeat(50) + "\n");

// --- Lector ---
const lector = new Lector("Ana García", "87654321");
console.log(lector.mostrarInfo());      // Mismo método heredado
console.log(`Rol: ${lector.obtenerRol()}`);

lector.solicitarPrestamo("Clean Code", 14);
lector.solicitarPrestamo("TypeScript Deep Dive", 7);
lector.verLibrosPrestados();

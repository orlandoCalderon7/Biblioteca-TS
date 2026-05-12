import { UsuarioBiblioteca } from "../models/Usuario";

interface LibroPrestado {
  titulo: string;
  fechaDevolucion: Date;
}

export class Lector extends UsuarioBiblioteca {
  // Atributo propio del Lector
  private librosPrestados: LibroPrestado[] = [];
  private readonly maxPrestamos: number = 3;

  constructor(nombre: string, dni: string) {
    super(nombre, dni); // Reutiliza el constructor de la clase base 
  }

  public obtenerRol(): string {
    return "Lector";
  }

  // Funcionalidad exclusiva del Lector
  public verLibrosPrestados(): void {
    if (!this.activo) {
      console.log(`${this.nombre} no tiene cuenta activa.`);
      return;
    }

    if (this.librosPrestados.length === 0) {
      console.log(`${this.nombre} no tiene libros prestados actualmente.`);
      return;
    }

    console.log(`\nLibros prestados a ${this.nombre}:`);
    this.librosPrestados.forEach((libro, index) => {
      console.log(
        `  ${index + 1}. "${libro.titulo}" — Devolver antes del: ${libro.fechaDevolucion.toLocaleDateString()}`
      );
    });
  }

  public solicitarPrestamo(titulo: string, diasPrestamo: number = 7): void {
    if (this.librosPrestados.length >= this.maxPrestamos) {
      console.log(`${this.nombre} alcanzó el límite de ${this.maxPrestamos} préstamos.`);
      return;
    }

    const fechaDevolucion = new Date();
    fechaDevolucion.setDate(fechaDevolucion.getDate() + diasPrestamo);

    this.librosPrestados.push({ titulo, fechaDevolucion });
    console.log(`Préstamo registrado: "${titulo}" para ${this.nombre}.`);
  }
}

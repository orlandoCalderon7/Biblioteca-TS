import { UsuarioBiblioteca } from "../models/Usuario";

export class Administrador extends UsuarioBiblioteca {
  // Atributo privado exclusivo del administrador
  private catalogoLibros: string[] = [];
  private readonly codigoAcceso: string;

  constructor(nombre: string, dni: string, codigoAcceso: string) {
    super(nombre, dni); // Reutiliza constructor base
    this.codigoAcceso = codigoAcceso;
  }

  public obtenerRol(): string {
    return "Administrador";
  }

  // Funcionalidades exclusivas del Administrador
  public agregarLibro(titulo: string, codigo: string): void {
    if (codigo !== this.codigoAcceso) {
      console.log("Código de acceso incorrecto.");
      return;
    }
    this.catalogoLibros.push(titulo);
    console.log(`Libro agregado: "${titulo}" por ${this.nombre}.`);
  }

  public eliminarLibro(titulo: string, codigo: string): void {
    if (codigo !== this.codigoAcceso) {
      console.log("Código de acceso incorrecto.");
      return;
    }

    const index = this.catalogoLibros.indexOf(titulo);
    if (index === -1) {
      console.log(`El libro "${titulo}" no existe en el catálogo.`);
      return;
    }

    this.catalogoLibros.splice(index, 1);
    console.log(`Libro eliminado: "${titulo}" por ${this.nombre}.`);
  }

  public verCatalogo(): void {
    console.log(`\n Catálogo actual (${this.catalogoLibros.length} libros):`);
    this.catalogoLibros.forEach((libro, i) => console.log(`  ${i + 1}. ${libro}`));
  }
}

export abstract class UsuarioBiblioteca {
  // private: solo accesible dentro de esta clase
  private dni: string;

  // protected: accesible en esta clase y subclases
  protected nombre: string;
  protected activo!: boolean;

  constructor(nombre: string, dni: string, activo: boolean = true) {
    this.nombre = nombre;
    this.dni = dni;
    this.activo = activo;
  }

  // Getter público para DNI (encapsulamiento)
  public getDni(): string {
    return this.dni;
  }

  // Método reutilizable por todas las subclases
  public mostrarInfo(): string {
    return `Usuario: ${this.nombre} | DNI: ${this.getDni()} | Estado: ${
      this.activo ? "Activo" : "Inactivo"
    }`;
  }

  // Método abstracto: cada subclase define su propio rol
  public abstract obtenerRol(): string;
}

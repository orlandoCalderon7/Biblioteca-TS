# Biblioteca-TS

> Sistema de gestión de biblioteca implementado en **TypeScript**, aplicando los pilares fundamentales de la **Programación Orientada a Objetos**:
> abstracción, herencia, encapsulamiento y polimorfismo.

## Descripción General

Este proyecto simula el sistema de usuarios de una biblioteca digital. Permite gestionar dos tipos de usuarios: **Lectores** y **Administradores**, 
cada uno con responsabilidades y permisos distintos.

El sistema fue construido desde cero con TypeScript puro, sin frameworks externos, con el objetivo de demostrar una arquitectura limpia basada en clases, 
jerarquías de herencia y principios de diseño orientado a objetos.

## Estructura del Proyecto

Biblioteca-TS/
├── src/                          # Código fuente principal (TypeScript)
│   ├── models/
│   │   └── Usuario.ts            # Clase abstracta base del sistema
│   ├── roles/
│   │   ├── Lector.ts             # Subclase: usuario con préstamos
│   │   └── Administrador.ts      # Subclase: usuario con gestión de catálogo
│   └── index.ts                  # Punto de entrada — prueba del sistema
├── dist/                         # Código compilado a JavaScript (generado automáticamente)
├── node_modules/                 # Dependencias instaladas (generado automáticamente)
├── .gitignore                    # Archivos excluidos del repositorio
├── package.json                  # Configuración del proyecto y scripts
├── package-lock.json             # Versiones exactas de dependencias
└── tsconfig.json                 # Configuración del compilador TypeScript


## Descripción de Archivos

### `src/models/Usuario.ts`
Clase **abstracta** que representa la base de cualquier usuario del sistema. 
Define los atributos comunes y obliga a las subclases a implementar el método `obtenerRol()`. No puede instanciarse directamente.

- Atributo `private dni` -> solo accesible dentro de la propia clase
- Atributos `protected nombre` y `activo` -> accesibles desde las subclases
- Método abstracto `obtenerRol()` -> cada subclase define su propio rol
- Método `mostrarInfo()` -> reutilizado por herencia en todas las subclases

### `src/roles/Lector.ts`
Subclase que representa a un **usuario lector** de la biblioteca. Hereda de `Usuario` y agrega la funcionalidad de gestión de préstamos.

- Método `solicitarPrestamo(libro)` -> registra un libro prestado
- Método `verLibrosPrestados()` -> muestra el historial de préstamos del lector

### `src/roles/Administrador.ts`
Subclase que representa a un **usuario administrador**. Hereda de `Usuario` y agrega la capacidad de gestionar el catálogo de libros.

- Atributo `private codigoAcceso` -> credencial exclusiva del administrador
- Método `agregarLibro(libro)` -> incorpora un libro al catálogo
- Método `eliminarLibro(libro)` -> retira un libro del catálogo
- Método `verCatalogo()` -> muestra todos los libros disponibles

### `src/index.ts`
Punto de entrada del sistema. Crea instancias de `Lector` y `Administrador`, ejecuta sus métodos y demuestra en consola el funcionamiento completo del sistema.

### `tsconfig.json`
Archivo de configuración del compilador TypeScript. Define que el código fuente está en `src/` y que el resultado compilado se genera en `dist/`.

### `package.json`
Contiene los metadatos del proyecto y los scripts de ejecución. Sin este archivo el proyecto no puede instalarse ni ejecutarse en ninguna máquina.

### `.gitignore`
Indica a Git qué archivos no deben subirse al repositorio. Excluye `node_modules/` y `dist/` por ser carpetas generadas automáticamente y de gran tamaño.

## Conceptos de POO Aplicados

| Concepto              | Descripción                                                       | Dónde se aplica           |
|-----------------------|-------------------------------------------------------------------|---------------------------|
| **Abstracción**       | Se modela solo lo esencial de un usuario                          | Clase `Usuario`           |
| **Clase Abstracta**   | `Usuario` no puede instanciarse directamente                      | `abstract class Usuario`  |
| **Herencia**          | `Lector` y `Administrador` reutilizan código de `Usuario`         | `extends Usuario`         |
| **Encapsulamiento**   | Los datos sensibles están protegidos con modificadores de acceso  | `private`, `protected`    |
| **Polimorfismo**      | Cada subclase responde distinto al mismo método `obtenerRol()`    | `abstract obtenerRol()`   |

## Modificadores de Acceso

| Modificador   | Atributo                                  | Accesible desde                   |
|---------------|-------------------------------------------|-----------------------------------|
| `private`     | `dni`, `codigoAcceso`, `librosPrestados`  | Solo dentro de su propia clase    |
| `protected`   | `nombre`, `activo`                        | La clase y sus subclases          |
| `public`      | Métodos generales                         | Desde cualquier parte del código  |

## Requisitos Previos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior
- TypeScript v5 o superior

## Inicialización del Proyecto

### Paso 1 — Clonar el repositorio
```bash
git clone https://github.com/orlandoCalderon7/Biblioteca-TS.git
cd Biblioteca-TS

## Instalar dependencias
npm install

## Ejecutar en modo desarrollo
npm run dev

## Compilar a JavaScript
Compilar a JavaScript
Genera la carpeta dist/ con el código JavaScript listo para producción.

## Ejecutar el código compilado
node dist/index.js

| Scripts Disponibles                                                                |
|---------|------------------|-------------------------------------------------------|
| Script  |     Comando	     |             Descripción                               |
| dev	  |   npm run dev    |    Ejecuta con ts-node + nodemon (recarga automática) |
| build	  |  npm run build   |	Compila TypeScript → JavaScript en dist/             |
| start	  |  npm run start   |	Ejecuta el código ya compilado en dist/              |

|Dependencias del Proyecto                                                     |
|------------|-------------------|---------------------------------------------|                   
| Paquete    |       Tipo        |	        Función                            |
| typescript |	devDependency    |	Compilador de TypeScript                   |
| ts-node    |	devDependency    |	Ejecuta .ts sin compilar manualmente       |
| nodemon    |	devDependency    |	Reinicia el servidor al detectar cambios   |

Flujo de Ejecución

src/index.ts
Crea instancia de Administrador
    agregarLibro() -> eliminarLibro() -> verCatalogo()
Crea instancia de Lector
    SolicitarPrestamo() -> verLibrosPrestados()

Proyecto académico desarrollado por el **Grupo 3 — Interfaces 3** 

# Actividad 4 RA1 JavaScript - Calculadora Interactiva

## Descripción

Esta aplicación es una calculadora interactiva desarrollada en **HTML**, **CSS** y **JavaScript**. Ofrece funciones básicas y adicionales con una interfaz sencilla y común, así como optimizada para dispositivos móviles.

### Funcionalidades principales:
1. Operaciones básicas: suma, resta, multiplicación, y división.
2. Funciones adicionales:
   - Limpiar pantalla y reiniciar cálculos.
   - Cambio de signo (+/-).
   - Conversión de porcentajes.
3. Historial de operaciones.
4. Soporte para entrada mediante pulsación de botones y manejo de teclado.
5. Manejo de errores, como divisiones por cero.

## Archivos incluidos

- **actividad4RA1.js**: Archivo con el código principal en JavaScript.
- **index.html**: Archivo HTML que sirve como punto de entrada para ejecutar el script.

## Requisitos

- **Navegador web**: Este proyecto se ejecuta directamente en un navegador web con soporte para JavaScript.

## Instrucciones de Ejecución

1. **Descargar los archivos**  
     Asegúrate de tener los archivos `actividad4RA1.js` y `index.html` en el mismo directorio.

2. **Abrir el archivo HTML**  
   Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web.

3. **Interacción con la aplicación**  
   - Introduce números, operadores o usa las funciones adicionales para realizar cálculos.
   - Revisa el historial para consultar operaciones previas.

## Estructura del Código

### **HTML**
- Contiene la estructura de la calculadora.

### **CSS**
- Define el estilo visual de la calculadora.

### **JavaScript**
- **Funciones principales**:
  - `actualizarPantalla()`: Gestiona la visualización de los valores ingresados.
  - `manejarNumero(numero)`: Captura los números ingresados por el usuario.
  - `manejarOperador(operador)`: Procesa los operadores seleccionados.
  - `realizarCalculo()`: Realiza las operaciones matemáticas.
  - `registrarEnHistorial()`: Almacena cada operación en el historial.
  - `manejarFuncion(funcion)`: Gestiona las funciones especiales como AC, ±, %.
- **Interactividad**:
  - Soporte para entrada mediante clics en botones y uso del teclado físico.

## Notas adicionales

- **Errores manejados**:
  - División por cero muestra "Error" en pantalla.
  - Manejo adecuado de decimales y operadores múltiples.
  - Historial limitado a las operaciones recientes.

- **Diseño optimizado**:
  - Adaptado para pantallas móviles y de escritorio.
  - Ajuste dinámico del tamaño de fuente para valores largos.

## Ejemplo de uso

1. Introduce números y selecciona un operador.
2. Haz clic en "=" o pulsa Enter para obtener el resultado.
3. Consulta el historial para revisar los cálculos realizados.

---
*Desarrollado por Carlos Rondón Pérez.*

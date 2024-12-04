//Declaración de variables
let pantallaValor = '0'; // Valor inicial mostrado en pantalla
let primerOperando = null; // Primer operando
let operador = null; // Operador actual
let esperandoSegundoOperando = false; // Espera del segundo operando

const pantalla = document.getElementById('pantalla'); // Pantalla de la calculadora
const historial = document.getElementById('historial'); // Historial de operaciones
const botones = document.querySelectorAll('.btn'); // Botones de la calculadora

// Asignación de eventos a los botones
botones.forEach(button => {
  if (button.classList.contains('numero')) {
    button.addEventListener('click', () => manejarNumero(button.textContent));
  } else if (button.classList.contains('decimal')) {
    button.addEventListener('click', manejarDecimal);
  } else if (button.classList.contains('operador')) {
    button.addEventListener('click', () => manejarOperador(button.dataset.operador));
  } else if (button.classList.contains('funcion')) {
    button.addEventListener('click', () => manejarFuncion(button.id));
  }
});

// Actualizar pantalla de la calculadora
function actualizarPantalla() {
  const num = parseFloat(pantallaValor);
  if (Number.isInteger(num)) {
    pantalla.textContent = pantallaValor;
  } else {
    pantalla.textContent = parseFloat(pantallaValor).toFixed(8).replace(/\.?0+$/, '');
  }

  // Ajustar el tamaño de la fuente si el valor es demasiado largo
  if (pantalla.textContent.length > 9) {
    pantalla.style.fontSize = '40px';
  } else {
    pantalla.style.fontSize = '64px';
  }
}

// Manejo de la entrada de números
function manejarNumero(numero) {
  if (esperandoSegundoOperando) {
    pantallaValor = numero;
    esperandoSegundoOperando = false;
  } else {
    pantallaValor = pantallaValor === '0' ? numero : pantallaValor + numero;
  }
  actualizarPantalla();
}

// Manejo de la entrada para decimales
function manejarDecimal() {
  if (esperandoSegundoOperando) {
    pantallaValor = '0.';
    esperandoSegundoOperando = false;
  } else if (!pantallaValor.includes('.')) {
    pantallaValor += '.';
  }
  actualizarPantalla();
}

// Manejo de la entrada de operadores
function manejarOperador(siguienteOperador) {
  const botonesOperador = document.querySelectorAll('.operador');
  botonesOperador.forEach(btn => btn.classList.remove('activo'));

  if (siguienteOperador !== '=') {
    const botonActual = document.querySelector(`[data-operador="${siguienteOperador}"]`);
    botonActual.classList.add('activo');
  }

  const valorEntrada = parseFloat(pantallaValor);

  if (primerOperando === null) {
    primerOperando = valorEntrada;
  } else if (operador) {
    const resultado = realizarCalculo();
    if (isNaN(resultado)) {
      pantallaValor = "Error";
    } else {
      pantallaValor = String(resultado);
    }
    actualizarPantalla();

    // Guardar operaciones en el historial
    registrarEnHistorial(primerOperando, operador, valorEntrada, pantallaValor);
    primerOperando = isNaN(resultado) ? null : resultado;
  }

  esperandoSegundoOperando = true;
  operador = siguienteOperador === '=' ? null : siguienteOperador;
}

// Realizar el cálculo según el operador
function realizarCalculo() {
  const segundoOperando = parseFloat(pantallaValor);

  switch (operador) {
    case '+':
      return primerOperando + segundoOperando;
    case '-':
      return primerOperando - segundoOperando;
    case '×':
      return primerOperando * segundoOperando;
    case '÷':
      return segundoOperando === 0 ? NaN : primerOperando / segundoOperando; // Manejar división por cero
    default:
      return segundoOperando;
  }
}

// Manejar las funciones adicionales (AC, ±, %)
function manejarFuncion(funcion) {
  switch (funcion) {
    case 'clear':
      pantallaValor = '0';
      primerOperando = null;
      operador = null;
      esperandoSegundoOperando = false;
      document.querySelectorAll('.operador').forEach(btn => btn.classList.remove('activo'));
      historial.innerHTML = '';
      break;
    case 'negate':
      pantallaValor = String(-parseFloat(pantallaValor));
      break;
    case 'percent':
      pantallaValor = String(parseFloat(pantallaValor) / 100);
      break;
  }
  actualizarPantalla();
}

// Guardar operaciones en el historial
function registrarEnHistorial(primerOperando, operador, segundoOperando, resultado) {
  const operacion = `${primerOperando} ${operador} ${segundoOperando} = ${resultado}`;
  const nodo = document.createElement('div');
  nodo.textContent = operacion;
  historial.appendChild(nodo);
}

// Manejo de teclado para la calculadora
window.addEventListener('keydown', function(e) {
  const tecla = e.key;
  if (tecla >= '0' && tecla <= '9') {
    manejarNumero(tecla);
  } else if (tecla === '.') {
    manejarDecimal();
  } else if (['+', '-', '*', '/', '=', 'Enter'].includes(tecla)) {
    manejarOperador(tecla === '*' ? '×' : tecla === '/' ? '÷' : tecla === '=' || tecla === 'Enter' ? '=' : tecla);
  } else if (tecla === 'Backspace') {
    manejarFuncion('clear');
  }
});

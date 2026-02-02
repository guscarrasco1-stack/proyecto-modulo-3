/*************************************
 * Aplicación de consola en JavaScript
 * Módulo 3 - Fundamentos de Programación
 *************************************/

// ==========================
// VARIABLES Y DATOS INICIALES
// ==========================

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 15 }
];

// ==========================
// FUNCIONES MATEMÁTICAS
// ==========================

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir por cero";
  }
  return a / b;
}

// ==========================
// FUNCIÓN PARA VALIDAR NÚMEROS
// ==========================

function pedirNumero(mensaje) {
  let numero;
  do {
    numero = Number(prompt(mensaje));
  } while (isNaN(numero));
  return numero;
}

// ==========================
// MENÚ PRINCIPAL
// ==========================

function mostrarMenu() {
  return prompt(
    "Seleccione una opción:\n" +
    "1. Sumar\n" +
    "2. Restar\n" +
    "3. Multiplicar\n" +
    "4. Dividir\n" +
    "5. Ver usuarios mayores de edad\n" +
    "0. Salir"
  );
}

// ==========================
// FUNCIÓN PRINCIPAL
// ==========================

function iniciarAplicacion() {
  let opcion;

  do {
    opcion = mostrarMenu();

    if (opcion >= 1 && opcion <= 4) {
      const num1 = pedirNumero("Ingrese el primer número:");
      const num2 = pedirNumero("Ingrese el segundo número:");

      let resultado;

      switch (opcion) {
        case "1":
          resultado = sumar(num1, num2);
          break;
        case "2":
          resultado = restar(num1, num2);
          break;
        case "3":
          resultado = multiplicar(num1, num2);
          break;
        case "4":
          resultado = dividir(num1, num2);
          break;
      }

      alert("Resultado: " + resultado);
      console.log("Resultado:", resultado);
    } 
    else if (opcion === "5") {
      mostrarMayoresDeEdad();
    } 
    else if (opcion !== "0") {
      alert("Opción inválida");
    }

  } while (opcion !== "0");

  alert("Aplicación finalizada");
}

// ==========================
// ARREGLOS Y OBJETOS
// ==========================

function mostrarMayoresDeEdad() {
  const mayores = usuarios.filter(usuario => usuario.edad >= 18);

  console.log("Usuarios mayores de edad:");
  mayores.forEach(usuario => {
    console.log(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`);
  });

  alert(`Hay ${mayores.length} usuarios mayores de edad. Ver consola.`);
}

// ==========================
// EJECUCIÓN
// ==========================

console.log("Aplicación iniciada");
iniciarAplicacion();
console.log("Aplicación finalizada");



// let contacts = [];
// const formulario = document.getElementById("formulario");
// console.log("-->iniciamos con el formulario", formulario);

// let numero = parseInt(prompt("ingrese un numero"));

// // De esta manera podemos lograr y nos aseguraremos de que el usuario trabajara con numeros positivos//
// if (numero < 0) {
//   //--> debe dar como resultado true
//   numero = numero * -1;
// }

// for (let contador = 2; contador <= numero; contador = contador +2) {
//   aleelrt ("el numero par encontrado es " + contador);
// }

/**SIMULADOR DE CONTACTO
 * DATOS
 * NOMBRE
 * APELLIDO
 * CORREO ELECTRONICO
 * MENSAJE
 */

// const obtenerNombreCompleto = (apellido, nombre) => {
//   return apellido + ", " + nombre;
// };

// const obtenerDetallesDelRegistro = (surname, name, email, message) => {
//   return (
//     obtenerNombreCompleto(surname, name) +
//     "con correo electronico: " +
//     email +
//     ". dejo el siguiente mensaje: " +
//     message
//   );
// };
// //Datos que ingresara el usuario- se enviaran al backoffice
// let apellidos = prompt("cual es tu apellido");
// let nombres = prompt("cual es tu nombre");
// let correos = prompt("cual es tu correo");
// let mensaje = prompt("cual es tu mensaje");

// alert(
//   "El usuario " + obtenerDetallesDelRegistro(apellido, nombres, correo, mensaje)
// );

let nombreCliente;
let edad;
let añoActual = 2023;
let edadComprador;
let Pago;
const Impuesto = "1.5%";

do {
  nombreCliente = prompt(
    "Es un gusto tenerte aqui, ingresa tu nombre para continuar "
  );
} while (!nombreCliente || !isNaN(nombreCliente));

do {
  edad = parseInt(prompt("Ingrese su edad para continuar "));
} while (isNaN(edad) || edad <= 0);

edadComprador = añoActual - edad;

alert("Hola " + nombreCliente);

if (edadComprador >= 18) {
  alert("Puede acceder a comprar");
} else {
  alert("Necesita de un adulto para continuar");
}

let opcionDeCompra;

do {
  opcionDeCompra = parseInt(
    prompt("Indíquenos su medio de pago:\n1. Efectivo\n2. Tarjeta de Crédito")
  );
} while (isNaN(opcionDeCompra) || opcionDeCompra < 1 || opcionDeCompra > 2);

if (opcionDeCompra === 1) {
  alert("Contamos con descuentos exclusivos");
} else if (opcionDeCompra === 2) {
  alert("Tiene un aumento en su compra de " + Impuesto);
} else {
  alert("Indique una opción válida");
}

let continuarConLaCompra = true;

while (continuarConLaCompra) {
  let costoFinal;

  do {
    costoFinal = parseFloat(prompt("Indique el costo final de la compra"));
  } while (isNaN(costoFinal) || costoFinal <= 0);

  let descuento = 0;

  if (costoFinal >= 100 && costoFinal < 500) {
    descuento = 10;
  } else if (costoFinal >= 500 && costoFinal < 1000) {
    descuento = 20;
  } else if (costoFinal >= 1000) {
    descuento = 30;
  }

  let costoConDescuento = costoFinal - (costoFinal * descuento) / 100;

  alert("El descuento total es : " + costoConDescuento);

  let opcionContinuar;

  do {
    opcionContinuar = prompt(
      "¿Desea continuar con la compra? (Si/No)"
    ).toUpperCase();
  } while (opcionContinuar !== "Si" && opcionContinuar !== "No");

  if (opcionContinuar !== "Si") {
    continuarComprando = false;
    alert("Gracias por su compra. fue un placer atenderte!!");
  }
}

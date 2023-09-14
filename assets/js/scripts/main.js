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


//inicia pre-entrega1//
let nombreCliente;
let edad;
let añoActual = 2023;
let edadComprador;
let Pago;
const Impuesto = "1.5%";

do {
  nombreCliente = prompt(
    "Es un gusto saludarte, indicanos tu nombre para continuar "
  );
} while (!nombreCliente || !isNaN(nombreCliente));

do {
  edad = parseInt(prompt("Ingrese su edad para continuar "));
} while (isNaN(edad) || edad <= 0);

edadComprador = añoActual - edad;

alert("Hola " + nombreCliente);

if (edadComprador >= 18) {
  alert("Perfecto, continuemos con la compra ");
} else {
  alert("Ops!, necesitas compañia de un adulto mayor de edad");
}

let opcionDeCompra;

do {
  opcionDeCompra = parseInt(
    prompt("Con que metodo de pago realizaras la compra:\n1. Efectivo \n2. Tarjeta de Crédito")
  );
} while (isNaN(opcionDeCompra) || opcionDeCompra < 1 || opcionDeCompra > 2);

if (opcionDeCompra === 1) {
  alert("Contamos para ti con descuentos exclusivos");
} else if (opcionDeCompra === 2) {
  alert("su compra tendra un aumento del" + Impuesto);
} else {
  alert("Indique una opción válida");
}

let continuarConLaCompra = true;

while (continuarConLaCompra) {
  let costoFinal;

  do {
    costoFinal = parseFloat(prompt("Total de la compra"));
  } while (isNaN(costoFinal) || costoFinal <= 0);

  let descuento = 0;

  if (costoFinal >= 100 && costoFinal < 500) {
    descuento = 35;
  } else if (costoFinal >= 500 && costoFinal < 1000) {
    descuento = 56;
  } else if (costoFinal >= 1000) {
    descuento = 40;
  }

  let costoConDescuento = costoFinal - (costoFinal * descuento) / 100;

  alert("El total con descuento sera de  : " + costoConDescuento);

  let opcionContinuar;

  do {
    opcionContinuar = prompt(
      "¿Desea continuar con la compra? (S/N)"
    ).toUpperCase();
  } while (opcionContinuar !== "S" && opcionContinuar !== "N");

  if (opcionContinuar !== "S") {
    continuarComprando = true;
    alert("Gracias por su compra. fue un placer atenderte!!");
  }
}

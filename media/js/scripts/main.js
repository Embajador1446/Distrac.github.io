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
// let nombreCliente;
// let edad;
// let añoActual = 2023;
// let edadComprador;
// let Pago;
// const Impuesto = "1.5%";

// do {
//   nombreCliente = prompt(
//     "Es un gusto saludarte, indicanos tu nombre para continuar "
//   );
// } while (!nombreCliente || !isNaN(nombreCliente));

// do {
//   edad = parseInt(prompt("Ingrese su edad para continuar "));
// } while (isNaN(edad) || edad <= 0);

// edadComprador = añoActual - edad;

// alert("Hola " + nombreCliente);

// if (edadComprador >= 18) {
//   alert("Perfecto, continuemos con la compra ");
// } else {
//   alert("Ops!, necesitas compañia de un adulto mayor de edad");
// }

// let opcionDeCompra;

// do {
//   opcionDeCompra = parseInt(
//     prompt("Con que metodo de pago realizaras la compra:\n1. Efectivo \n2. Tarjeta de Crédito")
//   );
// } while (isNaN(opcionDeCompra) || opcionDeCompra < 1 || opcionDeCompra > 2);

// if (opcionDeCompra === 1) {
//   alert("Contamos para ti con descuentos exclusivos");
// } else if (opcionDeCompra === 2) {
//   alert("su compra tendra un aumento del" + Impuesto);
// } else {
//   alert("Indique una opción válida");
// }

// let continuarConLaCompra = true;

// while (continuarConLaCompra) {
//   let costoFinal;

//   do {
//     costoFinal = parseFloat(prompt("Total de la compra"));
//   } while (isNaN(costoFinal) || costoFinal <= 0);

//   let descuento = 0;

//   if (costoFinal >= 100 && costoFinal < 500) {
//     descuento = 35;
//   } else if (costoFinal >= 500 && costoFinal < 1000) {
//     descuento = 56;
//   } else if (costoFinal >= 1000) {
//     descuento = 40;
//   }

//   let costoConDescuento = costoFinal - (costoFinal * descuento) / 100;

//   alert("El total con descuento sera de  : " + costoConDescuento);

//   let opcionContinuar;

//   do {
//     opcionContinuar = prompt(
//       "¿Desea continuar con la compra? (S/N)"
//     ).toUpperCase();
//   } while (opcionContinuar !== "S" && opcionContinuar !== "N");

//   if (opcionContinuar !== "S") {
//     continuarComprando = true;
//     alert("Gracias por su compra. fue un placer atenderte!!");
//   }
// }

// const miArray = ["laura", "viviana", "kevin", "natalia"];

// var nombre = miArray[1];//me arroja viviana
// console.log(nombre);

// nombre = miArray[4]
// console.log(nombre) //undefined, por que no existe dato en mi array

// miArray.push("rocky");//puedo agragar utilizando este metodo (.push)
// console.log(miArray);

// nombre = miArray[4];
// console.log(nombre);

// let cantos = ["bicolor", "blanco", "beige", "negro", "cedro", "plomo"];
// for (let index = 0 ; index < 6; index++) {
//   console.log(
//     "--> el canto numero" +
//     index +
//      "--contiene el valor: " +
//       cantos[index]);
// }

// INICIO PRE ENTREGA NUMERO 2

// let cantos = {
//   tipoCanto: "Semi Rigido",
//   colorCanto: "Bicolor",
//   calibre: 22,
//   fabricante: "madecentro",
//   Referencia: 111,
// };
// console.log("--> referencias del canto", cantos); //<-- de esta manera veo los datos en la consola
// alert(
//   "El canto" + "-" +
//     cantos["colorCanto"] +
//     "," +
//     cantos["tipoCanto"] +
//     "," +
//     "calibre" +
//     cantos["calibre"] +
//     " se selecciono de forma correcta"
// );
// function Cantos(tipo, color, calibre, fabrica, ref){
//   this.tipoCanto = tipo;
//   this.colorCanto = color;
//   this.calibre = calibre;
//   this.fabricante = fabrica;
//   this.Referencia = ref;
// }
// const elCanto = new Cantos("rigido","blanco",22,"Mg-Cantos",114);

// let tipoCanto = prompt("Ingrese el Tipo de canto que busca");
// let colorCanto = prompt("Ingrese el color deseado");
// let calibre= prompt("Indique el calibre");
// let fabricante = prompt("si conoce alguna marca indiquela ");
// let Referencia = prompt("ingrese el numero de referencia (si lo tiene)");
// const cantoDos = new Cantos(tipoCanto, colorCanto, calibre, fabricante, Referencia)
// console.table(elCanto);
// console.table(cantoDos);


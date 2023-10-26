//PRE-ENTREGA N-3
const preguntaInicial = prompt(
  "Bienvenido a DISTRAC SAS. Señale con SI o NO si usted ya cuenta con usuario"
);

if (preguntaInicial.trim().toLocaleUpperCase() === "NO") {
  alert("Por favor indiquenos los siguientes datos para crear un usuario");
  let usuario = prompt("Ingrese un nombre o id para el Usuario");
  while (usuario.length == 0) {
    usuario = prompt(
      "es necesario completar este espacio, por favor indiquenos el nombre de usuario con el cual lo identificaremos en nuestra base de datos"
    );
  }
  let contrasenia = prompt(
    "cree una contraseña o clave que contenga como minimo 8 caracteres"
  );
  while (validarContrasenia(contrasenia)) {
    contrasenia = prompt("Contraseña invalida por falta de caracteres");
  }
  let nombre = prompt("Ingrese su nombre");
  while (!validarString(nombre)) {
    nombre = prompt(
      "campo obligatorio para continuar, por favor indiquenos su Nombre"
    );
  }

  let apellido = prompt("Ingrese su Apellido");
  while (!validarString(apellido)) {
    apellido = prompt(
      "ampo obligatorio para continuar, por favor indiquenos su Aellido"
    );
  }
  let edad = parseInt(prompt("Ingrese su edad"));
  while (!validarDatos(edad, 10, 110)) {
    edad = parseInt(
      prompt(
        "no reconocimos su edad con exactitud, porfavor verifique para continuar"
      )
    );
  }
}
else {
    let usuario = prompt("Ingrese el nombre de Usuario registrado")
    let contrasenia = prompt("Contraseña")

    while (!validarUsuarioYcontrasenia(usuario, contrasenia)) {
        alert("El usuario o contraseña no fue identificado, reintente")
        usuario = prompt("Ingrese su Usuario")
        contrasenia = prompt("Ingrese contraseña")
    }

    alert("Usuario y contraseña ingresada con exito.")
    
    console.log(devuelveValoresYconviertoUsuario(usuario))
    console.log(devuelveValoresYconviertoUsuario(usuario).imc())
    
    alert("Tu ficha tecnica es la siguiente: (Nombre: " + devuelveValoresYconviertoUsuario(usuario).nombre + ")" + " (Apellido: " + devuelveValoresYconviertoUsuario(usuario).apellido + ")" + " (Edad: " + devuelveValoresYconviertoUsuario(usuario).edad + ")" + " (Peso: " + devuelveValoresYconviertoUsuario(usuario).peso + "kg)" + " (Altura: " + devuelveValoresYconviertoUsuario(usuario).altura + "metros)")

    determinaTipoEntrenamientoYAlimentacion(devuelveValoresYconviertoUsuario(usuario).entrenamiento.tipoDeEntrenamiento(devuelveValoresYconviertoUsuario(usuario).imc(), devuelveValoresYconviertoUsuario(usuario).edad), devuelveValoresYconviertoUsuario(usuario).restriccionesAlimenticias)
}

const cantos = [
  { tipo: "Bicolor", calibre: 22, precio: 400 },
  { tipo: "taupe", calibre: 18, precio: 700 },
  { tipo: "blanco", calibre: 16, precio: 350 },
  { tipo: "negro", calibre: 19, precio: 350 },
  { tipo: "nilo", calibre: 22, precio: 500 },
];

let carritoCompra = [];

let confirmacion = prompt(
  "Es un gusto hablar contigo, deseas adquirir nuestros productos? Si/No"
);

while (confirmacion != "Si" && confirmacion != "No") {
  alert("Para continuar, Por favor indiquenos Si o No");
  confirmacion = prompt("Hola, desea continuar con la compra");
}

if (confirmacion == "Si") {
  alert("Estos son los cantos disponibles en tienda");
  let todosLosCantos = cantos.map(
    (cantos) => cantos.tipo + " " + cantos.calibre
  );
  alert(todosLosCantos.join(" -- "));
} else if (confirmacion == "No") {
  alert("Lamentamos no poder ayudarte, hasta la proxima ocacion.");
}

while (confirmacion != "No") {
  let cantos = prompt("Agrega un producto a tu carrito");
  let precio = 0;

  if (
    cantos == "Bicolor" ||
    cantos == "taupe" ||
    cantos == "blanco" ||
    cantos == "negro" ||
    cantos == "nilo"
  ) {
    switch (cantos) {
      case "Bicolor":
        precio = 400;
        break;
      case "taupe":
        precio = 700;
        break;
      case "blanco":
        precio = 350;
        break;
      case "negro":
        precio = 350;
        break;
      case "nilo":
        precio = 500;
        break;
      default:
        break;
    }
    let metros = parseInt(prompt("Cantidad de metros que desea llevar"));

    carritoCompra.push({ cantos, metros, precio });
    console.table(carritoCompra);
  } else {
    alert("no contamos con este canto por el momento");
  }

  confirmacion = prompt("¿desea adquirir otro producto?");

  while (confirmacion === "No") {
    alert("gracias por su compra!, hasta la proxima oportunidad.");
    carritoCompra.forEach((carritoCompraFinal) => {
      console.table(`cantos: ${carritoCompraFinal.cantos}, unidades: ${
        carritoCompra.unidades
      },
            total de la compra final: ${
              carritoCompraFinal * carritoCompraFinal.precio
            }`);
    });
    break;
  }
}

const total = carritoCompra.reduce((acc, el) => acc + el.precio * el.metros, 0);
console.log(`el total final de su compra sera de: ${total}`);

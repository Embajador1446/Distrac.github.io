//Largo contraseñas
const validaContrasenia = (contrasenia) => {
    if (contrasenia.length < 8) {
        return true
    } else {
        return false
    }
}

//caracteres de contraseñas
const validarString = (parametro) =>{
    let variableDeValidacion = new RegExp('^[A-Z]+$', 'i');
    return variableDeValidacion.test(parametro) && parametro.length != 0 
}

const validarDatos = (parametro, limiteInferior, limiteSuperior) => {
    if (!isNaN(parametro) && parametro > limiteInferior && parametro < limiteSuperior) {
        return true
    } else {
        return false
    }
}
const validarOpciones = (opciones, argumentos, cantidadOpciones) => {
    if (isNaN(opciones) || (opciones < 1 || opciones > cantidadOpciones)) {
        opciones = parseInt(prompt("Respuesta Invalida. Reintente. " + argumentos))
        validarOpciones(opciones, argumentos, cantidadOpciones)
    } else {
        return opciones
    }
}
const validarUsuarioYcontrasenia = (usuario, contrasenia) => {
    usuarioEncontrado = usuarios.some((parametro) => {
        return parametro.nombreUsuario === usuario
    })
    contraseniaEncontrada = usuarios.some((parametro) => {
        return parametro.contrasenia === contrasenia
    })
    return usuarioEncontrado && contraseniaEncontrada
}

//recuperacion de usuario 
const devuelveValoresYconviertoUsuario = (usuario) => {
    for (const obj of usuarios) {
        if (obj.nombreUsuario === usuario) {
            let contraseniaRecuperada = obj.contrasenia
            let nombreRecuperado = obj.nombre
            let apellidoRecuperado = obj.apellido
            let edadRecuperada = obj.edad
            
            return usuarioRecuperado
        }
    }
}
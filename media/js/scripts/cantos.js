//PRE-ENTREGA N-2
const cantos = [
    { tipo: "Bicolor", calibre: 22, precio: 400},
    { tipo: "taupe",  calibre: 18, precio: 700 },
    { tipo: "blanco", calibre: 16, precio: 350 },
    { tipo: "negro", calibre: 19, precio: 350},
    { tipo: "nilo", calibre: 22, precio: 500 },
];

let carritoCompra = []

let confirmacion = prompt("Es un gusto hablar contigo, deseas adquirir nuestros productos? Si/No"); 

while(confirmacion != "Si" && confirmacion != "No"){
    alert("Para continuar, Por favor indiquenos Si o No")
    confirmacion = prompt("Hola, desea continuar con la compra")
};

if(confirmacion == "Si"){
    alert("Estos son los cantos disponibles en tienda")
    let todosLosCantos = cantos.map(
        (cantos) => cantos.tipo + " " + cantos.calibre       
    );
    alert (todosLosCantos.join (" -- "))
} else if (confirmacion == "No"){
    alert("Lamentamos no poder ayudarte, hasta la proxima ocacion.")
};

while(confirmacion != "No"){
    let cantos = prompt ("Agrega un producto a tu carrito")
    let precio = 0

    if(cantos == "Bicolor" || cantos == "taupe" || cantos == "blanco" || cantos == "negro" || cantos == "nilo"){
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
        let metros = parseInt(prompt("Cantidad de metros que desea llevar"))
        
        carritoCompra.push({cantos, metros, precio})
        console.table(carritoCompra)
    } else{
        alert("no contamos con este canto por el momento")
    }

    confirmacion = prompt("¿desea adquirir otro producto?")

    while(confirmacion === "No"){
        alert("gracias por su compra!, hasta la proxima oportunidad.")
        carritoCompra.forEach((carritoCompraFinal) => {
            console.table(`cantos: ${carritoCompraFinal.cantos}, unidades: ${carritoCompra.unidades},
            total de la compra final: ${carritoCompraFinal * carritoCompraFinal.precio}`)
        })
    break;    
    }
}

const total = carritoCompra.reduce((acc, el) => acc + el.precio * el.metros, 0);
console.log(`el total final de su compra sera de: ${total}`);


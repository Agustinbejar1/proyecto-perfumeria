

let carrito = []

let seleccion = prompt("Si desea comprar algun producto seleccione si, de lo contrario no.");

while(seleccion != "si" && seleccion != "no"){
    //seleccion = prompt("Si desea comprar seleccione si o de lo contrario no.")
}

if(seleccion === "si"){
    alert("A continuacion la lista de productos")
    let todosLosPerfumes = perfumes.map((perfume)=> perfume.nombre + " - " + perfume.marca + " - precio: " + " $ " + perfume.precio);
    console.log(todosLosPerfumes.join("  -  "))
}else if(seleccion === "no"){
    alert("Gracias por venir")
}


while(seleccion != "no"){
    let perfume = prompt("Agregue el nombre del producto que desee");

    const productoEncontrado = perfumes.find((p) => p.marca === perfume);

    if (productoEncontrado) {
        let unidades = parseInt(prompt(`Ingrese la cantidad que desea comprar:`));
        if (isNaN(unidades) || unidades <= 0) {
            alert("Cantidad no válida. Intente nuevamente.");
        } else {
            let precio = productoEncontrado.precio;
            let nombre = productoEncontrado.nombre;
            carrito.push({ marca: perfume, nombre, unidades, precio });
            alert(`${unidades} ${perfume} ${nombre} agregado al carrito.`);
        }
        } else {
        alert("Producto no válido. Intente nuevamente.");
        }

    seleccion = prompt("¿Desea agregar otro producto? (si/no)");

    while (seleccion === "no") {
        alert("Gracias por la compra");
        carrito.forEach((carritoFinal) => {
            console.log(`perfume: ${carritoFinal.marca}, nombre: ${carritoFinal.nombre} unidades: ${carritoFinal.unidades}, total: ${carritoFinal.unidades * carritoFinal.precio}`);
        });
        break;
    }

}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log ( "El total de la compra es : $" + total);

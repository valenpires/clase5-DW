const productos = ["playstation","computadora","mouse","teclado","auriculares"];

for (let i = 0; i < productos.length; i++) {
    console.log( "Producto" + (i + 1) + ":" + productos[i]);
}

const nuevostock = productos.pop()

console.log(productos)





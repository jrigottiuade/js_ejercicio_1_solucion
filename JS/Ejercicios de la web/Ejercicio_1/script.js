
// 1. creamos el array
const paquetes = ["Bariloche", "Mendoza", "Ushuaia", "Salta", "Iguazú"];

// 2. Iteramos el array con un bucle while
let indice = 0;
while (indice < paquetes.length) {
    console.log(`Indice ${indice}: elemento: ${paquetes[indice]}`)
    indice++;
}

// 3.1 Iteramos con for in
for (let indice in paquetes) {
    console.log(paquetes[indice])
}

// // 3.2 Iteramos con for of
for (let destino of paquetes){
    console.log(destino)
}

// 4. Agregamos un nuevo destino con push()
paquetes.push("MDQ")

// 5. Agregar un nuevo destino con unshift()
paquetes.unshift("Jujuy")

// 6. Eliminar el último elemento con pop()
paquetes.pop()

// 7.1 Ordenamos con sort()
paquetes.sort()
console.log(paquetes)

// 7.1 Ordenamos con sort()
paquetes.reverse()
console.log(paquetes)

// 8. Buscar un elemento
let buscarDestino = "bariloche"
let encontrado = false

// Version con for
for (let destino of paquetes) {
    if (destino.toLowerCase() === buscarDestino) {
        encontrado = true;
        break; // Cortamos el bucle al encontrar
    }
}

// Version con while
indice = 0
while (!encontrado && indice < paquetes.length) {
    encontrado = (paquetes[indice].toLowerCase().trim() == buscarDestino.trim()) ? true : false;
    indice++;
}


// console.log(encontrado ? "Destino encontrado" : "Destino no encontrado")

// 9. Buscamos la posición del destino Ushuaia
const buscar_destino = "Bariloche"
const posicion_destino = paquetes.indexOf(buscar_destino)
console.log((posicion_destino >= 0) ? `La posición es: ${posicion_destino}`:"Destino no enontrado")


/* FUNCIONES */

// Consigna 1
let funcionIterarArray = function (iterar) {
    for (let item of iterar) {
        console.log(item)
    }
}

// Validamos la función iterarArray
funcionIterarArray(paquetes)

// COnsigna 2
let funcionInsertarDestino = function (paquetes, destino) {
    const respuesta = paquetes.push(destino)
    return respuesta > 0 ? true : false
}

// Validamos la función insertarDestino
console.log(funcionInsertarDestino(paquetes, "San Juan"))

// Consigna 3
let funcionBuscarDestino = function (paquetes, buscarDestino) {

    let encontrado = false
    for (let destino of paquetes) {
        if (destino.toLowerCase() === buscarDestino.toLowerCase()) {
            encontrado = true;
            break; // Cortamos el bucle al encontrar
        }
    }
    return encontrado ? "Destino encontrado" : "Destino no encontrado"
}

// Validamos la función buscarDestino
console.log(funcionBuscarDestino(paquetes, "San Juan"))
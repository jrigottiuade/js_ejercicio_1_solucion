// DOM 1 - Mostrar paquetes en consola
const mostrarPaquetes = document.querySelector("#mostrar-btn")

mostrarPaquetes.addEventListener("click", () => {
    funcionIterarArray(paquetes)
})


const formAgregarDestino = document.querySelector("#agregar-form")
formAgregarDestino.addEventListener("submit", (e) => {
    e.preventDefault()
    const nuevoDestino = e.target.elements["nuevo-paquete"].value.trim()
    resultado = funcionInsertarDestino(paquetes, nuevoDestino)
    console.log(resultado ? "Nuevo destino insertado exitosamente." : "Error al insertar destino")
    formAgregarDestino.reset()
}
)

const formBuscarDestino = document.querySelector("#buscar-form")
formBuscarDestino.addEventListener("submit", (e) => {
    e.preventDefault()
    const destinoABuscar = e.target.elements["buscar-paquete"].value.trim()
    const resultadoBusqueda = funcionBuscarDestino(paquetes, destinoABuscar)
    console.log(resultadoBusqueda)
    formBuscarDestino.reset()
}
)
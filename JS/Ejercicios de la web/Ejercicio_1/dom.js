
const mostrarPaquetes = document.querySelector("#mostrar-btn")

mostrarPaquetes.addEventListener("click", () => {
    funcionIterarArray(paquetes)
})


const formAgregarDestino = document.querySelector("#agregar-form")
formAgregarDestino.addEventListener("submit", (e) => {
    e.preventDefault()
    const nuevoDestino = e.target.elements["nuevo-paquete"].value.trim()
    funcionInsertarDestino(paquetes, nuevoDestino)
    console.log("Nuevo destino insertado exitosamente.")
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
document.addEventListener("DOMContentLoaded", () => {
  // DOM
  const btnManual = document.getElementById("manual")
  const btnAutomatico = document.getElementById("automatico")
  const divModoJuego = document.getElementById("modo-juego")
  const divJuegoManual = document.getElementById("juego-manual")
  const divJuego = document.getElementById("juego")
  const inputManual = divJuegoManual.querySelector("input")
  const btnSeleccionarManual = divJuegoManual.querySelector("button")
  const inputRespuesta = document.getElementById("respuesta")
  const form = document.getElementById("formulario")
  const resultadoContenedor = document.getElementById("resultado")
  const resultadoTexto = resultadoContenedor.querySelector("h2")

  // Estado del juego
  let numeroSecreto = null
  let intentos = []

  const btnReiniciar = crearBotonReinicio()
  form.querySelector("div").appendChild(btnReiniciar)

  function crearBotonReinicio() {
    const btn = document.createElement("button")
    btn.textContent = "¿Jugar de nuevo?"
    btn.className = "btn btn-outline-light mt-3 w-100 d-none"
    btn.type = "button"
    btn.addEventListener("click", reiniciarJuego)
    return btn
  }

  function mostrarVista(modo) {
    divModoJuego.classList.toggle("d-none", modo !== "modo")
    divJuegoManual.classList.toggle("d-none", modo !== "manual")
    divJuego.classList.toggle("d-none", modo !== "juego")
    btnReiniciar.classList.toggle("d-none", modo !== "fin")
  }

function actualizarResultado(texto, tipo = null) {
  resultadoTexto.innerHTML = texto

  const clasesColores = [
    "border-dark", "border-danger", "border-warning", "border-success",
    "text-dark", "text-danger", "text-warning", "text-success"
  ]

  resultadoContenedor.classList.remove(...clasesColores)

  switch (tipo) {
    case "error":
      resultadoContenedor.classList.add("border-danger", "text-danger")
      break
    case "warning":
      resultadoContenedor.classList.add("border-warning", "text-warning")
      break
    case "success":
      resultadoContenedor.classList.add("border-success", "text-success")
      break
    default:
      resultadoContenedor.classList.add("border-dark", "text-dark")
  }
}


  function validarNumero(valor) {
    const numero = parseInt(valor)
    if (isNaN(numero)) return { valido: false, mensaje: "Debes ingresar un número", tipo: "error" }
    if (numero < 1 || numero > 100) return { valido: false, mensaje: "El número debe estar entre 1 y 100", tipo: "warning" }
    return { valido: true, numero }
  }

  function iniciarJuegoConNumero(numero) {
    numeroSecreto = numero
    intentos = []
    mostrarVista("juego")
    actualizarResultado("¡Listo! Adivina el número")
  }

  function procesarIntento(intento) {
    intentos.push(intento)

    const diferencia = Math.abs(numeroSecreto - intento)
    if (intento === numeroSecreto) {
      mostrarVictoria()
    } else {
      mostrarError(diferencia)
    }
  }

  function mostrarVictoria() {
    actualizarResultado(
      `¡Felicidades! Adivinaste el número secreto<br>Intentos realizados: ${intentos.length}`,
      "success"
    )
    mostrarVista("fin")
  }

  function mostrarError(diferencia) {
    const mensaje =
      diferencia <= 5 ? "🔥 ¡Estás muy cerca!" :
      diferencia <= 15 ? "🌡️ Estás cerca" :
      "❄️ Estás lejos"
    actualizarResultado(`Ups, el número secreto es incorrecto.<br>${mensaje}<br>Intentos: ${intentos.length}`, "error")
  }

  function reiniciarJuego() {
    numeroSecreto = null
    intentos = []
    inputManual.value = ""
    inputRespuesta.value = ""
    actualizarResultado("Resultado?")
    mostrarVista("modo")
  }

  // Eventos
  btnManual.addEventListener("click", e => {
    e.preventDefault()
    mostrarVista("manual")
  })

  btnAutomatico.addEventListener("click", e => {
    e.preventDefault()
    iniciarJuegoConNumero(Math.floor(Math.random() * 100) + 1)
  })

  btnSeleccionarManual.addEventListener("click", e => {
    e.preventDefault()
    const { valido, numero, mensaje, tipo } = validarNumero(inputManual.value)
    if (!valido) {
      actualizarResultado(mensaje, tipo)
      return
    }
    iniciarJuegoConNumero(numero)
  })

  form.addEventListener("submit", e => {
    e.preventDefault()
    const { valido, numero, mensaje, tipo } = validarNumero(inputRespuesta.value.trim())
    if (!valido) {
      actualizarResultado(mensaje, tipo)
      return
    }
    inputRespuesta.value = ""
    procesarIntento(numero)
  })
})

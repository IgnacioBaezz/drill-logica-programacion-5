# Drill Lógica de Programación 5

Este proyecto consiste en un programa hecho en **JavaScript** que solicita al usuario adivinar un número secreto entre 1 y 100, validando cada intento hasta que acierte.

## 🧠 Objetivo

- Solicitar al usuario un número del 1 al 100 mediante un `input` en el DOM.
- Validar que el valor ingresado sea un número válido.
- Verificar si coincide con el número secreto (puede ser generado aleatoriamente o definido manualmente).
- Mostrar mensajes según el resultado:
  - Si falla: mostrar “Ups, el número secreto es incorrecto, vuelve a intentarlo.”
  - Si acierta: mostrar “Felicidades, adivinaste el número secreto” y listar todos los intentos anteriores.
- Repetir el proceso hasta que el usuario adivine correctamente.

## 📌 Ejemplos de funcionamiento

| Entrada del usuario | Respuesta esperada |
|---------------------|--------------------|
| 50 (si el secreto es 42) | Ups, el número secreto es incorrecto, vuelve a intentarlo. |
| 101                   | Entrada inválida. Intenta con un número entre 1 y 100. |
| 42 (si el secreto es 42) | Felicidades, adivinaste el número secreto.  

## 🛠️ Tecnologías utilizadas

- HTML  
- JavaScript  
- CSS  
- Bootstrap  
- Git y GitHub  

## 🚀 Cómo ejecutar el proyecto

1. Inicializa un repositorio Git en tu máquina local:
   ```bash
    git clone https://github.com/IgnacioBaezz/drill-logica-programacion-5.git

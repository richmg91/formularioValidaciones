import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); //seleccionar todos los inputs del formulario

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
     valida(input.target);
    });
});
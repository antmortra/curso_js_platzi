// Funcion para calcular precio con descuento

function precioFinal (precio,descuento) {
    return (precio*(100-descuento)/100);
    console.log(precioFinal);
}

// Interactuamos ahora con HTML


function calcularPrecio() {

const input1 = document.getElementById("inputPrecio");
const value = parseInt(input1.value);

const input2 = document.getElementById("inputDescuento");
const value2 = parseInt(input2.value);

const precioUltimo = precioFinal(value, value2);

const resultadoFinal = document.getElementById("resultadoFinal");
resultadoFinal.innerText = precioUltimo + "€";

}
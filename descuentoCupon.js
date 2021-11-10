// Funcion para calcular precio con descuento

function precioFinal (precio,descuento) {
    return (precio*(100-descuento)/100);
}


// Interactuamos ahora con HTML

const cupon = [
    "XFG",
    "XCV",
    "XDS",
];


function calcularPrecio() {

const input1 = document.getElementById("inputPrecio");
const value = parseInt(input1.value);

const input2 = document.getElementById("inputCupones");
const value2 = input2.value;

let descuento;

if (!cupon.includes(value2)) {
    alert("El cupon " + value2 + " no es valido");
}   else if (value2 === cupon[0]) {
    descuento = 15;
}   else if (value2 === cupon[1]) {
    descuento = 20;
}   else if (value2 === cupon[2]) {
    descuento = 25;
}

const precioUltimo = precioFinal(value, descuento);

const resultadoFinal = document.getElementById("resultadoFinal");

resultadoFinal.innerText = precioUltimo + "€";

}

// Crear un array con los cupones de descuento



// Cambiar el input de descuento por unos cupones y crear una variable descuento para asociarlo a los cupones

/* function calcularPrecio() {

    const inputPrice = document.getElementById(inputPrecio);
    const valueprice = inputPrice.value;

    const inputCupones = document.getElementById(inputCupones);
    const value2 = inputCupones.value;

    

    const precioConDescuento = precioFinal(valueprice, descuento);

    const resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerText = precioConDescuento + "€";

} */


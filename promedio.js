/* // Crear lista 

const lista1 = [
    100,
    200,
    300,
    500,
];

// Elaborar la formula de promedio

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length; */

// Calcular una funcion para cualquier lista

/* const lista = [];

function calcularMediaAritmetica(lista) {
    
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
} */

// Carcular la media aritmetica de cualquier lista mediante .reduce

const lista = [];

function calcularMediaAritmetica(lista) {

const sumaLista = lista.reduce(
    function (valorAcumulado, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);
const promedioLista = sumaLista / lista.length;

return promedioLista;
}


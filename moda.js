const lista = [];

function calcularModa(lista) {

const moda = {};

lista.map(function(x) {
    if (moda[x]) {
        moda[x] += 1;
    }   else {
        moda[x] = 1;
    }
});

const listaOrdenada = Object.entries(moda).sort(
    function(valorAcumulado, nuevoElemento) {
    return nuevoElemento[1] - valorAcumulado[1];
});

const elementoModa = listaOrdenada[0];

return elementoModa;
}
const lista = [];

function calcularMediana(lista) {
    
    const listaOrdenada = lista.sort(function(a, b) {
        return a -b;
    });
    
    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);

    function esPar(numerito) {
        if(numerito % 2 === 0) {
            return true;
        }   else {
            return false;
        }
    }
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = lista[mitadListaOrdenada - 1];
        const elemento2 = lista[mitadListaOrdenada];
        mediana = (elemento1 + elemento2) / 2;
    }   else {
        mediana = listaOrdenada[mitadListaOrdenada];
    }
        return mediana;
    }


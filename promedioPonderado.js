const notas = [
    {
        curso: "Educacion Fisica",
        notas: 10,
        creditos: 2   
    },
    {
        curso: "Programacion",
        notas: 8,
        creditos: 5.
    },
    {
        curso: "Finanzas Personales",
        notas: 7,
        creditos: 5,
    }
];

/* const arrayNotasCredito = notas.map(
    function(obj) {
        var rObj = {};
        rObj[obj] = obj.notas * obj.creditos;
        return rObj;
    }
); */

// Multiplicamos las notas por los creditos y creamos un nuevo array con los valores

const notasCredito = notas.map(
    function(notasObject) {
        return notasObject.notas * notasObject.creditos;
    }
);

// Sumamos todos los valores de notasCredito para tener el numerador de la formula

const numerador = notasCredito.reduce(
    function(valorAcumulado, valor) {
        return valorAcumulado + valor;
    }
);

// Sumamos todos los valores de Creditos para tener el denominador de la formula

const arrayDenominador = notas.map(
    function(obj) {
        return obj.creditos;
    }
);

const denominador = arrayDenominador.reduce(
    function(valorAcumulado, valor) {
        return valorAcumulado + valor;
    }
);

const promedioPonderado = numerador / denominador;


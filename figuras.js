<<<<<<< HEAD
// Codigo del Cuadrado

console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
 
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {

    return ladoCuadrado * ladoCuadrado;
}  

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base) {

    return lado1 + lado2 + base;
} 



function areaTriangulo(lado1, lado2, lado3) {
    const p = (lado1+lado2+lado3)/2;
    return Math.sqrt(p*(p-lado1)*(p-lado2)*(p-lado3));
} 

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");


function diametroCirculo(radio) {
    return radio + radio;
}

const pi = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 


function areaCirculo(radio) {
    return (radio * radio) * pi;
} 



// Aqui interacturamos con el HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Calcular Triangulo 

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("input1Triangulo");
    const input2 = document.getElementById("input2Triangulo");
    const input3 = document.getElementById("input3Triangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("input1Triangulo");
    const input2 = document.getElementById("input2Triangulo");
    const input3 = document.getElementById("input3Triangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const area = areaTriangulo(value1,value2,value3);
    alert(area);
}

// Calcular Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}
=======
// Codigo del Cuadrado

console.group("Cuadrado");

function perimetroCuadrado(ladoCuadrado) {
 
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado) {

    return ladoCuadrado * ladoCuadrado;
}  

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base) {

    return lado1 + lado2 + base;
} 



function areaTriangulo(lado1, lado2, lado3) {
    const p = (lado1+lado2+lado3)/2;
    return Math.sqrt(p*(p-lado1)*(p-lado2)*(p-lado3));
} 

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");


function diametroCirculo(radio) {
    return radio + radio;
}

const pi = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 


function areaCirculo(radio) {
    return (radio * radio) * pi;
} 



// Aqui interacturamos con el HTML 

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Calcular Triangulo 

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("input1Triangulo");
    const input2 = document.getElementById("input2Triangulo");
    const input3 = document.getElementById("input3Triangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("input1Triangulo");
    const input2 = document.getElementById("input2Triangulo");
    const input3 = document.getElementById("input3Triangulo");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const area = areaTriangulo(value1,value2,value3);
    alert(area);
}

// Calcular Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const area = areaCirculo(value);
    alert(area);
}
>>>>>>> 3cb660221811fe74ed3b05904f473131f88dbfb7

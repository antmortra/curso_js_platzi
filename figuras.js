// Codigo del Cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado mide " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("los lados del triangulo miden " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del Circulo

console.group("Circulo");

const radioCirculo = 4;
console.log("El radio del circulo mide:" + radioCirculo + "cm");
const diametroCirculo = 8;
const pi = 3.1415;

const circunferencia = diametroCirculo * pi;
console.log("La circunferencia es igual a: " + circunferencia + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

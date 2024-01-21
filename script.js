// Solicitar al usuario dos números
var numero1 = prompt("Ingrese el primer número:");
var numero2 = prompt("Ingrese el segundo número:");

// Convertir los valores ingresados a números
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Verificar si los valores son números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, ingrese números válidos.");
} else {
  // Determinar y mostrar el resultado
  if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
  } else if (numero1 < numero2) {
    alert(numero1 + " es menor que " + numero2);
  } else {
    alert("Ambos números son iguales");
  }
}
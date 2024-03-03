export function calcularPorcentaje(
  valorConocido: number,
  porcentajeDesconocido: number
): number {
  return (valorConocido * porcentajeDesconocido) / 100;
}

export function formatNumberToCurrency(number: number): string {
  const integerPart = Math.floor(number / 100);
  const decimalPart = number % 100;
  const formattedIntegerPart = integerPart.toLocaleString("es-ES");
  const formattedDecimalPart = decimalPart.toString().padStart(2, "0");
  return `${formattedIntegerPart}.${formattedDecimalPart}`;
}

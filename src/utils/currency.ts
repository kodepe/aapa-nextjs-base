export const FormatCurrencyTwoDecimals = (rawValue: string) => {
  const numberValue = rawValue.replace(/[^\d]/g, "");
  let formattedValue = numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  formattedValue = formattedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  formattedValue = formattedValue.replace(/\.0+$/, "");
  if (formattedValue.includes(".")) {
    formattedValue += "00";
  }
  return formattedValue;
};

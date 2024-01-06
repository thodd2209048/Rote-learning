export const capitalizeFirstLetter = (string) => {
  const firstChar = string.charAt(0);
  const uppercaseFirstChar = firstChar.toUpperCase();
  return uppercaseFirstChar + string.slice(1);
};

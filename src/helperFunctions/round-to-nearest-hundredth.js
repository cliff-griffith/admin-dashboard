/**
 * Rounds a number to the nearest hundredth and formats it as a currency string.
 * @param {number} number - The number to round.
 * @returns {string} The rounded number formatted as a currency string.
 */
export const roundToNearestHundredth = (number) => {
  const rounded = Math.round(number * 100) / 100;

  // if the rounded number is whole, add .00
  if (rounded % 1 === 0) {
    return `$${rounded}.00`;
  }

  return `$${rounded}`;
};

export function getRandomNumber(min : number, max : number) {
  // Generate a random number between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
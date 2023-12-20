export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export const genRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const isEven = (num: number): boolean => {
  return num % 2 === 0;
}

module.exports = {
  sum,
  genRandom,
  isEven,
}
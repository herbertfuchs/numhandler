import { sum, genRandom } from '../src';

describe('sum', () => {
  it('should correctly sum two numbers', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('genRandom', () => {
  it('should generate a random number within the specified range', () => {
    const min = 1;
    const max = 10;
    const randomNum = genRandom(min, max);
    
    expect(randomNum).toBeGreaterThanOrEqual(min);
    expect(randomNum).toBeLessThanOrEqual(max);
  });

  it('should generate int numbers', () => {
    const min = 1;
    const max = 10;
    const randomNum = genRandom(min, max);

    expect(Number.isInteger(randomNum)).toBe(true);
  });

  it('should generate numbers in random order', () => {
    const min = 1;
    const max = 10;
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const randomNumbers = numArray.map(() => genRandom(min, max));

    expect(randomNumbers.join('')).not.toBe('12345678910');
  });
});
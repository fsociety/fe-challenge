import { randomNumber } from './random-number';
describe('random-number helper', () => {
  it('should return value', () => {
    expect(randomNumber(1, 10)).toBeTruthy();
  });
  it('should return 4 digit value', () => {
    expect(randomNumber(1000, 9999)).toBeGreaterThan(999);
  });

  it('should return 4 or 5 digit value', () => {
    expect(randomNumber(1000, 99999)).toBeGreaterThan(999);
    expect(randomNumber(1000, 99999)).toBeLessThan(100000);
  });
});

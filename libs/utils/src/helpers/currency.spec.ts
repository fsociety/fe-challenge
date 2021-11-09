import { CurrencySign, CurrencyValue } from '../types/currency';
import { getCurrency, getCurrencySign } from './currency';
describe('currency helper', () => {
  it('should return correct currency label', () => {
    expect(getCurrency(CurrencyValue.TRY)?.label).toBe('Türk Lirası');
  });

  it('should return undefined with incorrect value', () => {
    expect(getCurrency('CHF' as CurrencyValue)).toBeUndefined();
  });

  it('should return correct currency sign', () => {
    expect(getCurrencySign(CurrencyValue.TRY)).toBe(CurrencySign.TRY);
  });
});

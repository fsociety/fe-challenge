export enum CurrencyValue {
  TRY = 'TRY',
  USD = 'USD',
  GBP = 'GBP',
}

export enum CurrencySign {
  TRY = '₺',
  USD = '$',
  GBP = '£',
}

export type CurrencyOption = {
  value: CurrencyValue;
  label: string;
  sign: string;
};

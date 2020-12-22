import {CurrencyFormatter} from 'react-native-currency-format';

export const getFormattedPrice = async (price, currency = 'BRL') => {
  console.log(price);
  const formattedPrice = await CurrencyFormatter.format(price, currency);
  return formattedPrice;
};

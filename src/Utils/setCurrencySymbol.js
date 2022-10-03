import {currencySymbols} from './Enums/currency_symbol'

export const setCurrencySymbol = (currency) => {
return currency === 'USD' ? currencySymbols.dolar  : currencySymbols.pesoArg
}

import CurrencyFormatter from 'currency-formatter'

export const formatPrice = (value, useSymbol = true, precision = 0) => {
  const result = CurrencyFormatter.format(Number(value), {
    symbol: 'Rp',
    decimal: ',',
    thousand: '.',
    precision,
    format: useSymbol ? '%s %v' : '%v' // %s is the symbol and %v is the value
  })
  return result
}

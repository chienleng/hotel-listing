export const PRICE_HIGH_LOW = 'PRICE_HIGH_LOW'
export const PRICE_LOW_HIGH = 'PRICE_LOW_HIGH'

const labels = {}
labels.PRICE_HIGH_LOW = 'Price (high-low)'
labels.PRICE_LOW_HIGH = 'Price (low-high)'

export const orderBySelections = [{
  label: labels[PRICE_HIGH_LOW],
  value: PRICE_HIGH_LOW
}, {
  label: labels[PRICE_LOW_HIGH],
  value: PRICE_LOW_HIGH
}]

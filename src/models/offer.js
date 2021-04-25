import Promotion from './promotion'
import DollarValue from './dollar-value'

export default class Offer {
  constructor({ promotion, name, displayPrice, savings, cancellationOption}) {
    this.promotion = new Promotion(promotion)
    this.name = name
    this.displayPrice = new DollarValue(displayPrice)
    this.savings = savings ? new DollarValue(savings) : new DollarValue({ amount: 0, currency: null })
    this.cancellationOption = cancellationOption.cancellationType || ''
  }
}

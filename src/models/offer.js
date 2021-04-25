import Promotion from './promotion'
import DollarValue from './dollar-value'

export class Offer {
  constructor({ promotion, name, displayPrice, savings, cancellationOption}) {
    this.promotion = new Promotion(promotion)
    this.name = name
    this.displayPrice = new DollarValue(displayPrice)
    this.savings = new DollarValue(savings)
    this.cancellationOption = cancellationOption
  }
}

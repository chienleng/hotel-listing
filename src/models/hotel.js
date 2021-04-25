import Property from './property'
import Offer from './offer'

export default class Hotel {
  constructor({id, property, offer}) {
    this.id = id,
    this.property = new Property(property)
    this.offer = new Offer(offer)
  }
}

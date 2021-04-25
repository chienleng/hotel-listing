import PreviewImage from './preview-image'
import Rating from './rating'

export default class Property {
  constructor({ propertyId, title, address, previewImage, rating }) {
    this.propertyId = propertyId
    this.title = title
    this.address = address
    this.previewImage = new PreviewImage(previewImage)
    this.rating = new Rating(rating)
  }
}

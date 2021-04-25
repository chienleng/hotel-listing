<template>
  <div class="hotel">
    <HotelImage
      :promo="imageProps.promo"
      :src="imageProps.src"
      :caption="imageProps.caption"
    />
    <HotelDetails
      :title="detailsProps.title"
      :address="detailsProps.address"
      :rating-type="detailsProps.ratingType"
      :rating-value="detailsProps.ratingValue"
      :room="detailsProps.room"
      :cancellation="detailsProps.cancellation"
    />
    <HotelPrice
      class="hotel-price"
      :price="priceProps.price"
      :priceCurrency="priceProps.priceCurrency"
      :savings="priceProps.savings"
      :savingsCurrency="priceProps.savingsCurrency"
    />
  </div>
</template>

<script>
import Hotel from '../../models/hotel'
import HotelImage from './Image'
import HotelDetails from './Details'
import HotelPrice from './Price'

export default {
  components: {
    HotelImage,
    HotelDetails,
    HotelPrice
  },

  props: {
    hotel: Hotel
  },

  computed: {
    imageProps() {
      return {
        promo: this.hotel.offer.promotion.title,
        src: this.hotel.property.previewImage.url,
        caption: this.hotel.property.previewImage.caption
      }
    },

    detailsProps() {
      return {
        title: this.hotel.property.title,
        address: this.hotel.property.address,
        ratingType: this.hotel.property.rating.ratingType,
        ratingValue: this.hotel.property.rating.ratingValue,
        room: this.hotel.offer.name,
        cancellation: this.hotel.offer.cancellationOption
      }
    },

    priceProps() {
      return {
        price: this.hotel.offer.displayPrice.amount,
        priceCurrency: this.hotel.offer.displayPrice.currency,
        savings: this.hotel.offer.savings.amount,
        savingsCurrency: this.hotel.offer.savings.currency
      }
    }
  }
}
</script>

<style scoped>
.hotel {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
}
.hotel-price {
  width: 300px;
}
</style>

<template>
  <div class="hotel-details">
    <div class="row">
      <h3>{{ title }}</h3>

      <Rating
        :type="ratingType"
        :value="ratingValue" />
    </div>

    <div class="address">{{ address }}</div>

    <a href="#" class="room">{{ room }}</a>

    <div class="cancellation">{{ cancellation }}</div>
  </div>
</template>

<script>
import Rating from './Rating'

export default {
  components: {
    Rating
  },
  props: {
    title: String,
    address: String,
    ratingType: String,
    ratingValue: Number,
    room: String,
    cancellation: String
  }
}
</script>

<style scoped>
.hotel-details {
  width: 100%;
  padding: 1rem;
}
.row {
  padding-top: 0;
  padding-bottom: 0;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
h3 {
  margin: 0 1rem 0 0;
  font-weight: 600;
}
.address {
  font-size: 12px;
  color: #999;
}
a.room {
  color: crimson;
  font-size: 12px;
}
.cancellation {
  margin-top: 2rem;
  color: darkgreen;
  font-size: 12px;
}
</style>

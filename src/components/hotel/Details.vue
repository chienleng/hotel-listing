<template>
  <div class="hotel-details">

    <h3>{{ title }}</h3>

        <!-- {{ ratingType }}
    {{ ratingValue }} -->


    <div class="address">{{ address }}</div>

    <a href="#" class="room">{{ room }}</a>

    <div class="cancellation">{{ cancellation }}</div>
  </div>
</template>

<script>
export default {
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
h3 {
  margin: 0;
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

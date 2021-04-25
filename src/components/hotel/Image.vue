<template>
  <div class="hotel-image">
    <span>{{ promo }}</span>
    <img :src="src" :alt="caption" />
  </div>
</template>

<script>
export default {
  props: {
    promo: String,
    src: String,
    caption: String
  }
}
</script>

<style scoped>
.hotel-image {
  padding: 0.5rem;
  position: relative;
}
.hotel-image span {
  position: absolute;
  top: 20px;
  background: white;
  color: crimson;
  padding: 5px 10px;
  font-size: 0.8em;
  font-weight: 700;
}
.hotel-image img {
  width: 145px;
  height: 125px;
}
</style>

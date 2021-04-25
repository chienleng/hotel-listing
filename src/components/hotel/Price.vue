<template>
  <div class="hotel-price">
    
    <div class="price-for">
      <strong>1</strong> night total (AUD)
    </div>

    <div class="display-price">
      <sup>$</sup>
      {{ price }}
    </div>

    <div class="savings">
      Save ${{ savings }}~
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    priceCurrency: String,
    savings: Number,
    savingsCurrency: String
  }
}
</script>

<style scoped>
.hotel-price {
  padding: 0.5rem;
  text-align: right;
}
.price-for {
  margin-top: 1.5rem;
  font-size: 10px;
}
.display-price {
  font-size: 36px;
}
.display-price sup {
  font-size: 20px;
}
.savings {
  margin-top: 0.5rem;
  color: crimson;
}
</style>

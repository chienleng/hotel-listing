<template>
  <div>
    <strong>{{ price }}</strong>
    {{ priceCurrency }}
    {{ savings }}
    {{ savingsCurrency }}
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

<template>
  <div>
    {{ promo }}
    <!-- <img :src="src" :alt="caption" /> -->
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

<template>
  <div>
    {{ title }}
    {{ address }}
    {{ ratingType }}
    {{ ratingValue }}
    {{ room }}
    {{ cancellation }}
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

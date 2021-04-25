<template>
  <span>
    <strong>{{ count }}</strong>
    <em>hotels in</em>
    <strong>{{ city }}.</strong>
  </span>
</template>

<script>
export default {
  props: {
    count: Number,
    city: String
  }
}
</script>

<style scoped>
em {
  margin: 0 3px;
}
</style>

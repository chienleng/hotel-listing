<template>
  <header>
    <img alt="Vue logo" src="@/assets/qantas-logo.png"> {{ hotels.length }}
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['hotels'])
  }
}
</script>

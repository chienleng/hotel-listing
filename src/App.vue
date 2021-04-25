<template>
  <div id="app">
    <AppHeader />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import AppHeader from './components/app/Header.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  },

  created() {
    this.fetchHotels()
  },

  methods: {
    ...mapActions(['fetchHotels'])
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>

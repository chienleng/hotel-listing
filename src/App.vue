<template>
  <div id="app">
    <AppHeader />

    <ol>
      <li
        v-for="(hotel) in hotels"
        :key="hotel.id"
      >
        <HotelItem :hotel="hotel" />
      </li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppHeader from './components/app/Header.vue'
import HotelItem from './components/hotel/Item'

export default {
  name: 'App',
  components: {
    AppHeader,
    HotelItem
  },

  computed: {
    ...mapState(['hotels'])
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

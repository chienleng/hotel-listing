<template>
  <div id="app">
    <AppHeader />

    <div class="row">
      <Summary
        :count="hotels.length"
        :city="'Sydney'"
      />
      <OrderBy
        :selected="orderBy"
        @order-change="handleOrderChange"
      />
    </div>

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
import { mapActions, mapMutations, mapState } from 'vuex'
import AppHeader from './components/app/Header.vue'
import Summary from './components/Summary'
import OrderBy from './components/OrderBy'
import HotelItem from './components/hotel/Item'

export default {
  name: 'App',
  components: {
    AppHeader,
    Summary,
    OrderBy,
    HotelItem
  },

  computed: {
    ...mapState(['hotels', 'orderBy'])
  },

  created() {
    this.fetchHotels()
  },

  methods: {
    ...mapMutations(['setOrderBy']),
    ...mapActions(['fetchHotels']),
    handleOrderChange(order) {
      this.setOrderBy(order)
    }
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
.row {
  display: flex;
  justify-content: space-between;
}
</style>

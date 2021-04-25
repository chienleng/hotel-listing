<template>
  <div id="app">
    <AppHeader />

    <div class="row">
      <Summary
        :count="listing.length"
        :city="'Sydney'"
      />
      <OrderBy
        :selected="orderBy"
        @order-change="handleOrderChange"
      />
    </div>

    <ol class="listing">
      <li
        v-for="(hotel) in listing"
        :key="hotel.id"
      >
        <HotelItem :hotel="hotel" />
      </li>
    </ol>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
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
    ...mapGetters(['listing']),
    ...mapState(['orderBy'])
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
  max-width: 1024px;
  margin: 2rem auto;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

}
.listing {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.listing li {
  padding: 0;
  margin: 0;
}
</style>

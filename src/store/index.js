import Vue from 'vue'
import Vuex from 'vuex'
import _orderBy from 'lodash.orderby'
import Hotel from '../models/hotel'
import { direction, PRICE_HIGH_LOW } from '../enums/order-by'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    orderBy: PRICE_HIGH_LOW,
    hotels: []
  },

  getters: {
    listing: state => 
      _orderBy(
        state.hotels,
        ['offer.displayPrice.amount'],
        [direction[state.orderBy]]
      )
  },

  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels
    },
    setOrderBy(state, orderBy) {
      state.orderBy = orderBy
    }
  },

  actions: {
    async fetchHotels({ commit }) {
      
      // Could be move somewhere else
      const hotels = await fetch('/api/data.json')
        .then((r) => r.json())
        .then(r => {
          const results = r.results
          const arr = []
          // data process and checks
          if (results) {
            results.forEach(d => {
              arr.push(new Hotel(d))
            })
          } else {
            console.warn('Cannot find results property.')
          }
          return arr
        })
      
      commit('setHotels', hotels)
    }
  }
})

export default store

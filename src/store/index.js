import Vue from 'vue'
import Vuex from 'vuex'
import _orderBy from 'lodash.orderby'
import dataProcess from '../modules/data/process'
import { direction, PRICE_HIGH_LOW } from '../enums/order-by'

Vue.use(Vuex)

export const storeModule = {
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
      const hotels = await fetch('/api/data.json')
        .then((r) => r.json())
        .then(r => {
          const results = r.results
          if (!results) {
            console.warn('Cannot find results property.')
            return []
          }
          return dataProcess(results)
        })
      
      commit('setHotels', hotels)
    }
  }
}

const store = new Vuex.Store(storeModule)

export default store

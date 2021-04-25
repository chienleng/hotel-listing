import Vue from 'vue'
import Vuex from 'vuex'
import Hotel from '../models/hotel'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hotels: []
  },

  getters: {
    hotels: state => state.hotels
  },

  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels
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

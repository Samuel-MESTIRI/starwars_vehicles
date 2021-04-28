import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vehicles: [],
    starships: []
  },
  mutations: {
    SET_VEHICLES (state, vehicles) {
      state.vehicles = vehicles
    },

    SET_STARSHIPS (state, starships) {
      state.starships = starships
    }
  },
  actions: {
    getVehicles({ commit }) {
      axios.get('http://localhost:8003/vehicles').then((vehicles) => {
        commit('SET_VEHICLES', vehicles.data.results)
      })
    },

    getStarships({ commit }) {
      axios.get('http://localhost:8003/starships').then((starships) => {
        commit('SET_STARSHIPS', starships.data.results)
      })
    }
  },
  modules: {
  }
})

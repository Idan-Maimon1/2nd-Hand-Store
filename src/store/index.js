import { createStore } from 'vuex'
import stayModule from './modules/stay-module.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayModule
  },
})

export default store

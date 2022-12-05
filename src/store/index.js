import { createStore } from 'vuex'
import productModule from './modules/product-module.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productModule
  },
})

export default store

import { productService } from '../../services/product-service.js'

export default {
  state: {
    products: [],
    filterBy: {
      category: "",
      minPrice: 0,
      maxPrice: 0,
    },
  },
  getters: {
    products({ products }) {
      return products
    },
    productById: (state) => (productId) => {
      const product = state.products.filter(product => product._id === productId)
      return product[0]
    },
    filterBy({ filterBy }) {
      return filterBy
    },
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadProducts({ commit, state }, { filter = true }) {
      if (filter) var products = await productService.query(state.filterBy)
      else var products = await productService.query()
      commit({ type: 'setProducts', products })
    },
    async getProductById(state, { productId }) {
      try {
        return await productService.getProductById(productId)
      } catch (err) {
        console.log(err)
      }
    },
    async setFilter({ dispatch, commit }, { filterBy }) {
      await productService.saveFilterBy(filterBy)
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadProducts' })
    },
  }
}

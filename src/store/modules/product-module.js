import { productService } from '../../services/product-service.js'

export default {
  state: {
    products: []
  },
  getters: {
    products({ products }) {
      return products
    },
    productById: (state) => (productId) => {
      const product = state.products.filter(product => product._id === productId)
      return product[0]
    },
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    }
  },
  actions: {
    async loadProducts({ commit }) {
      var products = await productService.query()
      commit({ type: 'setProducts', products })
    }
  }
}

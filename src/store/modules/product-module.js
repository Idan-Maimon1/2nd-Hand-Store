// import { productService } from '../../services/demo-product-service.js'

export default {
  state: {
    products: [{
      _id: "demoProd", condition: "new", Title: "product title",
      imgs: ["imgSrc", "imgSrc2", "imgSrc3"], tags: ["demotag", "demotag2", "demotag3"],
      category: "category", location: { country: "country", city: "city", },
      description: "desc", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd2", condition: "new", Title: "product2 title",
      imgs: ["imgSrc", "imgSrc2", "imgSrc3"], tags: ["demotag", "demotag2", "demotag3"],
      category: "category", location: { country: "country", city: "city", },
      description: "desc", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd3", condition: "new", Title: "product3 title",
      imgs: ["imgSrc", "imgSrc2", "imgSrc3"], tags: ["demotag", "demotag2", "demotag3"],
      category: "category", location: { country: "country", city: "city", },
      description: "desc", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }]
  },
  getters: {
    products({ products }) {
      return products
    },
    productById: (state) => (productId) => {
      const product = state.products.filter(product => product._id === productId)
      return product
    },
  },
}

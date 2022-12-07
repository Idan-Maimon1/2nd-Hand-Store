// import { productService } from '../../services/demo-product-service.js'

export default {
  state: {
    products: [{
      _id: "demoProd", condition: "new", title: "Steering wheel for ps5",
      price: "35$", imgs: ["ps5-wheel.jpg", "ps5-wheel2.jpg", "ps5-wheel3.jpg", "ps5-wheel4.jpg"], tags: ["ps5", "controller", "accessories"],
      category: "gaming", location: { country: "israel", city: "tel-aviv", },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda, commodi recusandae officia suscipit voluptatibus aut soluta! Repudiandae eaque quam facere esse assumenda facilis suscipit.Alias vero error magni ab quam.",
      seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd2", condition: "new", title: "product2 title", price: "25$",
      imgs: ["imgSrc", "imgSrc2", "imgSrc3"], tags: ["demotag", "demotag2", "demotag3"],
      category: "category", location: { country: "country", city: "city", },
      description: "desc", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd3", condition: "new", title: "product3 title", price: "45$",
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
      return product[0]
    },
  },
}

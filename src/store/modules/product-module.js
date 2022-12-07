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
      _id: "demoProd2", condition: "new", title: "Vertical mouse", price: "26$",
      imgs: ["vertical-mouse.jpg", "vertical-mouse2.jpg", "vertical-mouse3.jpg", "vertical-mouse4.jpg"], tags: ["mouse", "tech", "bluetooth"],
      category: "mouses & keyboards", location: { country: "israel", city: "haifa", },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed animi molestias quia ad ex necessitatibus expedita consequatur recusandae deserunt, at error porro architecto aspernatur provident neque eum impedit dolore.",
      seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd3", condition: "as new", title: "metal-detector", price: "90$",
      imgs: ["metal-detector.jpg", "metal-detector2.jpg", "metal-detector3.jpg", "metal-detector4.jpg"], tags: ["demotag", "demotag2", "demotag3"],
      category: "hobbies", location: { country: "israel", city: "ashkelon", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
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

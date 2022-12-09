// import { productService } from '../../services/demo-product-service.js'

export default {
  state: {
    products: [{
      _id: "demoProd", condition: "new", title: "Bulldog Butler Glass Holder", price: "45$",
      editedAt: 1670540830062, imgs: ["1108.jpg", "1109.jpg", "1110.jpg", "1111.jpg"], tags: ["art", "cute", "kitchen"],
      category: "art & decoration", location: { country: "israel", city: "holon", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd2", condition: "new", title: "neo (the matrix) pop figure", price: "30$",
      editedAt: 1670540830062, imgs: ["1093.jpg", "1092.jpg", "1094.jpg", "1095.jpg"], tags: ["pop", "figure", "hobbies"],
      category: "hobbies", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd3", condition: "as new", title: "stewie griffin necklace", price: "140$",
      editedAt: 1670540830062, imgs: ["1100.jpg", "1101.jpg", "1102.jpg", "1103.jpg"], tags: ["stainless", "jewelry", "necklace"],
      category: "jewelry", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd4", condition: "new", title: "poker ring", price: "30$",
      editedAt: 1670521619145, imgs: ["1080.jpg", "1081.jpg", "1082.jpg", "1083.jpg"], tags: ["ring", "jewelry"],
      category: "jewelry", location: { country: "israel", city: "ashdod", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd5", condition: "new", title: "saul goodman pop figure", price: "22$",
      editedAt: 1670521619145, imgs: ["1084.jpg", "1085.jpg", "1086.jpg", "1087.jpg"], tags: ["pop", "figure", "hobbies"],
      category: "hobbies", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd6", condition: "as new", title: "snake ring", price: "42$",
      editedAt: 1670521619145, imgs: ["1088.jpg", "1089.jpg", "1090.jpg", "1091.jpg"], tags: ["ring", "jewelry"],
      category: "jewelry", location: { country: "israel", city: "ramat gan", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd7", condition: "new", title: "Vertical mouse", price: "26$",
      editedAt: 1670421619145, imgs: ["vertical-mouse.jpg", "vertical-mouse2.jpg", "vertical-mouse3.jpg", "vertical-mouse4.jpg"], tags: ["mouse", "tech", "bluetooth"],
      category: "mouses & keyboards", location: { country: "israel", city: "haifa", },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed animi molestias quia ad ex necessitatibus expedita consequatur recusandae deserunt, at error porro architecto aspernatur provident neque eum impedit dolore.",
      seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd8", condition: "as new", title: "dali's clock", price: "22$",
      editedAt: 1670421619145, imgs: ["1096.jpg", "1097.jpg", "1098.jpg", "1099.jpg"], tags: ["art", "watch", "clock"],
      category: "art & decoration", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd9", condition: "new", title: "god of war pop figure", price: "29$",
      editedAt: 1670321619145, imgs: ["1104.jpg", "1105.jpg", "1106.jpg", "1107.jpg"], tags: ["pop", "figure", "hobbies"],
      category: "hobbies", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd10", condition: "new", title: "Steering wheel for ps5",
      price: "35$", editedAt: 1670321619145, imgs: ["ps5-wheel.jpg", "ps5-wheel2.jpg", "ps5-wheel3.jpg", "ps5-wheel4.jpg"], tags: ["ps5", "controller", "accessories"],
      category: "gaming", location: { country: "israel", city: "tel-aviv", },
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda, commodi recusandae officia suscipit voluptatibus aut soluta! Repudiandae eaque quam facere esse assumenda facilis suscipit.Alias vero error magni ab quam.",
      seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd11", condition: "as new", title: "chained shark necklace", price: "30$",
      editedAt: 1670321619145, imgs: ["1112.jpg", "1113.jpg", "1114.jpg", "1115.jpg"], tags: ["stainless", "jewelry", "necklace"],
      category: "jewelry", location: { country: "israel", city: "tel aviv", },
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere et rerum, nesciunt aliquid quos laudantium possimus? Voluptate, exercitationem, facilis saepe rem error modi fugit optio necessitatibus maxime dolorem consequuntur tenetur", seller: { _id: "demoSeller", name: "demoseller", phone: "0541111111", }
    }, {
      _id: "demoProd12", condition: "as new", title: "metal-detector", price: "90$",
      editedAt: 1670211619145, imgs: ["metal-detector.jpg", "metal-detector2.jpg", "metal-detector3.jpg", "metal-detector4.jpg"], tags: ["demotag", "demotag2", "demotag3"],
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

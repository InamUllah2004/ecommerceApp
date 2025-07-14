// src/stores/productStore.js
import { defineStore } from 'pinia'
import { Product } from './product.js'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products')) || [],
    currentProduct:-1
  }),

  actions: {
    addProduct(name, price, category, stock, image) {
      const newProduct = new Product(name, price, category, stock, image)
      this.products.push(newProduct)
      this.saveToLocalStorage()
    },

    removeProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('products', JSON.stringify(this.products))
    },

    resetProducts() {
      this.products = []
      localStorage.removeItem('products')
      localStorage.setItem('lastProductId', '0')
    },
    setCurrentProductId(id) {
     this.currentProduct = id
     localStorage.setItem('currentProduct', id)
    },


    seedProducts() {
      if (this.products.length > 0) return

      const defaultProducts = [
        new Product('Nike Phantom GX', 8499, 'Football Shoes', 5, './src/assets/s1.jpg'),
        new Product('Nike Mercurial Vapor', 7899, 'Football Shoes', 4, './src/assets/s2.jpg'),
        new Product('Nike Tiempo Legend', 6999, 'Football Shoes', 6, './src/assets/s3.jpg'),
        new Product('Nike Zoom Superfly', 8999, 'Football Shoes', 3, './src/assets/s4.jpg'),
        new Product('Nike Phantom Luna', 8299, 'Football Shoes', 7, './src/assets/s5.jpg'),
        new Product('Nike Air Zoom Ultra', 8599, 'Football Shoes', 6, './src/assets/s6.jpg'),
        new Product('Nike Mercurial Dream Speed', 7799, 'Football Shoes', 8, './src/assets/s7.jpg'),
        new Product('Nike Phantom Vision', 8199, 'Football Shoes', 4, './src/assets/s8.jpg'),
        new Product('Nike Tiempo 9 Elite', 6999, 'Football Shoes', 5, './src/assets/s9.jpg'),
        new Product('Nike Air Zoom Mercurial', 8499, 'Football Shoes', 9, './src/assets/s10.jpg'),
        new Product('Nike Premier III', 6299, 'Football Shoes', 7, './src/assets/s11.jpg'),
        new Product('Nike Streetgato', 5799, 'Football Shoes', 10, './src/assets/s12.jpg'),
        new Product('Nike Phantom GT2', 7999, 'Football Shoes', 4, './src/assets/s13.jpg'),
        new Product('Nike Phantom VSN 2', 7599, 'Football Shoes', 6, './src/assets/s14.jpg'),
        new Product('Nike React Gato', 6499, 'Football Shoes', 5, './src/assets/s15.jpg'),
        new Product('Nike TiempoX Proximo', 6999, 'Football Shoes', 3, './src/assets/s16.jpg'),
        new Product('Nike Mercurial Superfly 8', 8999, 'Football Shoes', 4, './src/assets/s17.jpg'),
        new Product('Nike Lunar Gato II', 6799, 'Football Shoes', 8, './src/assets/s18.jpg'),
        new Product('Nike Phantom Elite', 8899, 'Football Shoes', 6, './src/assets/s19.jpg')
      ]

      this.products = defaultProducts
      this.saveToLocalStorage()
    },

    seedShirts() {
      const alreadySeeded = this.products.some(p => p.category === 'Shirts')
      if (alreadySeeded) return

      const shirts = [
        new Product('Nike Tee Black', 2999, 'Shirts', 10, './src/assets/c1.jpg'),
        new Product('Nike Dri-Fit Blue', 3499, 'Shirts', 8, './src/assets/c2.jpg'),
        new Product('Nike Air White', 3299, 'Shirts', 6, './src/assets/c3.jpg'),
        new Product('Nike Pro Red', 3199, 'Shirts', 12, './src/assets/c4.jpg'),
        new Product('Nike Training Gray', 2899, 'Shirts', 5, './src/assets/c5.jpg'),
        new Product('Nike Fit Dry', 2799, 'Shirts', 7, './src/assets/c6.jpg'),
        new Product('Nike Swoosh', 2599, 'Shirts', 10, './src/assets/c7.jpg'),
        new Product('Nike Vapor Tee', 2699, 'Shirts', 4, './src/assets/c8.jpg'),
        new Product('Nike Strike', 2999, 'Shirts', 9, './src/assets/c9.jpg'),
        new Product('Nike Pro Max', 3199, 'Shirts', 6, './src/assets/c10.jpg'),
        new Product('Nike Futura', 3099, 'Shirts', 3, './src/assets/c11.jpg'),
      ]

      this.products = [...this.products, ...shirts]
      this.saveToLocalStorage()
    }
  }
})

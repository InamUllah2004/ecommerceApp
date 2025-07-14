// src/stores/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] // [{ productId, quantity }]
  }),

  actions: {
    addToCart(productId, quantity = 1) {
      const existing = this.cartItems.find(item => item.productId === productId)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.cartItems.push({ productId, quantity })
      }
      this.saveCart()
    },

    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter(item => item.productId !== productId)
      this.saveCart()
    },

    clearCart() {
      this.cartItems = []
      localStorage.removeItem('cartItems')
      alert("cart cleared")
    },

    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    }
  }
})

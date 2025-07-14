import { defineStore } from 'pinia'
import { Order } from './order'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: JSON.parse(localStorage.getItem('orders')) || []
   }),

  actions: {
    addOrder(customerEmail, items) {
      const newOrder = new Order(customerEmail, items)
      this.orders.push(newOrder)
      this.saveToLocalStorage()
    },

    removeOrder(id) {
      this.orders = this.orders.filter(o => o.id !== id)
      this.saveToLocalStorage()
    },

    resetOrders() {
      this.orders = []
      localStorage.removeItem('orders')
      localStorage.setItem('lastOrderId', '0')
    },

    saveToLocalStorage() {
      localStorage.setItem('orders', JSON.stringify(this.orders))
    },
    clearOrders() {
  this.orders = []
  localStorage.setItem('orders', JSON.stringify(this.orders)) // if you're storing them in localStorage
}

  }
})

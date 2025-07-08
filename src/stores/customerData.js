import { defineStore } from 'pinia'
import { Customer } from './customer'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: JSON.parse(localStorage.getItem('customers')) || []
  }),

  actions: {
    addCustomer(name, email, password) {
      const newCustomer = new Customer(name, email, password)
      this.customers.push(newCustomer)
      this.saveToLocalStorage()
    },

    removeCustomer(id) {
      this.customers = this.customers.filter(c => c.id !== id)
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('customers', JSON.stringify(this.customers))
    }
  }
})

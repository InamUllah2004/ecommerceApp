import { defineStore } from 'pinia'
import { Customer } from './customer'

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customers: JSON.parse(localStorage.getItem('customers')) || [],
     currentEmail: '',
     currentRole: ''
  }),

  actions: {
    addCustomer(name, email, password,role) {
      const newCustomer = new Customer(name, email, password,role)
      this.customers.push(newCustomer)
      this.saveToLocalStorage()
    },

    removeCustomer(id) {
      this.customers = this.customers.filter(c => c.id !== id)
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('customers', JSON.stringify(this.customers))
    },
    seedAdmin() {
      const hasAdmin = this.customers.some(c => c.role === 'admin')
      if (!hasAdmin) {
        const defaultAdmin = new Customer('Admin', 'admin@gmail.com', 'Admin123', 'admin')
        this.customers.push(defaultAdmin)
        this.saveToLocalStorage()
      }
    }
  }
})

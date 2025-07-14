export class Order {
  static lastId = parseInt(localStorage.getItem('lastOrderId')) || 0

  constructor(customerEmail, items) {
    Order.lastId++
    this.id = Order.lastId
    this.customerEmail = customerEmail
    this.items = items // array of { productId, quantity, price }
    this.totalPrice = this.calculateTotal()

    // Save updated order ID
    localStorage.setItem('lastOrderId', Order.lastId.toString())
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity)
    }, 0)
  }
}

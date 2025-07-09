
export class Product {
  static lastId = parseInt(localStorage.getItem('lastProductId')) || 0

  constructor(name, price, category, stock, image) {
    Product.lastId++
    this.id = Product.lastId
    this.name = name
    this.price = price
    this.category = category
    this.stock = stock
    this.image = image

    // Save the updated ID
    localStorage.setItem('lastProductId', Product.lastId.toString())
  }
}

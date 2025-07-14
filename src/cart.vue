<template>
  <div class="cart-container">
    <h2>Your Cart</h2>

    <div v-if="cartItems.length > 0">
      <div
        v-for="(item, index) in cartItems"
        :key="index"
        class="cart-item"
      >
        <div v-if="getProduct(item.productId)">
          <img :src="getProduct(item.productId).image" class="cart-image" />
          <div class="cart-details">
            <p><strong>{{ getProduct(item.productId).name }}</strong></p>
            <p>Qty: {{ item.quantity }}</p>
            <p>Price: Rs {{ getProduct(item.productId).price }}</p>
            <p>Total: Rs {{ getProduct(item.productId).price * item.quantity }}</p>
          </div>
          <button @click="removeFromCart(item.productId)">Remove</button>
        </div>
      </div>

      <div class="total-section">
        <p><strong>Total Items:</strong> {{ totalItems }}</p>
        <p><strong>Total Amount:</strong> Rs {{ totalPrice }}</p>
      </div>

      <button @click="placeFinalOrder">Place Final Order</button>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
    <button @click="handleBack" >Back to Home Page</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from './stores/cartData'
import { useProductStore } from './stores/productData'
import { useOrderStore } from './stores/orderData'
import { useCustomerStore } from './stores/customerData'
import { useRouter} from 'vue-router'
const router=useRouter()
const cartStore = useCartStore()
const productStore = useProductStore()
const orderStore = useOrderStore()
const customerStore = useCustomerStore()

const cartItems = computed(() => cartStore.cartItems)
const currentEmail = customerStore.currentEmail

function getProduct(id) {
  return productStore.products.find(p => p.id === id)
}

function removeFromCart(id) {
  cartStore.removeFromCart(id)
}
function handleBack(){
  router.push("/dash")
}

const totalItems = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
)

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => {
    const product = getProduct(item.productId)
    return product ? sum + product.price * item.quantity : sum
  }, 0)
)

function placeFinalOrder() {
  if (!currentEmail || cartItems.value.length === 0) {
    alert('Missing email or cart is empty.')
    return
  }

  for (const item of cartItems.value) {
    const prod = getProduct(item.productId)
    if (prod) {
      orderStore.addOrder(currentEmail, [
        { productId: item.productId, quantity: item.quantity, price: prod.price }
      ])
    }
  }

  cartStore.clearCart()
  alert('Order placed successfully!')
}
</script>

<style scoped>
.cart-container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  background: #f6f6f6;
  border-radius: 12px;
  text-align: center;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.cart-image {
  width: 100px;
  height: auto;
}

.cart-details {
  text-align: left;
}

.total-section {
  margin-top: 20px;
  background: #e1f7e7;
  padding: 10px;
  border-radius: 8px;
}

button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #16ad80;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>

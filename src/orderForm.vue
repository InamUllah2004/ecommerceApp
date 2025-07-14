<template>
  <div class="order-form">
    <h2>Confirm Your Order</h2>

    <!-- Section: Selected Product -->
    <div v-if="product">
      <p><strong>Email:</strong> {{ currentEmail }}</p>
      <p><strong>Product ID:</strong> {{ product.id }}</p>
      <img :src="product.image" alt="Product Image" class="product-image" />

      <div>
        <input
          type="number"
          v-model.number="quantity"
          :max="product.stock"
          min="1"
          placeholder="Enter Quantity"
        />
      </div>

      <button @click="addToCart">Add to Cart</button>
      <button @click="goToCartPage">Go to Cart</button>
      <button @click="backToHome">Back to Home</button>
    </div>

    <!-- If product not found -->
    <div v-else>
      <p>No product selected.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from './stores/productData'
import { useCartStore } from './stores/cartData'
import { useCustomerStore } from './stores/customerData'

// Stores
const productStore = useProductStore()
const cartStore = useCartStore()
const customerStore = useCustomerStore()
const router = useRouter()

// State
const currentEmail = customerStore.currentEmail
const selectedId = productStore.currentProduct || localStorage.getItem('currentProduct')
const product = ref(null)
const quantity = ref(1)

// Load product and clear cart on mount
onMounted(() => {
  product.value = productStore.products.find(p => p.id == selectedId)
})

// Add product to cart
function addToCart() {
  if (!product.value || quantity.value < 1 || quantity.value > product.value.stock) {
    alert('Invalid quantity or product')
    return
  }

  cartStore.addToCart(product.value.id, quantity.value)
  alert('Product added to cart!')
  quantity.value = 1
}

// Navigate to cart page
function goToCartPage() {
  router.push('/cart')
}
function backToHome(){
    router.push('/dash')
}
</script>

<style scoped>
.order-form {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f6f6f6;
  border-radius: 12px;
  text-align: center;
}

.product-image {
  width: 200px;
  height: auto;
  margin: 10px 0;
}

input {
  padding: 10px;
  margin: 10px 0;
  width: 60%;
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

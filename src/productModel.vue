<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-box">
      <img :src="product.image" :alt="product.name" />
      <h2>{{ product.name }}</h2>
      <p><strong>Price:</strong> Rs {{ product.price }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <button @click="$emit('close')">Close</button>
      <button @click="handleOrder">Buy Now</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from './stores/productData'
import { useCartStore } from './stores/cartData'

const cartStore = useCartStore()



const productStore = useProductStore()
const router = useRouter()

const props = defineProps({
  product: Object
})

function handleOrder() {
  productStore.currentProduct = props.product.id  
  router.push('/orderForm')
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-box {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
}

.modal-box img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.modal-box button {
  background-color: #16ad80;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
}
</style>

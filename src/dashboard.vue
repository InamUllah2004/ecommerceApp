<template>
  <Header :role="store.currentRole" class="header" />

  <!-- FOOTBALL SHOES SECTION -->
  <div class="Skills" v-if="store.currentRole==='customer'">
   <h1 class="Heading1">Football Shoes:</h1>
    <div class="image-gallery">
      <div class="gallery-grid">
        <div
          v-for="product in footballShoes"
          :key="product.id"
          class="product-card"
          @click="showDetails(product)"
        >
          <img :src="product.image" :alt="product.name" />
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">Rs {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- SHIRTS SECTION -->
  <div class="Skills" v-if="store.currentRole==='customer'">
    <h1 class="Heading1" style="margin-top: 50px ;position:relative">Shirts:</h1>
    <div class="image-gallery">
      <div class="gallery-grid">
        <div
          v-for="product in shirts"
          :key="product.id"
          class="product-card"
          @click="showDetails(product)"
        >
          <img :src="product.image" :alt="product.name" />
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">Rs {{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- PRODUCT MODAL -->
  <ProductModal
    v-if="selectedProduct"
    :product="selectedProduct"
    @close="closeModal"
  />
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCustomerStore } from './stores/customerData'
import { useProductStore } from './stores/productData'
import Header from './components/Header.vue'
import ProductModal from './productModel.vue'

const store = useCustomerStore()
const productStore = useProductStore()

// Seed data on first mount
onMounted(() => {
  productStore.seedProducts()
  productStore.seedShirts()
})

const selectedProduct = ref(null)

function showDetails(product) {
  selectedProduct.value = product
  productStore.setCurrentProductId(product.id) 
}

function closeModal() {
  selectedProduct.value = null
}

// ⬇️ Separate products by category
const footballShoes = computed(() =>
  productStore.products.filter(p =>
    p.category.toLowerCase().includes('football shoes')
  )
)

const shirts = computed(() =>
  productStore.products.filter(p =>
    p.category.toLowerCase() === 'shirts'
  )
)
</script>



<style scoped>

.image-gallery {
  position: relative;
  margin: 80px auto;
  padding: 30px;
  background-color: #16ad80;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  max-width: 1100px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  justify-items: center;
}

.product-card {
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  width: 160px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-name {
  font-weight: bold;
  margin-bottom: 6px;
}

.product-price {
  color: #128f68;
  font-size: 14px;
}

.Heading1 {
  position: absolute;
  color: white;
  text-decoration: underline;
  margin-top: -55px;
  margin-left: 170px;
}
</style>

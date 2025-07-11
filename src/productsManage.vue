<template>
  <Header :role="store.currentRole" class="header" />

  <div class="carousel-container">
    <div
      class="carousel"
      ref="carouselRef"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
    >
      <div
        v-for="(product, index) in productStore.products"
        :key="product.id"
        class="product-card"
        :class="{ focused: index === focusedIndex }"
      >
        <img :src="product.image" :alt="product.name" />
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">Rs {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useCustomerStore } from './stores/customerData'
import { useProductStore } from './stores/productData'

const store = useCustomerStore()
const productStore = useProductStore()

const carouselRef = ref(null)
const focusedIndex = ref(0)

const isDragging = ref(false)
let startX = 0
let scrollLeft = 0

function startDrag(e) {
  isDragging.value = true
  startX = e.pageX - carouselRef.value.offsetLeft
  scrollLeft = carouselRef.value.scrollLeft
}

function onDrag(e) {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - carouselRef.value.offsetLeft
  const walk = (x - startX) * 1.5 // speed multiplier
  carouselRef.value.scrollLeft = scrollLeft - walk
}

function stopDrag() {
  isDragging.value = false
}

// Update the focused card index on scroll
function updateFocusedIndex() {
  const scrollLeft = carouselRef.value.scrollLeft
  const itemWidth = 340
  focusedIndex.value = Math.round(scrollLeft / itemWidth)
}

onMounted(() => {
  carouselRef.value?.addEventListener('scroll', updateFocusedIndex)
})
onBeforeUnmount(() => {
  carouselRef.value?.removeEventListener('scroll', updateFocusedIndex)
})
</script>

<style scoped>
.header {
  margin-top: 20px;
  height: 60px;
  border-radius: 7px;
  color: white;
}

.carousel-container {
  max-width: 100%;
  overflow: hidden;
  padding: 50px 0;
  background-color: #1c1c1c;
  cursor: grab;
}

.carousel {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px 100px;
  scroll-behavior: smooth;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.product-card {
  scroll-snap-align: center;
  background: white;
  color: black;
  border-radius: 16px;
  padding: 20px;
  width: 300px;
  height: 400px;
  flex-shrink: 0;
  text-align: center;
  transition: all 0.4s ease;
  opacity: 0.3;
  transform: scale(0.9);
  filter: blur(2px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}
.product-card img {
  max-width: 100%;
  max-height: 220px; /* ✅ Limit image height */
  object-fit: contain;
  margin: 0 auto;
  display: block;
}


.product-card.focused {
  transform: scale(1.2);
  opacity: 1;
  filter: none;
  z-index: 10;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
}

.product-name {
  font-weight: bold;
  margin-top: 15px;
  font-size: 18px;
}

.product-price {
  color: green;
  font-size: 16px;
  margin-top: 5px;
}
</style>

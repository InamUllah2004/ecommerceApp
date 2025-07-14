<template>
     <Header :role="'seller'" class="header" />
  <div class="con1">
    <div class="form-image-container">
      <!-- Form -->
      <form class="prod" @submit.prevent="addProduct">
        <input type="text" v-model="name" placeholder="Product Name" required />
        <input type="number" v-model="price" placeholder="Price" required />
        <input type="text" v-model="category" placeholder="Category" required />
        <input type="number" v-model="stock" placeholder="Stock Quantity" required />
        <input type="file" class="img1" @change="handleImageUpload" accept="image/*" required />
        <button type="submit">Add Product</button>
      </form>

      <!-- Image Preview -->
      <div class="preview-container" v-if="imagePreview">
        <img :src="imagePreview" alt="Image Preview" class="imgAdjust" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { Product } from './stores/product'
import Header from './components/header.vue'
const name = ref('')
const price = ref('')
const category = ref('')
const stock = ref('')
const imageBase64 = ref('')
const imagePreview = ref('')

// Handle file input
const handleImageUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imageBase64.value = reader.result // base64 string
      imagePreview.value = reader.result // show preview
    }
    reader.readAsDataURL(file)
  }
}

const addProduct = () => {
  const newProduct = new Product(
    name.value,
    Number(price.value),
    category.value,
    Number(stock.value),
    imageBase64.value // this is now the image in base64
  )

  const existing = JSON.parse(localStorage.getItem('products')) || []
  existing.push(newProduct)
  localStorage.setItem('products', JSON.stringify(existing))

  // Reset fields
  name.value = ''
  price.value = ''
  category.value = ''
  stock.value = ''
  imageBase64.value = ''
  imagePreview.value = ''
}
</script>

<style scoped>
.con1 {
  display: flex;
  justify-content: center;
  padding: 40px;
  background-color: #16ad80;
  width: 80%;
  border-radius: 3rem;
  margin: 100px auto;
}

.form-image-container {
  display: flex;
  gap: 40px;
  align-items: flex-start;
}

.prod {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}

input, button {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}

button {
  background-color: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

.img1 {
  background-color: white;
}

.preview-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgAdjust {
  width: 400px;
  height: auto;
  border-radius: 10px;
  object-fit: contain;
}

</style>

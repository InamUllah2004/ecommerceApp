<template>
    <Header :role="'admin'" />
  <div class="graphs">
    <canvas id="categoryChart" width="400" height="200"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useProductStore } from './stores/productData'
import Header from './components/Header.vue'

const productStore = useProductStore()


const countShirts = ref(0)
const countShoes = ref(0)

function productCount() {
  countShirts.value = 0
  countShoes.value = 0

  productStore.products.forEach(product => {
    const category = product.category.toLowerCase().trim()
    if (category === 'shirts') {
      countShirts.value++
    } else if (category === 'football shoes') {
      countShoes.value++
    }
  })
}


onMounted(() => {
  productCount()

  const ctx = document.getElementById('categoryChart').getContext('2d')
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Shirts', 'Football Shoes'],
    datasets: [{
      label: 'Product Count by Category',
      data: [countShirts.value, countShoes.value],
      backgroundColor: ['#f87171', '#60a5fa']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const total = countShirts.value + countShoes.value
            const value = context.parsed
            const percentage = ((value / total) * 100).toFixed(1)
            return `${context.label}: ${value} (${percentage}%)`
          }
        }
      }
    }
  }
})
})
</script>

<style>
.graphs {
  max-width: 600px;
  margin: 40px auto;
}
</style>

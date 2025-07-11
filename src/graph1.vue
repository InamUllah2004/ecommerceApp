<template>
    <Header :role="'admin'" />
  <div class="graphs">
    <canvas id="categoryChart" width="400" height="200"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useCustomerStore } from './stores/customerData'
import Header from './components/Header.vue';


const customerStore=useCustomerStore();


const countAdmin = ref(0)
const countCustomer1 = ref(0)
const countSeller = ref(0)

function productCount() {
  countAdmin.value=0;
  countCustomer1.value=0;
  countSeller.value=0;

 customerStore.customers.forEach(customer => {
  const role = (customer.role || '').toLowerCase().trim()
  if (role === 'admin') {
    countAdmin.value++
  } else if (role === 'seller') {
    countSeller.value++
  } else {
    countCustomer1.value++
  }
})

}


onMounted(() => {
  productCount()

  const ctx = document.getElementById('categoryChart').getContext('2d')
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Admin', 'Seller','Customers'],
    datasets: [{
      label: 'Product Count by Category',
      data: [countAdmin.value, countSeller.value,countCustomer1.value],
      backgroundColor: ['#f87171', '#60a5fa','#fff9c4']
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
            const total = countSeller.value + countAdmin.value+countCustomer1.value
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

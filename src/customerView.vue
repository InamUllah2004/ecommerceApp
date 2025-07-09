<template>
  <div class="customer-view">
    <h2>Registered Customers</h2>

    <div v-if="customers.length > 0">
      <ul>
        <li v-for="customer in customers" :key="customer.id">
          <strong>{{ customer.name }}</strong> — {{ customer.email }} - {{ customer.role }}
         
        </li>
      </ul>
    </div>
    <p v-else>No customers found.</p>
  </div>
</template>


<script setup>
import { useCustomerStore } from './stores/customerData' // adjust the path if needed

const store = useCustomerStore()
const customers = store.customers // reactive array of customers
</script>


<style scoped>
.customer-view {
  max-width: 600px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

.customer-view ul {
  padding-left: 20px;
}

.customer-view li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>

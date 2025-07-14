<template>
    <Header :role="'customer'" class="header" />
  <div class="profile-container" v-if="customer">
    <h2>Your Profile</h2>

    <div class="profile-card">
      <p><strong>Name:</strong> {{ customer.name }}</p>
      <p><strong>Email:</strong> {{ customer.email }}</p>
      <p><strong>Role:</strong> {{ customer.role }}</p>
    </div>
  </div>

  <div v-else>
    <p>Customer not found or not logged in.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCustomerStore } from './stores/customerData'
import Header from './components/Header.vue'
const customerStore = useCustomerStore()

// Get current email
const currentEmail = customerStore.currentEmail

// Find the current customer by email
const customer = computed(() =>
  customerStore.customers.find(c => c.email === currentEmail)
)
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-card p {
  margin: 10px 0;
  font-size: 16px;
}
</style>

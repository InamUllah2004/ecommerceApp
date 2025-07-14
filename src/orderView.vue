<template>
  <div class="order-view">
    <h2>All Orders</h2>

    <div v-if="orders.length > 0">
      <div
        v-for="order in orders"
        :key="order.id"
        class="order-card"
      >
        <p><strong>Order ID:</strong> {{ order.id }}</p>
        <p><strong>Customer Email:</strong> {{ order.customerEmail }}</p>
        <p><strong>Date:</strong> {{ order.date }}</p>

        <div v-for="(item, index) in order.items" :key="index" class="item-row">
          <p>Product ID: {{ item.productId }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: Rs {{ item.price }}</p>
          <p>Total: Rs {{ item.quantity * item.price }}</p>
        </div>

        <hr />
      </div>
    </div>

    <div v-else>
      <p>No orders placed yet.</p>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from './stores/orderData'
import { onMounted, ref } from 'vue'

const orderStore = useOrderStore()
const orders = ref([])

onMounted(() => {
  orders.value = orderStore.orders
})
</script>

<style scoped>
.order-view {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
}

.order-card {
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.item-row {
  background: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
}
</style>

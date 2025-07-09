<template>
  <header class="header">
    <nav class="nav">
      <template v-if="role === 'customer'">
        <a href="#">Home</a>
        <a href="#">Orders</a>
        <a href="#">Profile</a>
      </template>

      <template v-else-if="role === 'seller'">
        <a href="#">Inventory</a>
        <a href="#">Orders</a>
        <a href="#">Reports</a>
      </template>
    </nav>
  </header>
</template>

<script setup>
const props = defineProps(['role'])
</script>

<style scoped>
.header {
  background-color: #16ad80;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}

/* ✅ This is very important */
.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

/* ✅ Style for all links */
.nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

/* ✅ Hover effect */
.nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

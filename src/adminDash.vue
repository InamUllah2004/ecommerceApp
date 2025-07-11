<template>
    
    <Header :role="store.currentRole" />
    
</template>

<script setup>
import Header from '../components/Header.vue' // ✅ Adjust path if needed
import { useCustomerStore } from '../stores/customerData' // ✅ Import your store

const store = useCustomerStore()
</script>

<style scoped>



</style>

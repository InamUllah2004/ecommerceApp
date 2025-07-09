<template>
  <Header :role="store.currentRole" class="header"/>
</template>

<script setup>
import { useCustomerStore } from './stores/customerData'
import Header from './components/Header.vue' // ✅ Capital 'H' to match actual filename

const store = useCustomerStore()
</script>

<style scoped>
.header{
    margin-top:20px;
    height:60px;
    border-radius: 7px;
    color:white;
}
</style>
<template>
  <header :class="role === 'admin' ? 'sidebar' : 'header'">
    <nav class="nav">
      <template v-if="role === 'customer'">
        <a @click="handleclick6">Home</a>
        <a @click="handleclick7">Profile</a>
      </template>

      <template v-else-if="role === 'seller'">
        <router-link to="/productManage">Manage Products</router-link>
      </template>

     <template v-else-if="role === 'admin'">
       <div class="admin-section">
     <a @click="toggleSubmenu">Manage Employees</a>
     <div v-if="showSubmenu" class="submenu">
     <router-link to="/Emp">Add Employee</router-link>
     </div>
     
     <a @click="handleClick3">View All Employees</a>

     <a @click="handleClick4">Stats</a>
     <div v-if="showSubMenu1" class="submenu">
      <router-link to="/graphs">Products Graph</router-link>
      <router-link to="/graphs1">Users Graph</router-link>
      </div>
     <a @click="handleClick5">View orders placed</a>
    </div>
</template>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router=useRouter();
function handleClick3(){
 router.push("/empView")
}
const props = defineProps(['role'])

const showSubmenu = ref(false)
const showSubMenu1 = ref(false)


function toggleSubmenu() {
  showSubmenu.value = !showSubmenu.value
}
function handleClick4(){
  showSubMenu1.value = !showSubMenu1.value
}
function handleClick5(){
  router.push("/orderView")
}
function handleclick6(){
  router.push("/dash")
}
function handleclick7(){
  router.push("/profile")
}
</script>

<style scoped>
.header {
  background-color: #16ad80;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
}
.sidebar {
  position: fixed;
  width: 200px;
  height: 85vh;
  background-color: #16ad80;
  color: white;
  padding: 30px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}


.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
}

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
.admin-section {
  display: flex;
  flex-direction: column;
  gap:20px;
}

.submenu {
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.submenu a {
  font-size: 16px;
  color: black;
  padding: 4px 8px;
}

.submenu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: underline;
}

</style>

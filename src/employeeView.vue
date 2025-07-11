<template>
    <Header :role="'admin'"/>
  <div class="employee-view">
    <h2>Registered Employees</h2>

    <div v-if="employees.length > 0">
      <ul>
        <li v-for="emp in employees" :key="emp.id" @click="handleClick(emp)">
          <strong>{{ emp.id }}. {{ emp.firstName }} {{ emp.lastName }} {{ emp.email }}</strong> 
        </li>
      </ul>
    </div>
    <p v-else>No employees found.</p>
  </div>
</template>

<script setup>
import { useEmployeeStore } from './stores/employeeData'
import { useRouter } from 'vue-router'
import Header from './components/Header.vue';
const router=useRouter();

const store = useEmployeeStore()
const employees = store.employees

function handleClick(emp) {
  store.employeeIDClicked = emp.id
  localStorage.setItem('employeeIDClicked', emp.id)
  router.push("/empForm")
 }

</script>


<style scoped>
.employee-view {
  max-width: 600px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.employee-view ul {
  padding-left: 20px;
}

.employee-view li {
  margin-bottom: 10px;
  font-size: 16px;
}
strong:hover{
  color:blue;
}
</style>

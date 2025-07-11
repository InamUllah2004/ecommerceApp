<template>
    <Header :role="'admin'"/>
  <div class="employee-details">
    <h2>Employee Details</h2>

    <div v-if="employee">
      <p><strong>ID:</strong> {{ employee.id }}</p>
      <p><strong>Name:</strong> {{ employee.firstName }} {{ employee.middleName }} {{ employee.lastName }}</p>
      <p><strong>Email:</strong> {{ employee.email }}</p>
      <p><strong>Phone:</strong> {{ employee.phone }}</p>
      <p><strong>Mailing Address:</strong> {{ employee.mailingAddress }}</p>
      <p><strong>City:</strong> {{ employee.city }}</p>
      <p><strong>State:</strong> {{ employee.state }}</p>
      <p><strong>Zip Code:</strong> {{ employee.zipCode }}</p>
      <p><strong>High School:</strong> {{ employee.highSchoolName }}</p>
      <p><strong>Graduation Year:</strong> {{ employee.highSchoolGradYear }}</p>
      <p><strong>College:</strong> {{ employee.collegeName }}</p>
      <p><strong>CNIC:</strong> {{ employee.cnic }}</p>
      <p><strong>Date of Birth:</strong> {{ employee.dob }}</p>
      <p><strong>Expiry Date:</strong> {{ employee.expiry }}</p>
    </div>
    <p v-else>No employee found.</p>
  </div>
</template>

<script setup>
import { useEmployeeStore } from './stores/employeeData' // Adjust the path if needed
import { computed } from 'vue'
import Header from './components/Header.vue'
const store = useEmployeeStore()

// Find the employee whose ID matches the clicked one
const employee = computed(() => {
  return store.employees.find(emp => emp.id === store.employeeIDClicked)
})
</script>

<style scoped>
.employee-details {
  max-width: 600px;
  margin: 40px auto;
  padding: 2rem;
  background-color: #fdfdfd;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
.employee-details p {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>

<template>
  <Header :role="'admin'"/>
  <div class="form-container">
    <h1>Add New Employee</h1>

    <form @submit.prevent="handleSubmit">
      <!-- Inputs with validation tracking -->
      <InputBox v-model="firstName" rule="name" placeholder="First Name" @validation="updateValid('firstName', $event)" />
      <InputBox v-model="middleName" rule="name" placeholder="Middle Name" @validation="updateValid('middleName', $event)" />
      <InputBox v-model="lastName" rule="name" placeholder="Last Name" @validation="updateValid('lastName', $event)" />
      <InputBox v-model="email" rule="email" htmlType="email" placeholder="Email" @validation="updateValid('email', $event)" />
      <InputBox v-model="phone" rule="phone" placeholder="Phone Number" @validation="updateValid('phone', $event)" />
      <InputBox v-model="mailingAddress" rule="address" placeholder="Mailing Address" @validation="updateValid('mailingAddress', $event)" />
      <InputBox v-model="city" rule="name" placeholder="City" @validation="updateValid('city', $event)" />
      <InputBox v-model="state" rule="name" placeholder="State" @validation="updateValid('state', $event)" />
      <InputBox v-model="zipCode" rule="zip" placeholder="Zip Code" @validation="updateValid('zipCode', $event)" />
      <InputBox v-model="highSchoolName" rule="text" placeholder="High School Name" @validation="updateValid('highSchoolName', $event)" />
      <InputBox v-model="highSchoolGradYear" rule="year" placeholder="High School Graduation Year" @validation="updateValid('highSchoolGradYear', $event)" />
      <InputBox v-model="collegeName" rule="text" placeholder="College Name" @validation="updateValid('collegeName', $event)" />
      <InputBox v-model="cnic" rule="cnic" placeholder="CNIC (13 digits)" @validation="updateValid('cnic', $event)" />
      <InputBox v-model="dob" rule="dob" htmlType="date" placeholder="Date of Birth" @validation="updateValid('dob', $event)" />
      <InputBox v-model="expiry" rule="expiry" htmlType="date" placeholder="Expiry Date" @validation="updateValid('expiry', $event)" />

      <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import InputBox from './components/InputBox.vue'
import { useEmployeeStore } from './stores/employeeData' // ✅ import your Pinia store
import { Employee } from './stores/employee' // ✅ import the Employee class
import Header from './components/Header.vue'
const store = useEmployeeStore() // ✅ access the store

// Field models
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const mailingAddress = ref('')
const city = ref('')
const state = ref('')
const zipCode = ref('')
const highSchoolName = ref('')
const highSchoolGradYear = ref('')
const collegeName = ref('')
const cnic = ref('')
const dob = ref('')
const expiry = ref('')

// Track validation for each field
const validationState = reactive({
  firstName: false,
  middleName: false,
  lastName: false,
  email: false,
  phone: false,
  mailingAddress: false,
  city: false,
  state: false,
  zipCode: false,
  highSchoolName: false,
  highSchoolGradYear: false,
  collegeName: false,
  cnic: false,
  dob: false,
  expiry: false
})

function updateValid(field, isValid) {
  validationState[field] = isValid
}


const isFormValid = computed(() =>
  Object.values(validationState).every(valid => valid)
)

// Submit handler: create and add employee
function handleSubmit() {
  const newEmp = new Employee(
    firstName.value,
    middleName.value,
    lastName.value,
    email.value,
    phone.value,
    mailingAddress.value,
    city.value,
    state.value,
    zipCode.value,
    highSchoolName.value,
    highSchoolGradYear.value,
    collegeName.value,
    cnic.value,
    dob.value,
    expiry.value
  )

  store.addEmployee( // ✅ call store action to store the employee
    firstName.value,
    middleName.value,
    lastName.value,
    email.value,
    phone.value,
    mailingAddress.value,
    city.value,
    state.value,
    zipCode.value,
    highSchoolName.value,
    highSchoolGradYear.value,
    collegeName.value,
    cnic.value,
    dob.value,
    expiry.value
  )

  console.log('✅ Employee Created:', newEmp)
  alert('Employee added successfully!')

  // Optional: Reset form after success
  resetForm()
}

// Clear all fields
function resetForm() {
  firstName.value = ''
  middleName.value = ''
  lastName.value = ''
  email.value = ''
  phone.value = ''
  mailingAddress.value = ''
  city.value = ''
  state.value = ''
  zipCode.value = ''
  highSchoolName.value = ''
  highSchoolGradYear.value = ''
  collegeName.value = ''
  cnic.value = ''
  dob.value = ''
  expiry.value = ''

  Object.keys(validationState).forEach(key => {
    validationState[key] = false
  })
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
button {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #16ad80;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

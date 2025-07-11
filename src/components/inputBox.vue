<template>
  <div class="input-wrapper">
    <input
      :type="htmlType"
      v-model="model"
      :disabled="disabled"
      @blur="validate"
      :placeholder="computedPlaceholder"
      required
      class="input-field"
    />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  rule: String,           // e.g., 'email', 'name', 'cnic', etc.
  placeholder: String,    // Optional placeholder override
  htmlType: {
    type: String,
    default: 'text'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()
const emit = defineEmits(['validation'])
const error = ref('')

// Computed placeholder logic
const computedPlaceholder = computed(() => {
  if (props.placeholder) return props.placeholder
  switch (props.rule) {
    case 'email': return 'Enter your email'
    case 'password': return 'Enter your password'
    case 'name': return 'Enter your name'
    case 'phone': return 'Enter your phone number'
    case 'zip': return 'Enter your zip code'
    case 'address': return 'Enter your address'
    case 'text': return 'Enter text'
    case 'year': return 'Enter graduation year'
    case 'cnic': return 'Enter CNIC (13 digits)'
    case 'dob': return 'Enter date of birth'
    case 'expiry': return 'Enter expiry date'
    default: return 'Enter value'
  }
})

// Watcher with numeric filter for CNIC
watch(model, (newVal) => {
  if (props.rule === 'cnic') {
    model.value = newVal.replace(/\D/g, '') // Remove non-digits
  }
  validate()
})

// Validation logic
function validate() {
  const val = model.value?.trim()

  switch (props.rule) {
    case 'email':
      if (!val.endsWith('@gmail.com')) {
        setError('Email must end with @gmail.com')
      } else clearError()
      break

    case 'password':
      if (!val || val[0] !== val[0]?.toUpperCase()) {
        setError('Password must start with a capital letter')
      } else clearError()
      break

    case 'name':
      if (!/^[A-Za-z]+$/.test(val)) {
        setError('Only letters are allowed')
      } else clearError()
      break

    case 'phone':
      if (!/^\d{10,11}$/.test(val)) {
        setError('Phone must be 10 or 11 digits')
      } else clearError()
      break

    case 'zip':
      if (!/^\d{5}$/.test(val)) {
        setError('Zip Code must be 5 digits')
      } else clearError()
      break

    case 'address':
      if (!val || val.length < 5) {
        setError('Address must be at least 5 characters')
      } else clearError()
      break

    case 'text':
      if (!val || val.length < 3) {
        setError('This field must be at least 3 letters')
      } else clearError()
      break

    case 'year':
      if (!/^\d{4}$/.test(val)) {
        setError('Graduation year must be exactly 4 digits')
      } else clearError()
      break

    case 'cnic':
      if (!/^\d{13}$/.test(val)) {
        setError('CNIC must be exactly 13 digits')
      } else clearError()
      break

    case 'dob':
      if (!isValidDate(val) || new Date(val) >= new Date()) {
        setError('DOB must be a valid past date')
      } else clearError()
      break

    case 'expiry':
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const expiryDate = new Date(val)
      expiryDate.setHours(0, 0, 0, 0)

      if (!isValidDate(val) || expiryDate <= today) {
        setError('Expiry must be a valid future date')
      } else clearError()
      break

    default:
      clearError()
  }
}

// Helper to validate date string
function isValidDate(dateStr) {
  const date = new Date(dateStr)
  return date instanceof Date && !isNaN(date)
}

function setError(msg) {
  error.value = msg
  emit('validation', false)
}

function clearError() {
  error.value = ''
  emit('validation', true)
}
</script>

<style scoped>
.input-wrapper {
  margin-bottom: 16px;
}
.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
}
</style>

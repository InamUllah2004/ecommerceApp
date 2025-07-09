<template>
  <div class="input-wrapper">
    <!-- Email input -->
    <template v-if="type === 'email'">
      <input
        :type="type"
        v-model="model"
        :disabled="disabled"
        @blur="validateEmail"
        placeholder="Enter your email"
        required
        class="input-field"
      />
      <p v-if="error" class="error">{{ error }}</p>
    </template>

    <!-- Password input -->
    <!----><template v-else-if="type === 'password'">
      <input
        type="password"
        v-model="model"
        :disabled="disabled"
        @blur="validatePassword"
        placeholder="Enter your password"
        required
        class="input-field"
      />
      <p v-if="error" class="error">{{ error }}</p>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Props
const props = defineProps({
  type: String,
  disabled: {
    type: Boolean,
    default: false
  }
})

// v-model support
const model = defineModel()

// Emit validation result
const emit = defineEmits(['validation'])

// Error message
const error = ref('')

// Validate whenever input value changes
watch(model, () => {
  if (props.type === 'email') validateEmail()
  if (props.type === 'password') validatePassword()
})

// Email validation
function validateEmail() {
  if (!model.value.endsWith('@gmail.com')) {
    error.value = 'Email must end with @gmail.com'
    emit('validation', false)
  } else {
    error.value = ''
    emit('validation', true)
  }
}

// Password validation
function validatePassword() {
  if (!model.value || model.value[0] !== model.value[0].toUpperCase()) {
    error.value = 'Password must start with a capital letter'
    emit('validation', false)
  } else {
    error.value = ''
    emit('validation', true)
  }
}
</script>
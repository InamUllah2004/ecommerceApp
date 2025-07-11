<template>
  <div class="signup">
    <form class="sign1" @submit.prevent="handleSignup">
     <InputBox v-model="email" type="email" @validation="emailValid = $event" placeholder="email" />
     <InputBox v-model="password" type="password" :disabled="!emailValid" @validation="passwordValid = $event" placeholder="password" />
     <button
        type="submit"
        @click="handleClick"
        :disabled="!emailValid || !passwordValid"
      >
        Login
      </button>

      <p v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCustomerStore } from './stores/customerData'
import InputBox from './components/InputBox.vue'

const router = useRouter()
const store = useCustomerStore()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

// These track if email/password inputs are valid
const emailValid = ref(false)
const passwordValid = ref(false)

function handleClick() {
  const user = store.customers.find(
    (c) => c.email === email.value && c.password === password.value
  )

  if (user) {
    store.currentEmail = user.email
    store.currentRole = user.role
    alert(`Welcome ${user.name}!`)
    alert(`Welcome ${store.currentRole}!`)
    email.value = ''
    password.value = ''
    errorMessage.value = ''
    router.push("/dash")
  } else {
    errorMessage.value = 'Invalid email or password.'
  }
}
</script>


<style>
.signup {
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top:300px;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #16ad80;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #128f68;
}
.Signup{
  width:90%;
  margin-left:5px;
  margin-top:7px;
  height:35px;
}
.total{
  margin-top: 50px;
  margin-left:-50px;
}
</style>


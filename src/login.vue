<template>
<div class="signup">
    <form class="sign1" @submit.prevent="handleSignup">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit" @click="handleClick">Login</button>
      <p v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</p>
    </form>
</div>  

<div class="bt2">
  <button class="Signup" @click="handleClick1">Sign Up</button>
</div>

</template>

<script setup>
import { ref } from 'vue'
import { useCustomerStore } from './stores/customerData'
import {useRouter} from 'vue-router'
const router=useRouter();

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const store = useCustomerStore()

function handleClick() {
  const user = store.customers.find(
    (c) => c.email === email.value && c.password === password.value
  )

  if (user) {
    alert(`Welcome ${user.name}!`)
    errorMessage.value = ''
    email.value = ''
    password.value = ''
    router.push("/dash")
  } else {
    errorMessage.value = 'Invalid email or password.'
  }
}
function handleClick1(){
    router.push("/signup")
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
.bt2{
  position: absolute;
  margin-top:-550px;
  width:10%;
  height:50px;
  background-color: white;
}
.Signup{
  width:90%;
  margin-left:5px;
  margin-top:7px;
  height:35px;
}
</style>


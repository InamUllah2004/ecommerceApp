<template>
<div class="signup">
    <form class="sign1" @submit.prevent="handleSignup">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="password" v-model="confirmPassword" placeholder=" Confirm Password" required />
      <button type="submit" @click="handleClick">Sign Up</button>
      <p v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</p>
    </form>
</div>   
<div class="bt1">
  <button class="logIn" @click="handleClick1">Log In</button>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useCustomerStore } from './stores/customerData'
import {useRouter} from 'vue-router'

const router=useRouter();
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage=ref('')

const store = useCustomerStore();

function handleClick() {
  if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match';
      return;
    } 
  else {
     errorMessage.value=''
     store.addCustomer(name.value, email.value, password.value)
     alert('Sign Up Successful')
     name.value = ''
     email.value = ''
     password.value = ''
     confirmPassword.value = ''
  }
}
function handleClick1(){
   router.push("/login")
}
</script>

<style>
.signup {
  position: relative;
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
.bt1{
  position: absolute;
  margin-top:-650px;
  width:10%;
  height:50px;
  background-color: white;
}
.logIn{
  width:90%;
  margin-left:5px;
  margin-top:7px;
  height:35px;
}
</style>

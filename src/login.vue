<template>
<div class="signup">
    <form class="sign1" @submit.prevent="handleSignup">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit" @click="handleClick">Login</button>
      <p v-if="errorMessage" style="color: red; margin-top: 10px;">{{ errorMessage }}</p>
    </form>
</div>  

<!-- <div class="bt2">
  <button class="Signup" @click="handleClick1">Sign Up</button>
</div> -->
<button class="glow-btn" @click="handleClick1">
  Sign Up
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</button>


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
/* .bt2{
  position: absolute;
  margin-top:-550px;
  width:10%;
  height:50px;
  background-color: white;
} */
.glow-btn {
  position: absolute;
  display: inline-block;
  padding: 10px 24px;
  font-size: 16px;
  color: #03e9f4;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  width: 10%;
  text-align: center;
  margin-top:-520px;
}

.glow-btn:hover {
  background: #03e9f4;
  color: #fff;
  box-shadow: 0 0 10px #03e9f4, 0 0 40px #03e9f4, 0 0 80px #03e9f4;
}

.glow-btn span {
  position: absolute;
  display: block;
}

.glow-btn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}

.glow-btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}

.glow-btn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}

.glow-btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}

.Signup{
  width:90%;
  margin-left:5px;
  margin-top:7px;
  height:35px;
}
</style>


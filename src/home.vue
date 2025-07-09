<template>
  <h1 class="heading">Welcome to the Nike</h1>

  <div class="form1">
    <button
      class="tab-button"
      :class="{ active: activeTab === 'signup' }"
      @click="activeTab = 'signup'"
    >
      Sign Up
    </button>
    <button
      class="tab-button"
      :class="{ active: activeTab === 'login' }"
      @click="activeTab = 'login'"
    >
      Login
    </button>
  </div>

  <!-- Forms shown based on tab -->
  <div class="form-container">
    <SignupForm v-if="activeTab === 'signup'" class="form2"/>
    <LoginForm v-else class="form3"/>
  </div>

  <div class="con">
    <img :src="home" alt="Home Image" class="image" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import home from './assets/home4.png'

// Import your actual components here
import SignupForm from './signup.vue'
import LoginForm from './login.vue'

const activeTab = ref('signup') // default is Sign Up
</script>
<style>
.form1 {
  display: flex;
  justify-content: center;
  margin-top: 200px;
  width: fit-content;
  margin-left: 50px;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.tab-button {
  width: 200px;
  height: 60px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: white;
  color: #16ad80;
  font-weight: bold;
  transition: 0.3s ease;
  border-right: 1px solid #16ad80;
}

.tab-button:last-child {
  border-right: none;
}

.tab-button.active {
  background-color: #16ad80;
  color: white;
}

.tab-button:not(.active):hover {
  background-color: #f2f2f2;
}

.form-container {
  margin-top: 20px;
  margin-left: 50px;
}

.heading {
  position: absolute;
  color: white;
  font-size: 50px;
  text-decoration: underline;
  margin-top: -120px;
  margin-left: 50px;
}

.con {
  position: relative;
  margin-left: 600px;
  width: 880px;
  height: 1000px;
  margin-top: -700px;
  background-color: black;
}

.image {
  position: absolute;
  height: 850px;
  width: 900px; 
 
}
.form2{
  margin-left:-40px;
  margin-top:50px;
}
.form3{
  position:relative;
  margin-left:-40px;
  margin-top:50px;
}
</style>
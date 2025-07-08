<template>
    
    <div class="form1">
        <button class="btn1" @click="handleClick1"> Sign Up</button>
        <button class="btn2"@click=handleClick2>Login</button>
    </div>    

</template>

<script setup>
import {useRouter} from 'vue-router'
const router=useRouter();

function handleClick1(){
    router.push("/signup")
}
function handleClick2(){
    router.push("/login")
}
</script>

<style >
.form1 {
  display: flex;
  justify-content: center; 
  gap: 20px; 
  margin-top: 250px;
  width:40%;
  margin-left:450px;
  background-color: aqua;
  height:250px;
  border-radius: 40px;
}

.btn1,
.btn2 {
  width:200px;
  height: 50px;  
  padding: 10px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #16ad80;
  color: white;
  transition: background-color 0.3s ease;
  margin-top: 90px;
}

.btn1:hover,
.btn2:hover {
  background-color: #128f68;
}

</style>    

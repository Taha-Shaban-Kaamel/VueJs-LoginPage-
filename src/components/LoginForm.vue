
<template>
  <div class="login-container">
    <div class="left-panel">
     
      <form @submit.prevent="handleSubmit">
      <div class="intro">
        <h2>Welcome Back</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
        <div class="input-group">
          <label for="username">Email</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="options">
          <div>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Sign in</button>
        <GoogleLogin 
      :client-id="CLIENT_ID"
      :scope="scope"
      :callback="callback" 
      prompt 
      auto-login
    >
    <button id="signinWGoogle">
      <img src="../assets/googleIcon.png" alt="" srcset="">
      <span>Sign In With Google</span> 
    </button>
    
  </GoogleLogin >
    <p class="signUp">Don’t have an account? 
          <a href="">Sign up fo free!</a>
        </p>
      </form>
    </div>
    <div class="right-panel">
      <img src="../assets/logo.png" alt="" srcset="">
    </div>
  </div>
</template>
<script setup>
// import logo from '../assets/logo.png';
const CLIENT_ID = "750236939237-rhaii2cs23jgmmqsp487hq47mv6nre5i.apps.googleusercontent.com"
const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
import { decodeCredential } from 'vue3-google-login'
const callback = (response) => {
  if (response.error) {
    console.error(response.error);
  } else {
    const userData = decodeCredential(response.credential)
    console.log("Handle the userData", userData)
    const { accessToken, profileObj } = response;
    console.log(accessToken, profileObj);
    // Authenticate the user and authorize access to your application
}
  }
import { ref } from 'vue';
    
let username = ref('');
let password = ref('');

let handleSubmit = () => {

  console.log(`Username: ${username.value}, Password: ${password.value}`)
};
  

</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.left-panel {
  width: 50%;
  height: 100%;
  padding:0 10px ;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.right-panel {
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden ;
  /* width: 50%;
  height: 100%;
  background: url(../assets/logo.png);
  background-position:top;
  background-size:cover;
  background-repeat: no-repeat; */

}

.right-panel img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

.input-group {
  width: 100%;
}
.input-group label{
  display: block;
  margin-bottom: 10px;
  display: block;
  text-align: start;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  
}
.intro{
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 0.1;
    margin-bottom: 40px;
    text-align: center ;
}
.intro h2{
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 1px;
}
.intro p{
  size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: #636364;
  letter-spacing: 1px;
}
form{
  width: 400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid #ccc; */
}
form .options{
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .options div{
  display: flex;
  align-items: center;
}
input[type="text"], input[type="password"] {
 width: 100%;
    padding: 10px 0;
    text-indent: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
    outline: none;
}
#signinWGoogle , button[type="submit"]{
    width: 100%;
    height: 41.31px;
    border-radius: 12px;
    cursor: pointer;
    padding: 10px;
    margin:10px auto ;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;

}
#signinWGoogle{
  display: flex;
  justify-content: center;
  align-items: center;  
  gap: 5px;
  background:#EA454C00;
  border: 1px solid #00000040; 

}

#signinWGoogle:hover {
  background-image: linear-gradient(to right, #4285F4, #0F9D58, #FFC107, #E94235);
  background-size: 400% 100%;
  animation: gradient 10s ease infinite;
  color:white ;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
button[type="submit"] { 
  background-color: #EA454C;
  color: #fff;
  border: none;
  border-radius: 5px;
  
}

button[type="submit"]:hover {
   box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.5);
}
.signUp a{
  color: #E94235;
  font-weight: 500;
}

/* Small screens (mobile devices) */
@media only screen and (max-width: 600px) {
  .login-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .left-panel {
    width: 100%!important;
    height: 100vh;
   
  }
  .right-panel {
    display: none;
  }
  form {
    width: 80%;
  }
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  #signinWGoogle, button[type="submit"] {
    width: 100%;
    padding: 10px;
    margin: 10px auto;
  }
}
@media only screen and (min-width: 601px) and (max-width: 992px) {
  .login-container {
    flex-direction: row;
  }
  .left-panel {
    width: 60%;
    height: 100vh;
    padding: 20px;
  }
  .right-panel {
    width: 40%;
    height: 100vh;
    background-size: cover;
  }
  form {
    width: 80%;
    padding: 20px;
  }
  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  #signinWGoogle, button[type="submit"] {
    width: 80%;
    padding: 10px;
    margin: 10px auto;
  }
}

</style>
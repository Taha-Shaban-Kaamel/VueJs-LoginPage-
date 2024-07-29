<template>
  <div id="app">
<GoogleLogin 
      :client-id="CLIENT_ID"
      :scope="scope"
      :callback="callback" 
      prompt 
      auto-login
    />
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from './components/LoginForm.vue'
const CLIENT_ID = "750236939237-rhaii2cs23jgmmqsp487hq47mv6nre5i.apps.googleusercontent.com"
const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
 const callback = (response) => {
     if (response.error) {
    console.error(response.error);
  } else {
    const { accessToken, profileObj } = response;
    console.log(accessToken, profileObj);
    // Authenticate the user and authorize access to your application
}
  }
</script>

<style>

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  };

  #app {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
  }; 
</style>
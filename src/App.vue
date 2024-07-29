<template>
  <div id="app">

    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from './components/LoginForm.vue'

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
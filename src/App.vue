<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { HelloWorld }
}

</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh ;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Poppins", sans-serif;
  overflow: hidden ;
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
    width: 100%;
    padding: 20px;
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
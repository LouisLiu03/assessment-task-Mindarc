! 
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <HomePage />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomePage
  }
}
</script>


<style>
  #app {
    font-size: 1.3rem;
  }

  .btn {
    font-size: 1.3rem;
  }

  .card-footer {
        border: none;
        background-color: transparent;
    }

</style>

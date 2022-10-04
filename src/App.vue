
<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'


export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  
  body {
    font-family: 'Nunito Sans', sans-serif;
  }

  #app {
    font-size: 1.3rem;
    margin-top: 63px;
  }

  .btn {
    font-size: 1.3rem;
  }

  .card-footer {
        border: none;
        background-color: transparent;
  }

  @media (max-width:992px) {
    #app {
      margin-top: 56px;
    }
  }

</style>

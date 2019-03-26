<template>
  <div id="app">
    <home-page msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: 'CamingoCode-Regular', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
}
</style>

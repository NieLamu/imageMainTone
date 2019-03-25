<template>
  <div id="app">
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
:root {
  --darker: rgba(49, 60, 68, 1)
  --dark: rgba(72, 89, 100, 1)
  --light: rgba(97, 118, 131, 1)
  --lighter: rgba(127, 144, 153, 1)
  --white: rgba(255, 255, 255, 1)
  --darker_tr: rgba(24, 31, 35, 0.5)
  --dark_tr: rgba(70, 88, 101, 0.5)
  --light_tr: rgba(122, 147, 161, 0.5)
  --lighter_tr: rgba(181, 198, 207, 0.5)
  --lighter_tr2: rgba(181, 198, 207, 0.75)
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

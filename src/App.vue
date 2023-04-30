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
@font-face { font-family: SFRoundedB; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Bold.otf)}
@font-face { font-family: SFRoundedSB; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Semibold.otf)}
@font-face { font-family: SFRoundedM; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Medium.otf)}
@font-face { font-family: SFRoundedR; font-weight: bold; src: url(@/fonts/SF-Pro-Rounded-Regular.otf)}

:root {
  --darker: rgba(49, 60, 68, 1)
  --darker_tr: rgba(24, 31, 35, 0.5)
  --dark: rgba(72, 89, 100, 1)
  --dark_tr: rgba(70, 88, 101, 0.5)
  --light: rgba(97, 118, 131, 1)
  --light_tr: rgba(122, 147, 161, 0.5)
  --lighter: rgba(127, 144, 153, 1)
  --lighter_tr: rgba(181, 198, 207, 0.5)
  --lighter_tr2: rgba(181, 198, 207, 0.75)
  --white: rgba(255, 255, 255, 1)
}

#app {
  font-family: SFRoundedR;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

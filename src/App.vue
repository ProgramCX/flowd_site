<template>
  <MainMenu></MainMenu>
  <TheFooter></TheFooter>
</template>

<script>
import MainMenu from './components/MainMenu.vue';

import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
   MainMenu,
   TheFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="app-wrapper">
  <MainMenu></MainMenu>
  <router-view></router-view>
  <TheFooter></TheFooter>
  </div>
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
.app-wrapper {
    width: 100%;
    height: 100%;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.el-header {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
}
.el-aside {
    position: sticky;
    position: -webkit-sticky;
    left: 0px;
    height: calc(100vh - 50px);  
}
.el-main {
    width: fit-content;
    height: calc(100vh - 50px);  
    overflow-y: scroll;
}
</style>

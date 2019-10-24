<template>
  <div id="app">
    <Board></Board>
  </div>
</template>

<script>
  import Board from './components/Board.vue';

  export default {
    name: 'app',
    components: {
      Board
    }, 
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

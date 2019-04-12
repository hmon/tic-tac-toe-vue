<template>
  <div @click="playerClick" class="ticCell" :style="{background}">
    <span class="helper"></span>
    <img src="usericon.png" v-show="user"/>
    <img src="pcicon.png" v-show="ai"/>
  </div>
</template>

<script>
  export default {
    name: "Cell",
    props: ['id'],
    data() {
      return {
        user: false,
        ai: false,
        background: '',
      }
    },
    methods: {
      playerClick() {
        const { toggle, finished } = this.$parent;
        if (toggle[this.id] !== 0 || finished) {
          return;
        }
        this.$emit('playerClick', this.id);
      },
      select(n) {
        n === 3 ? this.user = true : this.ai = true;
      },
      paint(color) {
        this.background = color;
      }
    }
  }
</script>

<style scoped>
  .ticCell {
    border-style:solid;
    border-width:1px;
    height:calc((100% - 6px) / 3);
    width:calc((100% - 6px) / 3);
    display:block;
    float:left;
    text-align:center;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  img {
    vertical-align: middle;
    height:80%;
    width:80%;
  }
</style>

<template>
  <div id="board" :style="{height}">
    <Cell v-for="(value, key) in toggle" :id="key" :ref="key" @playerClick="playerClick"></Cell>
  </div>
</template>

<script>
  import Cell from './Cell.vue';
  export default {
    name: 'Board',
    components: {
      Cell
    },
    data() {
      return {
        height: '0',
        finished: false,
        toggle: {
          "t11": 0,
          "t12": 0,
          "t13": 0,
          "t21": 0,
          "t22": 0,
          "t23": 0,
          "t31": 0,
          "t32": 0,
          "t33": 0
        },
        rowsets: [
          ['t11', 't12', 't13'],
          ['t21', 't22', 't23'],
          ['t31', 't32', 't33'],
          ['t11', 't21', 't31'],
          ['t12', 't22', 't32'],
          ['t13', 't23', 't33'],
          ['t11', 't22', 't33'],
          ['t13', 't22', 't31']
        ],
      }
    },
    computed: {
      empties() {
        return Object.keys(this.toggle).filter(key => this.toggle[key] === 0)
      }
    },
    methods: {
      playerClick(id) {
        const { toggle, rowsets } = this;

        if (this.finished) {
          this.reload();
          this.finished = false;
        }

        this.setClick(3, id);
        const resume = rowsets.every((rowset) => {
          if (toggle[rowset[0]] + toggle[rowset[1]] + toggle[rowset[2]] === 9) {
            rowset.forEach(id => this.paint(id, 'red'));
            alert("You win, player!");
            this.finished = true;
            return false;
          }
          return true;
        });
        if (!resume) return;
        if (this.empties.length === 0) {
          alert("Draw Match!");
          this.finished = true;
          return;
        }
        this.startAI(id);
      },
      setClick(n, id) {
        // 3 is user and 1 is AI
        this.$refs[id][0].select(n);
        this.toggle[id] = n;
      },
      startAI(id) {
        const { toggle, rowsets } = this;
        for (let rowset of rowsets) {
          if (toggle[rowset[0]] + toggle[rowset[1]] + toggle[rowset[2]] === 2) {
            // Winpoint!
            if (toggle[rowset[0]] === 0) {
              this.setClick(1, rowset[0]);
            } else if (toggle[rowset[1]] === 0) {
              this.setClick(1, rowset[1]);
            } else {
              this.setClick(1, rowset[2]);
            }
            rowset.forEach(id => this.paint(id, 'red'));
            alert("Cyborg wins!");
            this.finished = true;
            return;
          }
        }
        for (let rowset of rowsets) {
          if (toggle[rowset[0]] + toggle[rowset[1]] + toggle[rowset[2]] === 6) {
            // Blockpoint!
            if (toggle[rowset[0]] === 0) {
              this.setClick(1, rowset[0]);
              return;
            } else if (toggle[rowset[1]] === 0) {
              this.setClick(1, rowset[1]);
              return;
            } else {
              this.setClick(1, rowset[2]);
              return;
            }
          }
        }
        if (Math.random() >= 0.5) {
          if ((id !== 't11') && (id !== 't13') && (id !== 't31') && (id !== 't33')) {
            if (toggle['t11'] === 0) {
              this.setClick(1, 't11')
              return;
            } else if (toggle['t13'] === 0) {
              this.setClick(1, 't13')
              return;
            } else if (toggle['t31'] === 0) {
              this.setClick(1, 't31')
              return;
            } else {
              this.setClick(1, 't33')
              return;
            }
          } else {
            if (toggle['t22'] === 0) {
              this.setClick(1, 't22')
              return;
            } else if (toggle['t21'] === 0) {
              this.setClick(1, 't21')
              return;
            } else if (toggle['t12'] === 0) {
              this.setClick(1, 't12')
              return;
            } else if (toggle['t23'] === 0) {
              this.setClick(1, 't23')
              return;
            } else {
              this.setClick(1, 't32')
              return;
            }
          }
        } else {
          //do the random input
          const rkey = this.empties[Math.floor(this.empties.length * Math.random())];
          this.setClick(1, rkey);
          return;
        }
      },
      paint(id, color) {
        this.$refs[id][0].paint(color);
      },
      setHeight() {
        this.height = getComputedStyle(this.$el, '').getPropertyValue('width');
      },
      reload() {
        Object.keys(this.toggle).forEach((key) => {
          this.setClick(0, key);
          this.paint(key, 'silver');
        })
      }
    },
    mounted() {
      this.setHeight();
      window.addEventListener('resize', () => {
        this.setHeight();
      });
    }
  }
</script>

<style scoped>
  #board {
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    background-color: silver;
    overflow: hidden;
  }
</style>

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Event Bus for dispatching events.
window.Bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');

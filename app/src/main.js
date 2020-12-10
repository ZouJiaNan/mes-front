import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.config.productionTip = false

// import calInside from './components/calInside.vue';
import calOutside from './components/calOutside.vue';
import calInside from './components/calInside.vue';
import position from './components/position.vue';
var routerObj=new VueRouter({
  routes:[
    {path:'/calInside',component:calInside},
    {path:'/calOutside',component:calOutside},
    {path:'/position',component:position}
  ]
});
new Vue({
  router:routerObj,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RecipeList from './components/RecipeList'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'RecipeList',
      component: RecipeList
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
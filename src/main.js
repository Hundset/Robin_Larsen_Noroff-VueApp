import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RecipePage from './RecipeListPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'RecipeList',
      component: RecipePage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
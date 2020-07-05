import Vue from 'vue'
import Router from 'vue-router'
// eslint-disable-next-line camelcase
import body_main from '../components/body.vue'
import zapatos from '../components/zapatos.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: body_main
    },
    {
      path: '/zapatos',
      name: 'zapatos',
      component: zapatos
    }
  ]
})

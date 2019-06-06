import Vue from 'vue'
import Router from 'vue-router'
import about from '../about.vue'
import portfolio from '../portfolio.vue'
import thoughts from '../thoughts/thoughts.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'Portfolio',
            component: portfolio
        },
         {
            path: '/thoughts',
            name: 'thoughts',
            component: thoughts
        },
        {
            path: '/about',
            name: 'About',
            component: about
        }
    ]
})
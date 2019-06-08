import Vue from 'vue'
import Router from 'vue-router'
import NewsFeed from '@/components/NewsFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewsFeed',
      component: NewsFeed
    }
  ]
})

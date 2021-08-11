import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogPostsList from '../components/BlogPostsList'
import UsersList from '../components/user/UsersList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blogPosts',
      name: 'BlogPostsList',
      component: BlogPostsList
    },
    {
      path: '/users',
      name: 'UsersList',
      component: UsersList
    }

  ]
})

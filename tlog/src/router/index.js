import Vue from 'vue'
import NewsFeed from '@/components/NewsFeed'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/newsfeed', component: NewsFeed },
        { path: '/login', component: Login },
        { path: '/signup', component: SignUp }
    ]
})

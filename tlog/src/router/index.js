import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsFeed from '@/components/NewsFeed'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import MyPage from '@/components/MyPage'
import TLogDetail from '@/components/TLogDetail'
import TLogHeaderWrite from '@/components/TLogHeaderWrite'
import TLogContentWrite from '@/components/TLogContentWrite'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/newsfeed', component: NewsFeed },
        { path: '/login', component: Login },
        { path: '/signup', component: SignUp },
        { path: '/mypage', component: MyPage },
        { path: '/tlog/:id/detail', component: TLogDetail },
        { path: '/tlog/write', component: TLogHeaderWrite },
        { path: '/tlog/write/:tlogId/tdate/:tdateId', component: TLogContentWrite }
        // { path: '/:id', component: MyPage },
        // { path: '/tlog/:id', component: TLogDetail }
    ]
})

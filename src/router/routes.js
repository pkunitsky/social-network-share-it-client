/* modules */
import Auth from '@/app/auth/components'
import Chat from '@/app/chat/components'
import News from '@/app/news/components'
import Profile from '@/app/profile/components'
import Test from '@/app/test/components'

/* route guards */
import AuthGuard from '@/router/guards/auth-guard'

export default [
  {
    path: '/auth',
    component: Auth,
    beforeEnter: AuthGuard.beforeEnter,
    children: [
      {
        path: 'logout',
        name: 'logout',
        beforeEnter: AuthGuard.logout.beforeEnter
      }
    ]
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '*',
    redirect: '/chat'
  }
]

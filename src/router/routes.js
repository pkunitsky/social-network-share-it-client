/* modules */
import Auth from '@/app/auth/components'
import Profile from '@/app/profile/components'
import Messages from '@/app/messages/components'
import Articles from '@/app/articles/components'
import Discover from '@/app/discover/components'
import Settings from '@/app/settings/components'
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
    path: '/messages',
    component: Messages
  },
  {
    path: '/articles',
    component: Articles
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  // {
  //   path: '*',
  //   redirect: '/discover'
  // }
]

export const bands = [
  {
    path: '/',
    name: 'SearchMusic',
    component: () => import('../pages/Home')
  },
  {
    path: '/band/:slug',
    name: 'BandDetails',
    component: () => import('../pages/Details'),
    props: true
  }
]

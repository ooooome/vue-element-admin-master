/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
      path: 'apriori',
      component: () => import('@/views/charts/associationRule.vue'),
      name: 'apriori',
      meta: { title: 'apriori', noCache: true }
    },
    {
      path: 'dt',
      component: () => import('@/views/charts/classification.vue'),
      name: 'dt',
      meta: { title: 'dt', noCache: true }
    },
    {
      path: 'kmeans',
      component: () => import('@/views/charts/clustering.vue'),
      name: 'kmeans',
      meta: { title: 'kmeans', noCache: true }
    },
    {
      path: 'lr',
      component: () => import('@/views/charts/regression.vue'),
      name: 'lr',
      meta: { title: 'lr', noCache: true }
    }
  ]
}

export default chartsRouter

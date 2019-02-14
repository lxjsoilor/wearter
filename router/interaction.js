const virtual = () =>
  import ('components/article/interaction/virtual')

const equipment = () =>
  import ('components/article/interaction/equipment')

const share = () =>
  import ('components/article/interaction/share')

const data = () =>
  import ('components/article/interaction/data')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [{
  path: '/interaction',
  redirect: '/interaction/virtual'
}, {
  path: '/interaction/virtual',
  name: 'virtual',
  component: virtual
}, {
  path: 'equipment',
  name: 'equipment',
  component: equipment,
  children: [{
    path: '/interaction/equipment/detail',
    redirect: '/interaction/equipment',
  }, {
    path: 'detail/:id',
    name: 'interaction_equipment_detail',
    component:contentPage
  }]
}, {
  path: 'share',
  name: 'share',
  component: share
}, {
  path: 'data',
  name: 'data',
  component: data
}]
const online = () =>
  import ('components/article/lightning/online')


export default [{
  path: '/lightning',
  redirect: '/lightning/online'
}, {
  path: 'online',
  name: 'online',
  component: online
}]
const monitor = () =>
  import ('components/article/monitor/index')

const cloud = () =>
  import('components/article/monitor/cloud')

const radar = () =>
  import('components/article/monitor/radar')

const xradar = () =>
  import('components/article/monitor/xradar')

// 自动站
const awshou = () =>
  import('components/article/monitor/awshou')

export default [{
  path: '/monitor',
  redirect: '/monitor/awshou'
}, {
  path: 'cloud',
  name: 'cloud',
  component: cloud
}, {
  path: 'radar',
  name: 'radar',
  component: radar
}, {
  path: 'xradar',
  name: 'xradar',
  component: xradar
}, {
  path: 'awshou',
  name: 'awshou',
  component: awshou
}]

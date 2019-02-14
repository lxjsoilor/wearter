const foshan = () =>
  import ('components/article/warning/foshan/index')

const province = () =>
  import ('components/article/warning/province')

const meaning = () =>
  import ('components/article/warning/meaning/index')

const meaningList = () =>
  import ('components/article/warning/meaning/list')

const disaster = () =>
  import ('components/article/warning/disaster')

export default [{
  path: '/warning',
  redirect: '/warning/foshan'
}, {
  path: 'foshan',
  name: 'foshan',
  component: foshan
}, {
  path: 'province',
  name: 'province',
  component: province
}, {
  path: 'meaning',
  name: 'meaning',
  component: meaning,
  children: [{
    path: '/warning/meaning',
    redirect: '/warning/meaning/typhoon'
  }, {
    path: 'typhoon',
    name: 'typhoon',
    component: meaningList
  }, {
    path: 'rainstorm',
    name: 'rainstorm',
    component: meaningList
  }, {
    path: 'heatwave',
    name: 'heatwave',
    component: meaningList
  }, {
    path: 'cold',
    name: 'cold',
    component: meaningList
  }, {
    path: 'heavyfog',
    name: 'heavyfog',
    component: meaningList
  }, {
    path: 'haze',
    name: 'haze',
    component: meaningList
  }, {
    path: 'thundergust',
    name: 'thundergust',
    component: meaningList
  }, {
    path: 'roadicing',
    name: 'roadicing',
    component: meaningList
  }, {
    path: 'hail',
    name: 'hail',
    component: meaningList
  }, {
    path: 'wildfire',
    name: 'wildfire',
    component: meaningList
  }]
},
{
  path: 'disaster',
  name: 'disaster',
  component: disaster
}]

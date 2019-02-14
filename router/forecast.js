const refine = () =>
  import ('components/article/forecast/refine')

const town = () =>
  import ('components/article/forecast/town')

const scenicSpot = () =>
  import ('components/article/forecast/scenicSpot')

const local = () =>
  import ('components/article/forecast/local')

const internal = () =>
  import ('components/article/forecast/internal')

const environment = () =>
  import ('components/article/forecast/environment')

const weatherReport = () =>
  import ('components/article/forecast/weatherReport')

const weatherNews = () =>
  import ('components/article/forecast/weatherNews')

const weatherVideo = () =>
  import ('components/article/forecast/weatherVideo')

const traffic = () =>
  import ('components/article/forecast/traffic')

const listPage = () =>
  import ('components/article/common-component/listPage')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [{
  path: '/forecast',
  redirect: '/forecast/refine'
},
{
  path: 'refine',
  name: 'refine',
  component: refine
}, {
  path: 'town',
  name: 'town',
  component: town
}, {
  path: 'scenicSpot',
  name: 'scenicSpot',
  component: scenicSpot
}, {
  path: 'local',
  name: 'local',
  component: local
}, {
  path: 'internal',
  name: 'internal',
  component: internal
},
{
  path: 'environment',
  name: 'environment',
  component: environment
}, {
  path: 'weatherReport',
  name: 'weatherReport',
  component: weatherReport,
  children: [{
    path: '/forecast/weatherReport',
    redirect: '/forecast/weatherReport/page/1'
  }, {
    path: 'page/:page',
    name: 'weather_Report_page',
    component: listPage,
    children: [{
      path: '/forecast/weatherReport/page',
      redirect: '/forecast/weatherReport/page/1'
    }]
  }, {
    path: 'content/:id',
    name: 'weather_Report_content',
    component: contentPage,
    children: [{
      path: '/forecast/weatherReport/content',
      redirect: '/forecast/weatherReport/page/1'
    }]
  }]
}, {
  path: 'weatherNews',
  name: 'weatherNews',
  component: weatherNews,
  children: [{
    path: '/forecast/weatherNews',
    redirect: '/forecast/weatherNews/page/1'
  }, {
    path: 'page/:page',
    name: 'weather_news_page',
    component: listPage,
    children: [{
      path: '/forecast/weatherNews/page',
      redirect: '/forecast/weatherNews/page/1'
    }]
  }, {
    path: 'content/:id',
    name: 'weather_news_content',
    component: contentPage,
    children: [{
      path: '/forecast/weatherNews/content',
      redirect: '/forecast/weatherNews/page/1'
    }]
  }]
}, {
  path: 'weatherVideo',
  name: 'weatherVideo',
  component: weatherVideo
}, {
  path: 'traffic',
  name: 'traffic',
  component: traffic
}]

const introduce = () =>
  import ('components/article/tornado/introduce')

const news = () =>
  import ('components/article/tornado/news')

const listPage = () =>
  import ('components/article/common-component/listPage')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [
  {
    path: '/tornado',
    redirect: '/tornado/introduce'
  }, {
    path: 'introduce',
    name: 'introduce',
    component: introduce
  }, {
    path: 'news',
    name: 'news',
    component: news,
    children: [{
      path: '/tornado/news',
      redirect: '/tornado/news/page/1'
    }, {
      path: '/tornado/news/page',
      redirect: '/tornado/news/page/1'
    }, {
      path: '/tornado/news/content',
      redirect: '/tornado/news/page/1'
    }, {
      path: 'page/:page',
      name: 'tornado_news_page',
      component: listPage
    }, {
      path: 'content/:id',
      name: 'tornado_news_content',
      component: contentPage
    }]
  }
]

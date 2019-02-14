const news = () =>
  import ('components/article/popularize/news')

const listPage = () =>
  import ('components/article/common-component/listPage')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [{
  path: '/popularize',
  redirect: '/popularize/news/page/1'
}, {
  path: 'news',
  name: 'news',
  component: news,
  children: [{
    path: '/popularize/news',
    redirect: '/popularize/news/page/1'
  }, {
    path: '/popularize/news/page',
    redirect: '/popularize/news/page/1'
  }, {
    path: '/popularize/news/content',
    redirect: '/popularize/news/page/1'
  }, {
    path: 'page/:page',
    name: 'popularize_news_page',
    component: listPage
  }, {
    path: 'content/:id',
    name: 'popularize_news_content',
    component: contentPage
  }]
}]
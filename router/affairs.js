const publicComponent = () =>
  import ('components/article/affairs/public')

const service = () =>
  import ('components/article/affairs/service')

const communication = () =>
  import ('components/article/affairs/communication/index')

const communicationSuggestion = () =>
  import ('components/article/affairs/communication/suggestion')

const communicationResearch = () =>
  import ('components/article/affairs/communication/research')

const notice = () =>
  import ('components/article/affairs/notice')

const news = () =>
  import ('components/article/affairs/news')

const suggestion = () =>
  import ('components/article/affairs/suggestion')

const listPage = () =>
  import ('components/article/common-component/listPage')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [{
    path: '/affairs',
    redirect: '/affairs/public'
  },
  {
    path: 'public/:current',
    name: 'public',
    component: publicComponent,
    children: [{
      path: '/affairs/public',
      redirect: '/affairs/public/responsibility/page/1'
    }, {
      path: '/affairs/public/:current',
      redirect: '/affairs/public/:current/page/1'
    }, {
      path: '/affairs/public/:current/page',
      redirect: '/affairs/public/:current/page/1'
    }, {
      path: '/affairs/public/:current/content',
      redirect: '/affairs/public/:current/page/1'
    }, {
      path: 'page/:page',
      name: 'affairs_public_page',
      component: listPage
    }, {
      path: 'content/:id',
      name: 'affairs_public_content',
      component: contentPage
    }]
  }, {
    path: 'service',
    name: 'service',
    component: service,
    children: [{
      path: '/affairs/service/content',
      redirect: '/affairs/service'
    }, {
      path: 'content/:id',
      name: 'affairs_service_content',
      component: contentPage
    }]
  }, {
    path: 'communication',
    name: 'communication',
    component: communication,
    children: [{
      path: '/affairs/communication',
      redirect: '/affairs/communication/research/page/1'
    }, {
      path: 'research',
      name: 'affairs_communication_research',
      component: communicationResearch,
      children: [{
        path: '/affairs/communication/research',
        redirect: '/affairs/communication/research/page/1'
      }, {
        path: '/affairs/communication/research/page',
        redirect: '/affairs/communication/research/page/1'
      }, {
        path: '/affairs/communication/research/content',
        redirect: '/affairs/communication/research/page/1'
      }, {
        path: 'page/:page',
        name: 'affairs_communication_research_page',
        component: listPage
      }, {
        path: 'content/:id',
        name: 'affairs_communication_research_content',
        component: contentPage
      }]
    }, {
      path: 'suggestion/:page',
      name: 'affairs_communication_suggestion',
      component: communicationSuggestion,
      children: [{
        path: '/affairs/communication/suggestion',
        redirect: '/affairs/communication/suggestion/1'
      }, {
        path: '/affairs/communication/suggestion/page',
        redirect: '/affairs/communication/suggestion/1'
      }]
    }]
  }, {
    path: 'notice',
    name: 'notice',
    component: notice,
    children: [{
      path: '/affairs/notice',
      redirect: '/affairs/notice/page/1'
    }, {
      path: '/affairs/notice/page',
      redirect: '/affairs/notice/page/1'
    }, {
      path: '/affairs/notice/content',
      redirect: '/affairs/notice/page/1'
    }, {
      path: 'page/:page',
      name: 'affairs_notice_page',
      component: listPage
    }, {
      path: 'content/:id',
      name: 'affairs_notice_content',
      component: contentPage
    }]
  }, {
    path: 'news',
    name: 'news',
    component: news,
    children: [{
      path: '/affairs/news',
      redirect: '/affairs/news/page/1'
    }, {
      path: '/affairs/news/page',
      redirect: '/affairs/news/page/1'
    }, {
      path: '/affairs/news/content',
      redirect: '/affairs/news/page/1'
    }, {
      path: 'page/:page',
      name: 'affairs_news_page',
      component: listPage
    }, {
      path: 'content/:id',
      name: 'affairs_news_content',
      component: contentPage
    }]
  }, {
    path: 'suggestion',
    name: 'suggestion',
    component: suggestion
  }
]
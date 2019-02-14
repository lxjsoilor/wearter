const foshan = () =>
  import ('components/article/service/foshan')
const prediction = () =>
  import ('components/article/service/prediction')
const notice = () =>
  import ('components/article/service/notice')

const listPage = () =>
  import ('components/article/common-component/listPage')

const contentPage = () =>
  import ('components/article/common-component/contentPage')

export default [{
  path: '/service',
  redirect: '/service/foshan'
}, {
  path: 'foshan',
  name: 'foshan',
  component: foshan
}, {
  path: 'prediction',
  name: 'prediction',
  component: prediction
}, {
  path: 'notice',
  name: 'notice',
  component: notice,
  children: [{
    path: '/service/notice',
    redirect: '/service/notice/page/1'
  }, {
    path: 'page/:page',
    name: 'service_notice_page',
    component: listPage,
    children: [{
      path: '/service/notice/page',
      redirect: '/service/notice/page/1'
    }]
  }, {
    path: 'content/:id',
    name: 'service_notice_content',
    component: contentPage,
    children: [{
      path: '/service/notice/content',
      redirect: '/service/notice/page/1'
    }]
  }]
}]
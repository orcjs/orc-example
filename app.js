const Orc = require('orcjs')
const DEV_PORT = 8000 // 默认端口不传为7000
const DEV_DIR = 'examples' // 定义你的开发工作目录，默认不传为当前目录
const router = require('./examples/manage/rotuer')
const DEV_VIEWS = require('./examples/manage/views')

// 给 app 实例建立路由有两种选择
// 1).配置 views 项，这边主要适用于给指定文件约定你想要访问的路由路径
// 2).自带 Router 实例，支持get、post、del、put方法， 通过回调方法渲染页面或请求接口

/*
 * 1).views 路由配置：给指定文件约定你想要访问的路由路径
 * @description key : 路由路径
 * @description title : 页面标题
 * @description fileName : 文件名
 */

/*
 * 2). Router 配置： 通过回调方法渲染页面或请求接口
 */

// 创建应用实例
const app = new Orc({
  port: DEV_PORT,
  views: DEV_VIEWS,
  rootPath: DEV_DIR
})

// 注册路由
app.use(router.handle())

// 监听报错
app.on('error', err => {
  console.log('报错信息: ', err)
})

const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const koaMount = require('koa-mount')
const koaLogger = require('koa-logger')
const koaStatic = require('koa-static')
const koaParser = require('koa-parser')
// 引入mongodb
const database = require('./database')
const GraphqlRouter = require('./router')

const port = 3000
const app = new Koa()
const router = new Router()
database()

app.use(koaLogger())
app.use(koaParser())
app.use(koaMount('/', koaStatic(path.join(__dirname, './static'))))

router.use('', GraphqlRouter.routes())
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)

console.log(`graphQL server listen port: ${port}`)

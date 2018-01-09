const Router = require('koa-router')
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa')
// 引入info controller
const { saveInfo, fetchInfo } = require('../controllers/info')
// 引入 student controller
const { saveStudent, fetchStudent, fetchStudentDetail } = require('../controllers/student')
const schema = require('../graphql/schema')

const router = new Router()

router
  .post('/saveinfo', saveInfo)
  .get('/info', fetchInfo)
  .post('/savestudent', saveStudent)
  .get('/student', fetchStudent)
  .get('/studentDetail', fetchStudentDetail)

router
  .post('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next) // 使用schema
  })
  .get('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema: schema })(ctx, next) // 使用schema
  })
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next) // 重定向到graphiql路由
  })

module.exports = router

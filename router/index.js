const Router = require('koa-router')
const { graphiqlKoa } = require('graphql-server-koa')
// 引入info controller
const { saveInfo, fetchInfo } = require('../controllers/info')
// 引入 student controller
const { saveStudent, fetchStudent, fetchStudentDetail } = require('../controllers/student')

const router = new Router()

router.post('/saveinfo', saveInfo)
  .get('/info', fetchInfo)
  .post('/savestudent', saveStudent)
  .get('/student', fetchStudent)
  .get('/studentDetail', fetchStudentDetail)
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
  })
module.exports = router

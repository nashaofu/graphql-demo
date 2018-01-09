// 引入GraphQL各种方法类型
const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql')
const { info, infos } = require('./info')
const { student, setStudent } = require('./student')

// 导出GraphQLSchema模块
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      student
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: {
      setStudent
    }
  })
})

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull
} = require('graphql')

const mongoose = require('mongoose')

const { InfoType } = require('./info')
const Student = mongoose.model('Student')

let StudentType = new GraphQLObjectType({
  name: 'Student',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    sex: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    info: {
      type: InfoType
    }
  }
})

const student = {
  type: new GraphQLList(StudentType),
  args: {},
  resolve (root, params, options) {
    return Student.find({}).populate({
      path: 'info',
      select: 'hobby height weight'
    }).exec()
  }
}

let studentInput = new GraphQLInputObjectType({
  name: 'NameInput',
  fields: {
    name: {
      type: GraphQLString
    },
    sex: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
})

const setStudent = {
  type: StudentType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(studentInput)// 参数不为空
    }
  },
  async resolve (root, params, options) {
    console.log(params.data.name)
    const student = new Student(params.data)
    const saveStudent = await student.save() // 保存数据
    return saveStudent
  }
}

module.exports = {
  student,
  setStudent
}

import axios from 'axios'

document.querySelector('#get').addEventListener('click', () => {
  axios.get('/graphql', {
    params: {
      query: `{
      student {
        _id
        name
        sex
        age
        info {
          _id
          height
          weight
          hobby
        }
      }
    }
    `
    }
  }).then(({ data }) => {
    document.querySelector('#getdata').innerText = JSON.stringify(data, null, 2)
    console.dir(data)
  })
})

document.querySelector('#set').addEventListener('click', () => {
  axios({
    url: '/graphql',
    method: 'post',
    data: {
      query: `mutation($input_name: NameInput!){
        setStudent(data: $input_name) {
          _id
          name
          sex
          age
        }
      }
      `,
      variables: {
        input_name: {
          name: 'nashaofu',
          sex: 'man',
          age: 20
        }
      }
    }
  }).then(({ data }) => {
    document.querySelector('#getdata').innerText = JSON.stringify(data, null, 2)
    console.dir(data)
  })
})

# graphql-demo
GraphQL demo

```bash
# install parcel
npm i -g parcel

# install dependencies
npm install

# build static file
npm run build

# run server
npm run dev
```

## TODOS
- [ ] 编写多个参数变更
- [ ] 减少参数层级，希望实现如下示例变更，目前还不清楚是否可以实现
```javascript
{
  input_name: {
    name: 'nashaofu',
    sex: 'man',
    age: 20
  }
}
```
```javascript
{
  input_name: "nashaofu"
  input_sex: 'man',
  input_age: 20
}
```

const Orc = require('orcjs')
const ROUTER_CONF = require('./examples/manage/router')

const app = new Orc({
  port: 8887,
  router: ROUTER_CONF,
  rootPath: 'examples'
})

// JSON
app.get('/me', {
  code: 1,
  resultData: {
    name: '余树',
    age: 18,
    city: 'HangZhou'
  }
})

// HTML
app.get('/orc', 'hellow orcjs')

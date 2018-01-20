import express from 'express'

let app = express()

// Set the view engine to ejs
app.set('view engine', 'ejs')

// Serve static files from the 'public' folder
app.use(express.static('public'))

// GET /
app.get('/', function (req, res) {
  global.navigator = global.navigator || {}
  global.navigator.userAgent = req.headers['user-agent'] || 'all'

  res.render('layout')
})

// REGISTER
app.get('/register', function (req, res) {
  global.navigator = global.navigator || {}
  global.navigator.userAgent = req.headers['user-agent'] || 'all'

  res.render('register')
})

// 404
app.get('*', function (req, res) {
  global.navigator = global.navigator || {}
  global.navigator.userAgent = req.headers['user-agent'] || 'all'

  res.render('404')
})

// Start server
let server = app.listen(1337, function () {
  let host = server.address().address
  let port = server.address().port

  if (host === '::') {
    host = 'localhost'
  }

  console.log('Example app listening at http://%s:%s', host, port)
})

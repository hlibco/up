const http = require('http')
const { PORT = 4000 } = process.env

http.createServer((req, res) => {
  var response = JSON.stringify({
    date: new Date()
  })

  res.end(response)
}).listen(PORT)

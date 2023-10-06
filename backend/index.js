const connectToMongo= require('./db');
const express = require('express')


connectToMongo(); 

const app = express()
const port = 6000

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello iNotebook User!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

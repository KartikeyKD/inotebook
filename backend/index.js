const connectToMongo= require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo(); 

const app = express()

app.use(cors())

const port = 5000

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello Privy User!')
})

app.listen(port, () => {
  console.log(`Privy is actively running on port http://localhost:${port}`)
})

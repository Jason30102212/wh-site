const express = require('express')
var enforce = require('express-sslify')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect to database via config/db
connectDB()

// Init Middleware
app.use(express.json())
app.use(enforce.HTTPS());

// Define Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/tutorial-tree', require('./routes/api/tutorialTree'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

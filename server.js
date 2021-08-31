const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect to database via config/db
connectDB()

// Init Middleware
app.use(express.json())

// Define Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/tutorial-tree', require('./routes/api/tutorialTree'))

if (process.env.NODE_ENV === 'production') {

  if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }

  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

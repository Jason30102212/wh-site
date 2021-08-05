const mongoose = require('mongoose')

const TutorialContentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  heading: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  videos: [
    {
      name: {
        type: String,
        require: true
      },
      videoUrlDescription: {
        type: String,
        require: true
      }
    }
  ]
})

module.exports = mongoose.model('tutorialContent', TutorialContentSchema)

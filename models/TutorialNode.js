const mongoose = require('mongoose')

const TutorialNode = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  class: {
    type: String
  },
  xMod: {
    type: String,
    require: true
  },
  yMod: {
    type: String,
    require: true
  },
  targetId: {
    type: String
  },
  sourceId: {
    type: String
  },
  targetPosition: {
    type: String
  },
  sourcePosition: {
    type: String
  }
})

module.exports = mongoose.model('tutorialNode', TutorialNode)

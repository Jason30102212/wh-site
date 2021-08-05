const express = require('express')
const router = express.Router()

const TutorialNode = require('../../models/TutorialNode')
const TutorialContent = require('../../models/tutorialContent')

// @route     GET api/tutorial-nodes/test
// @desc      Test tutorial-nodes routes are connected
// @access    Public
router.get('/test', async (req, res) => {
  try {
    return res.json({test: 'success'})
  } catch (err) {
    return res.json({error: 'err'})
  }
})

// @route     GET api/tutorial-nodes
// @desc      Get all tutorial-nodes
// @access    Public
router.get('/', async (req, res) => {
  try {
    const tutorialNodes = await TutorialNode.find()
    res.json(tutorialNodes)
  } catch (err) {
    res.status(500).send('Server errror')
  }
})

// @route     GET api/tutorial-nodes/tutorial-content
// @desc      Get all tutorial-content
// @access    Public
router.get('/tutorial-content', async (req, res) => {
  try {
    const tutorialContent = await TutorialContent.find()
    res.json(tutorialContent)
  } catch (err) {
    res.status(500).send('Server errror')
  }
})

// @route     POST api/tutorial-nodes
// desc       Post node data
// @access    Public
router.post('/', async (req, res) => {
  try {
    const newNode = new TutorialNode({
      id: "9",
      title: "Beginner JavaScript",
      name: "beginner-javascript",
      class: "tutorial",
      xMod: "2.5",
      yMod: "-12",
      targetId: "0",
      sourceId: "8",
      targetPosition: "bottom",
      sourcePosition: "top"
    })
    const newContent = new TutorialContent({
      name: "beginner-javascript",
      heading: "Beginner JavaScript",
      description: "This is the Beginning Tutorial for JavaScript",
      videos: [
        {
          name: "Basic JavaScript Tutorial (Part 2) Setting Up The Development Environment",
          videoUrlDescription: "ni76sn01qtY"
        },
        {
          name: "Basic JavaScript Tutorial (Part 3) Variables",
          videoUrlDescription: "0ffpoJoxamA"
        },
        {
          name: "Basic JavaScript Tutorial (Part 4) Primitive Data Types",
          videoUrlDescription: "38gn5DfEGC8"
        },
        {
          name: "Basic JavaScript Tutorial (Part 5) Arithmetic Operators",
          videoUrlDescription: "pEgXU2782Ig"
        },
        {
          name: "Basic JavaScript Tutorial (Part 6) Comparison Operators",
          videoUrlDescription: "pPBuVFV-iE4"
        },
        {
          name: "Basic JavaScript Tutorial (Part 7) Logical Operators and the Ternary Operator",
          videoUrlDescription: "WsV8aqy1A5U"
        },
        {
          name: "Basic JavaScript Tutorial (Part 8) Assignment Operators",
          videoUrlDescription: "NBKnUNEN5Yw"
        },
        {
          name: "Basic JavaScript Tutorial (Part 9) Objects Basics",
          videoUrlDescription: "2NECa6j5on0"
        }
      ]
      // videos: [
      //   {
      //   "name": "Quick Start create-react-app Tutorial with Server and Hosting online on Heroku. Beginning MERN stack",
      //   "videoUrlDescription": "9xnHFkpFpGQ"
      //   }
      // ]
    })
    const node = newNode.save()
    .then(res => {
      console.log(res);
      const content = newContent.save()
      return content
    })
    .then(content => {
      console.log(res);
      return res.json(content)
    })
  } catch (err) {
    res.status(500).send('Server error')
  }
})

// // @route     POST api/tutorial-nodes/tutorial-content
// // @desc      Post content data
// // @access    Public
// router.post('/tutorial-content', async (req, res) => {
//   try {
//     const newContent = new TutorialContent({
//       name: "Test Content",
//       heading: "Test heading",
//       description: "Test description",
//       videos: [
//         {
//           name: "Video 1",
//           videoUrlDescription: "Video URL"
//         }
//       ]
//     })
//     const item = newContent.save()
//     res.json(item)
//   } catch (err) {
//     res.status(500).send('Server error')
//   }
// })


module.exports = router

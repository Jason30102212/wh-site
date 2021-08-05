import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

import TutorialTreeContainer from '../TutorialTreeContainer/TutorialTreeContainer.js'

// const useStyles = makeStyles({
//   displayNode: {
//     fontSize: '30px',
//     color: 'white',
//     height: '15rem',
//     width: '15rem',
//     borderColor: 'white'
//   },
//   frameworkNode: {
//     backgroundColor: 'green',
//     '&:hover': {
//       backgroundColor: 'darkGreen',
//     },
//     borderRadius: '100px'
//   },
//   languageNode: {
//     backgroundColor: 'red',
//     '&:hover': {
//       backgroundColor: 'darkRed',
//     },
//     borderRadius: '100px'
//   },
//   closeButtonContainer: {
//     textAlign: 'center'
//   },
//   tuteNode: {
//     backgroundColor: 'blue',
//     '&:hover': {
//       backgroundColor: 'darkblue'
//     },
//     borderRadius: '100px'
//   },
//   closeButton: {
//     position: 'relative',
//     width: '50px',
//     height: '50px',
//     border: '2px solid #eef5df',
//     backgroundColor: '#ff5248',
//     borderRadius: '50%',
//     marginTop: '20px',
//     color: 'white',
//     '&:hover': {
//       cursor: 'pointer',
//       '&::before, &::after': {
//         display: 'block'
//       }
//     }
//   }
// })

const TutorialTreeWrapper = ({state, actions}) => {
  const [componentData, setComponentData] = useState(
    {
      learningTreeNodes: '',
      nodesAreLoaded: false,
      learningTreeContent: '',
      contentIsLoaded: false,
      learningTreeElements: '',
      isContentExpanded: false
    }
  )

  const dummyNodes = [
    {
    "id": "0",
    "title": "JavaScript",
    "name": "javascript",
    "xMod": "1",
    "yMod": "1",
    "targetId": "1",
    "targetPosition": "left",
    "sourcePosition": "right"
    },
    {
    "id": "1",
    "title": "NodeJS",
    "name": "nodejs",
    "xMod": "2",
    "yMod": "2",
    "targetId": "2",
    "targetPosition": "left",
    "sourcePosition": "right"
    },
    {
    "id": "2",
    "title": "React",
    "name": "react",
    "class": "framework",
    "xMod": "3",
    "yMod": "3",
    "targetId": "3",
    "targetPosition": "left",
    "sourcePosition": "right"
    },
    {
    "id": "3",
    "title": "React Boilerplate",
    "name": "react-boilerplate",
    "class": "tutorial",
    "xMod": "4",
    "yMod": "4",
    "targetId": "4",
    "targetPosition": "left",
    "sourcePosition": "right"
    }
  ]

  const dummyContent = [
    {
    "name": "javascript",
    "heading": "JavaScript",
    "description": "This is the JavaScript description"
    },
    {
    "name": "nodejs",
    "heading": "NodeJS",
    "description": "This is the NodeJs description"
    },
    {
    "name": "react",
    "heading": "React",
    "description": "This is the React description"
    },
    {
    "name": "react-boilerplate",
    "heading": "React Boilerplate",
    "description": "This is the tutorial section for a basic React setup",
    "videos": [
      {
      "name": "Quick Start create-react-app Tutorial with Server and Hosting online on Heroku. Beginning MERN stack",
      "videoUrlDescription": "9xnHFkpFpGQ"
      }
    ]
  }]

  useEffect(() => {
    async function fetchData() {
      let nodes = await axios({
        method: 'get',
        url: '/api/tutorial-tree/'
      }) // Replace with DB extracted data
      let content = await axios({
        method: 'get',
        url: '/api/tutorial-tree/tutorial-content'
      })  // Replace with DB extracted data
      nodes = await formattingHandler(nodes) // May need to access (nodes.content.rendered) when extracting DB data
      content = await formattingHandler(content) // May need to access (nodes.content.rendered) when extracting DB data
      let test = axios({
        method: 'get',
        url: '/api/tutorial-tree/'
      })

      console.log(test);
      setComponentData({
        ...componentData,
        learningTreeNodes: nodes.data,
        nodesAreLoaded: true,
        learningTreeContent: content.data,
        contentIsLoaded: true,
        isContentExpanded: false
      })
    }
    fetchData()
  }, [])

  const formattingHandler = async (string) => {
    return string
    // let json
    // try {
    //   let formattedString = string
    //   console.log('formattedString: ', formattedString);
    //   json = JSON.parse(formattedString)
    // } catch (err) {
    //   console.error(err);
    // }
    // return json
  }

  const jsonConverter = (string) => {

    string = string.replaceAll("<p>", "")
    string = string.replaceAll("</p>", "")
    string = string.replaceAll("<br />", "")
    string = string.replaceAll("&#8220;", '"')
    string = string.replaceAll("&#8221;", '"')
    string = string.replaceAll("&#8216;", "'")
    string = string.replaceAll("&#8217;", "'")
    string = string.replaceAll("&#8211;", "-")

    return string
  }

  const display = () => {
    if(componentData.contentIsLoaded) {
      return (
        <div>
          <TutorialTreeContainer
            data={componentData}
          />
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }

  return (
    <div>
      {display()}
    </div>
  )
}

export default TutorialTreeWrapper

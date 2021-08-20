import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

import TutorialTreeContainer from '../TutorialTreeContainer/TutorialTreeContainer.js'

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

  useEffect(() => {
    async function fetchData() {
      let nodes = await axios({
        method: 'get',
        url: '/api/tutorial-tree/'
      }) // Replace with DB extracted data
      let content = await axios({
        method: 'get',
        url: '/api/tutorial-tree/tutorial-content'
      })
      nodes = await formattingHandler(nodes)
      content = await formattingHandler(content)
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

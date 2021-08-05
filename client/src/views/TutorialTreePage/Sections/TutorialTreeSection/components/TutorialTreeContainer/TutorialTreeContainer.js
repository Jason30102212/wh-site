import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactFlow from 'react-flow-renderer'
//import DisplayContent from ''

import TutorialTreeContentDisplay from '../TutorialTreeContentDisplay/TutorialTreeContentDisplay.js'

const useStyles = makeStyles({
  displayNode: {
    fontSize: '30px',
    color: 'white',
    height: '15rem',
    width: '15rem',
    borderColor: 'white',
    '&:hover': {
      fontSize: '35px'
    },
    '& > div:nth-child(2)': {
      cursor: 'pointer',
      margin: '0',
      position: 'absolute',
      top: '50%',
      msTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
      textAlign: 'center',
      width: '92%'
    }
  },
  frameworkNode: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'darkGreen',
    },
    borderRadius: '100px'
  },
  languageNode: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'darkRed',
    },
    borderRadius: '100px'
  },
  closeButtonContainer: {
    textAlign: 'center'
  },
  tuteNode: {
    backgroundColor: 'blue',
    '&:hover': {
      backgroundColor: 'darkblue'
    },
    borderRadius: '100px'
  },
  closeButton: {
    position: 'relative',
    width: '50px',
    height: '50px',
    border: '2px solid #eef5df',
    backgroundColor: '#ff5248',
    borderRadius: '50%',
    marginTop: '20px',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
      '&::before, &::after': {
        display: 'block'
      }
    }
  }
})

const TutorialTreeContainer = (props) => {
  const [learningTreeNodes, setLearningTreeNodes] = useState()
  const [selectedNode, setSelectedNode] = useState()
  const [areNodesGenerated, setAreNodesGenerated] = useState(false)
  const [isContentExpanded, setIsContentExpanded] = useState(false)

  useEffect (() => {
    let data = elementGenerator(
      props.data.learningTreeNodes,
      props.data.learningTreeContent
    ).then(res => {
      handleState(res)
    }).then(res => {
      setAreNodesGenerated(true)
    })
  }, [])

  const handleState = async (data) => {
    try {
      return await setLearningTreeNodes(data)
    } catch(err) {
      console.error(err);
    }
  }

  const classes = useStyles()

  const elementGenerator = async (nodesArray, contentArray) => {
    const elements = []

    const xDefault = 400
    const yDefault = 50

    await nodesArray.map(node => {
      let style = classes.framework

      switch (node.class) {
        case 'framework':
          style = classes.frameworkNode
          break
        case 'tutorial':
          style = classes.tuteNode
          break
        default:
          style = classes.languageNode
      }

      const displayContent = (id, contentArray) => {
        setSelectedNode(contentArray.find(x => x.name === node.name))
        setIsContentExpanded(true)
      }

      elements.push(
        {
          id: node.id,
          data: { label: <div onClick={() => displayContent(parseInt(node.id), contentArray)}>{node.title}</div> },
          position: {x: (xDefault * parseInt(node.xMod)), y: (yDefault * parseInt(node.yMod))},
          targetPosition: node.targetPosition,
          sourcePosition: node.sourcePosition,
          className: style + " " + classes.displayNode,
          content: contentArray.find(x => x.name === node.name)
        }
      )

      if (node.sourceId) {
        elements.push(
          { id: 'e' + node.sourceId + '-' + node.id + '', source: node.sourceId, target: node.id, arrowHeadType: 'arrowclosed'}
        )
      } else if (node.targetId) {
        elements.push(
          { id: 'e' + node.id + '-' + node.targetId + '', source: node.id, target: node.targetId, arrowHeadType: 'arrowclosed'}
        )
      }
  })
    return elements
  }

  const displayNode = () => {
    if(learningTreeNodes && areNodesGenerated) {
      return (
        <div style={{ height: 500 }}>
          <ReactFlow
            defaultZoom={.5}
            defaultPosition={[0, 200]}
            elements={learningTreeNodes}
          />
        </div>
      )
    }
  }

  const changeExpansionStatus = () => {
    setIsContentExpanded(false)
  }

  const displayContent = () => {
    if(isContentExpanded) {
      return (
        <div>
          <div className={classes.closeButtonContainer}>
            <button className={classes.closeButton} onClick={() => changeExpansionStatus()}>X</button>
          </div>
          <TutorialTreeContentDisplay
            content={selectedNode}
          />
        </div>
      )
    }
  }

  return (
    <div>
      {displayNode()}
      {displayContent()}
    </div>
  )
}

export default TutorialTreeContainer

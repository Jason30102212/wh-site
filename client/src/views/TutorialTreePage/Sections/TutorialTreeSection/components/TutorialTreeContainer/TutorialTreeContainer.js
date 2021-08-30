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
    backgroundColor: '#26a6ab',
    '&:hover': {
      backgroundColor: '#016569',
    },
    borderRadius: '100px'
  },
  languageNode: {
    backgroundColor: '#e63946',
    '&:hover': {
      backgroundColor: '#9e0813',
    },
    borderRadius: '100px'
  },
  closeButtonContainer: {
    textAlign: 'center'
  },
  tuteNode: {
    backgroundColor: '#457b9d',
    '&:hover': {
      backgroundColor: '#014c7a'
    },
    borderRadius: '100px'
  },
  closeButton: {
    position: 'relative',
    width: '50px',
    height: '50px',
    border: '2px solid #eef5df',
    backgroundColor: '#b3121e',
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
          className: style + " " + classes.displayNode + " , card",
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
        <div style={{ height: 700, backgroundColor: '#eeeeee' }}>
          <div className="card" style={{height: '', width: '', backgroundColor: 'grey', position: 'absolute', left: '40px', top: '100px'}}>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <div className="card" style={{height: '12px', width: '12px', backgroundColor: '#e63946', margin: '5px'}}>
              </div>
              <div style={{margin: '5px'}}>
                Languages
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <div className="card" style={{height: '12px', width: '12px', backgroundColor: '#457b9d', margin: '5px'}}>
              </div>
              <div style={{margin: '5px'}}>
                Tutorials
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <div className="card" style={{height: '12px', width: '12px', backgroundColor: '#26a6ab', margin: '5px'}}>
              </div>
              <div style={{margin: '5px'}}>
                Frameworks
              </div>
            </div>
          </div>
          <ReactFlow
            defaultZoom={0.05}
            defaultPosition={[200, 400]}
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

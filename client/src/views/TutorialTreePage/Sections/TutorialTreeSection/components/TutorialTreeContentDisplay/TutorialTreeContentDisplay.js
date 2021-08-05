import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import EmbeddedVideoDisplay from '../EmbeddedVideoDisplay/EmbeddedVideoDisplay.js'

 const useStyles = makeStyles({
   root: {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    justifyContent:'space-around',
    flexDirection: 'column'
   },
    title: {
      color: 'grey',
      fontSize: 30
    },
    subheading: {
      color: 'grey'
    },
    pushDown: {
      height: '300px',
      color: 'grey'
    }
 })

const TutorialTreeContentDisplay = (props) => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{props.content.heading}</h1>
      <p className={classes.subheading}>{props.content.description}</p>
      {console.log(props.content.videos)}
      {
        props.content.videos
        ?
        <EmbeddedVideoDisplay
          videos={props.content.videos}
        />
        :
        <div className={classes.pushDown}>
          here
        </div>
      }
    </div>
  )
}

export default TutorialTreeContentDisplay

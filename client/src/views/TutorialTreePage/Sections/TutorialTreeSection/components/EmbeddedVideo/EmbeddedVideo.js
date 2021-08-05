import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles({
  root: {
    minWidth: 10,
    maxWidth: 500,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 8,
    padding: 20
  },
  heading: {
    fontSize: '30px'
  },
  pos: {
    marginBottom: 12,
  },
});

const EmbeddedVideo = (props) => {

  const classes = useStyles()

  const {name, videoUrlDescription} = props.video

  return (
    <Card className={classes.root}>
      <div className={classes.title}>
        <h1 className={classes.heading}>{name}</h1>
      </div>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoUrlDescription}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </Card>
  )
}

export default EmbeddedVideo

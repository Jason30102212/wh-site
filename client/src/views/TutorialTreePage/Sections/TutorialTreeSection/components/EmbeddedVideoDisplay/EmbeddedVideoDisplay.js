import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import EmbeddedVideo from '../EmbeddedVideo/EmbeddedVideo.js'

const useStyles = makeStyles({
  embeddedVideoDisplay: {
    display: 'inline-flex',
    gap: '100px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      cursor: 'grabbing'
    }
  },
  embeddedVideoDisplayInner: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '30px',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  push: {
    height: '400px'
  }
})

const EmbeddedVideoDisplay = (props) => {

  const classes = useStyles()

  const displayVideos = () => {
    return (
      props.videos.map(video => {
        return (
          <EmbeddedVideo
            key={video.videoUrlDescription}
            video={video}
          />
        )
      })
    )
  }

  return (
    <div className={classes.embeddedVideoDisplay}>
      {
        props.videos
        ?
        <div className={classes.embeddedVideoDisplayInner}>
          {displayVideos()}
        </div>
        :
        <div>
        </div>
      }
    </div>
  )
}

export default EmbeddedVideoDisplay

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  blogContainer: {
    overflow: "hidden",
    height: '100vh',
    width: '100vw'
  },
  blogIframe: {
    height: '100vh',
    width: '100vw'
  }
})

const BlogPage = () => {

  const classes = useStyles()

  return (
    <div className={classes.blogContainer}>
      <iframe className={classes.blogIframe} src="https://wildhackblog.herokuapp.com/" title="Wild Hack Blog"></iframe>
    </div>
  )
}

export default BlogPage

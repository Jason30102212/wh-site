import React from "react"
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import githubLogo from "../../../assets/img/github-logo.png"


import tutorialTreeImage from "../../../assets/img/tutorial-tree.PNG"

import styles from "../../../assets/jss/material-kit-react/views/tutorialsPage.js";
const useStyles = makeStyles(styles);

const RepositoriesSection = () => {
  const classes = useStyles();


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <img src={githubLogo} style={{width: "100%", borderRadius: "1000px", filter: "drop-shadow(5px 5px 5px #222)"}}>

          </img>
        </GridItem>
        <GridItem xs={12} sm={12} md={9} style={{textAlign: "left"}}>
          <h2 className={classes.title}><a href='/tutorial_tree'>Repositories</a></h2>
          <h5 className={classes.description}>
            View and download tutorial repositories.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default RepositoriesSection

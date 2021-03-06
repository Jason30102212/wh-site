import React from "react"
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import tutorialTreeImage from "../../../assets/img/tutorial-tree.PNG"

import styles from "../../../assets/jss/material-kit-react/views/tutorialsPage.js";
const useStyles = makeStyles(styles);

const TutorialSection = () => {
  const classes = useStyles();


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <img src={tutorialTreeImage} style={{width: "150px", height: "150px", borderRadius: "1000px", filter: "drop-shadow(5px 5px 5px #222)"}} />
        </GridItem>
        <GridItem xs={12} sm={12} md={9} style={{textAlign: "left"}}>
          <h2 className={classes.title}><a href='/tutorial_tree'>Tutorial Tree</a></h2>
          <h5 className={classes.description}>
            Check out the tutorial tree for programming tutorials based on a
            range of frameworks and languages.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default TutorialSection

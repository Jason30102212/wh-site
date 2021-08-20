import React from "react"
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import logoImage from "../../../assets/img/logo1.png"

import styles from "../../../assets/jss/material-kit-react/views/tutorialsPage.js";
const useStyles = makeStyles(styles);

const TutorialSection = () => {
  const classes = useStyles();


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3} >
          <img src={logoImage} style={{width: "150px", borderRadius: "1000px", filter: "drop-shadow(5px 5px 5px #222)"}} />
        </GridItem>
        <GridItem xs={12} sm={12} md={9} style={{textAlign: "left"}}>
          <h2 className={classes.title}><a href='/blog'>Blog</a></h2>
          <h5 className={classes.description}>
            Stay up to date with new posts and tutorials by visiting the Wild
            Hack blog.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default TutorialSection

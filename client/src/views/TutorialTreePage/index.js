import React from 'react'
import classNames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import TutorialTreeSection from './Sections/TutorialTreeSection/TutorialTreeSection.js'
import Footer from "../../components/Footer/Footer.js";


const dashboardRoutes = []
const useStyles = makeStyles(styles);

var containerStyle = {
  maxWidth: '2000px',
  minHeight: '800px'
}


const TutorialTreePage = (props) => {
  const classes = useStyles();
  const {...rest} = props
  return (
    <div>
      <Header
        color="default"
        routes={dashboardRoutes}
        brand="Wild Hack"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container} style={containerStyle}>
          <TutorialTreeSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TutorialTreePage

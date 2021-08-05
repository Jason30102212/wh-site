import React from 'react'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

import imageOne from "../../assets/img/landing-bg.jpg"

import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";

import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import TutorialsSection from './Sections/TutorialsSection.js';


const dashboardRoutes = []
const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  const {...rest} = props
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Wild Hack"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
        height: 400,
        color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={imageOne}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to Wild Hack</h1>
              <h4>
                A place for programming tutorials.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
          <TutorialsSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage

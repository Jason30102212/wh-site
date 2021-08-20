import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import crypto from "../../../assets/img/crypto.PNG";
import javascript from "../../../assets/img/javascript.png";
import python from "../../../assets/img/python.png";

const useStyles = makeStyles(styles);

const CurrentProjectsSection = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Current Projects</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={crypto} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                State of Crypto
                <br />
                <small className={classes.smallTitle}>Blockchain Interface</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  State of Crypto will be a site focused around the aggregation
                  of Blockchain and Crypto Currency data, with a user friendly
                  interface. It will have signup and login functionality and will
                  utilise data retrieved from api's.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={javascript} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Beginner JavaScript
                <br />
                <small className={classes.smallTitle}>Tutorial</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Currently working on the Basic JavaScript Tutorial focused on
                  fundamentals of the language including variables, data types,
                  operators and objects. This will be included in the
                  <a href="/tutorial_tree">Tutorial Tree.</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={python} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Beginner Python
                <br />
                <small className={classes.smallTitle}>Tutorial</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Working on a tutorial of the fundamentals of the python
                  programming languages, including simple and complex values,
                  variables, functions and control flows, just to name a few.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default CurrentProjectsSection

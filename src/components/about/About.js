import React from "react"
import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"

const useStyles = makeStyles(() => ({
  about: {
    background:
      "linear-gradient(90deg, #0071c7 0%, #0091c2 22%, #009ec2 50%, #00aeb8 75%, #00ad93 100%)",
    minHeight: "1080px",
    color: "white",
    position: "relative",
  },
  aboutContainer: {
    marginTop: "35vh",
    fontSize: "35px",
    zIndex: 3,
  },
  header: {
    fontSize: "6vw",
    color: "white",
  },
  description: { margin: "15vh 10vw 10vh 10vw" },
  topLeftSpan: {
    position: "absolute",
    bottom: "90%",
    left: "0",
    height: "100%",
    width: "100%",
    content: "''",
    background: "#00081a",
    transform: "skewY(5deg)",
    zIndex: 2,
  },
  topRightSpan: {
    position: "absolute",
    bottom: "-5vw",
    left: "0",
    height: "90%",
    width: "100%",
    backgroundImage:
      "linear-gradient(90deg, #0071c7 0%, #0091c2 22%, #009ec2 50%, #00aeb8 75%, #00ad93 100%)",
    transform: "skewY(-10deg)",
    zIndex: 2,
  },
  bottomRightSpan: {
    position: "absolute",
    bottom: "-100px",
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: 1,
    backgroundImage:
      "linear-gradient(90deg, #0071c7 0%, #0091c2 22%, #009ec2 50%, #00aeb8 75%, #00ad93 100%)",
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      item
      className={classes.about}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid
        container
        item
        className={classes.aboutContainer}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          {" "}
          <h1 className={classes.header}>About</h1>
        </Grid>
        <Grid item className={classes.description}>
          <p>
            Hi! I'm <strong>Kevin Shank</strong>. I'm a Web Developer currently
            based in Dearborn, MI. I recently completed a boot camp course
            through Michigan State University.
            <br />
            <br />
            I certainly enjoy the design aspect of front-end UX/UI development
            and the imagination it cultivates within me. At the end of the day,
            I'm just a creative guy who loves to solve problems, no matter what
            they may be.
            <br />
            <br />I enjoy biking, playing the piano, grilling, and long walks on
            the beach.
          </p>
        </Grid>
      </Grid>
      <span className={classes.topLeftSpan}></span>
      <span className={classes.topRightSpan}></span>
      <span className={classes.bottomRightSpan}></span>
    </Grid>
  )
}

export default About

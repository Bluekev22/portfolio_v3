import React from "react"
import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import Headshot from "../../assets/img/Headshot.png"

const useStyles = makeStyles(() => ({
  about: {
    background:
      "linear-gradient(90deg, #b76106 0%, #b38300 10%, #999100 20%, #719400 30%, #438a15 40%, #118d23 50%, #009961 60%, #008f79 70%, #008d94 80%, #00758f 90%, #007399 100%)",
    minHeight: "1280px",
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
    paddingLeft: "10vw",
  },
  descriptionHeadshotContainer: { marginTop: "5vh" },
  description: { padding: "5vh 5vw 5vh 5vw" },
  headshotContainer: { paddingLeft: "4vw" },
  headshot: {
    width: "325px",
    border: "2px solid #008d94",
    borderRadius: "2px",
  },
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
      "linear-gradient(90deg, #b76106 0%, #b38300 10%, #999100 20%, #719400 30%, #438a15 40%, #118d23 50%, #009961 60%, #008f79 70%, #008d94 80%, #00758f 90%, #007399 100%)",
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
      "linear-gradient(90deg, #b67201 0%, #b38300 10%, #999100 20%, #719400 30%, #438a15 40%, #118d23 50%, #009961 60%, #008f79 70%, #008d94 80%, #00758f 90%, #007399 100%)",
  },
}))

const About = () => {

  const classes = useStyles()
  let backGroundRef = useRef([])

  useEffect(() => {
    let tl = gsap.timeline({
      repeat: -1,
      ease: "linear",
      delay: 0,
    })

    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #b67201 0%, #b38300 10%, #999100 20%, #719400 30%, #438a15 40%, #118d23 50%, #009961 60%, #008f79 70%, #008d94 80%, #00758f 90%, #007399 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #b38300 0%, #b67201 10%, #b38300 20%, #999100 30%, #719400 40%, #438a15 50%, #118d23 60%, #009961 70%, #008f79 80%, #008d94 90%, #00758f 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #999100 0%, #b38300 10%, #b67201 20%, #b38300 30%, #999100 40%, #719400 50%, #438a15 60%, #118d23 70%, #009961 80%, #008f79 90%, #008d94 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #719400 0%, #999100 10%, #b38300 20%, #b67201 30%, #b38300 40%, #999100 50%, #719400 60%, #438a15 70%, #118d23 80%, #009961 90%, #008f79 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #438a15 0%, #719400 10%, #999100 20%, #b38306 30%, #b67201 40%, #b38300 50%, #999100 60%, #719400 70%, #438a15 80%, #118d23 90%, #009961 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #118d23 0%, #438a15 10%, #719400 20%, #999100 30%, #b38306 40%, #b67201 50%, #b38300 60%, #999100 70%, #719400 80%, #438a15 90%, #118d23 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #009961 0%, #118d23 10%, #438a15 20%, #719400 30%, #999100 40%, #b38306 50%, #b67201 60%, #b38300 70%, #999100 80%, #719400 90%, #438a15 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #008f79 0%, #009961 10%, #118d23 20%, #438a15 30%, #719400 40%, #999100 50%, #b38306 60%, #b67201 70%, #b38300 80%, #999100 90%, #719400 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #008d94 0%, #008f79 10%, #009961 20%, #118d23 30%, #438a15 40%, #719400 50%, #999100 60%, #b38306 70%, #b67201 80%, #b38300 90%, #999100 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #00758f 0%, #008d94 10%, #008f79 20%, #009961 30%, #118d23 40%, #438a15 50%, #719400 60%, #999100 70%, #b38306 80%, #b67201 90%, #b38300 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #008d94 0%, #00758f 10%, #008d94 20%, #008f79 30%, #009961 40%, #118d23 50%, #438a15 60%, #719400 70%, #999100 80%, #b38306 90%, #b67201 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #008f79 0%, #008d94 10%, #00758f 20%, #008d94 30%, #008f79 40%, #009961 50%, #118d23 60%, #438a15 70%, #719400 80%, #999100 90%, #b38306 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #009961 0%, #008f79 10%, #008d94 20%, #00758f 30%, #008d94 40%, #008f79 50%, #009961 60%, #118d23 70%, #438a15 80%, #719400 90%, #999100 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #118d23 0%, #009961 10%, #008f79 20%, #008d94 30%, #00758f 40%, #008d94 50%, #008f79 60%, #009961 70%, #118d23 80%, #438a15 90%, #719400 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #438a15 0%, #118d23 10%, #009961 20%, #008f79 30%, #008d94 40%, #00758f 50%, #008d94 60%, #008f79 70%, #009961 80%, #118d23 90%, #438a15 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #719400 0%, #438a15 10%, #118d23 20%, #009961 30%, #008f79 40%, #008d94 50%, #00758f 60%, #008d94 70%, #008f79 80%, #009961 90%, #118d23 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #999100 0%, #719400 10%, #438a15 20%, #118d23 30%, #009961 40%, #008f79 50%, #008d94 60%, #00758f 70%, #008d94 80%, #008f79 90%, #009961 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #b38300 0%, #999100 10%, #719400 20%, #438a15 30%, #118d23 40%, #009961 50%, #008f79 60%, #008d94 70%, #00758f 80%, #008d94 90%, #008f79 100%)",
      duration: 1.5,
    })
    tl.to(backGroundRef.current, {
      backgroundImage:
        "linear-gradient(90deg, #b67201 0%, #b38300 10%, #999100 20%, #719400 30%, #438a15 40%, #118d23 50%, #009961 60%, #008f79 70%, #008d94 80%, #00758f 90%, #008d94 100%)",
      duration: 1.5,
    })
  }, [])

  return (
    <Grid
      container
      item
      className={classes.about}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      ref={(element) => {
        backGroundRef.current[0] = element
      }}
      data-scroll-section
    >
      <Grid
        container
        item
        className={classes.aboutContainer}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <h1 className={classes.header} id="about">
            About
          </h1>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.descriptionHeadshotContainer}
        >
          <Grid item className={classes.description} xl={8} lg={8}>
            <p>
              Hi! I'm <strong>Kevin Shank</strong>. I'm a Web Developer
              currently based in Dearborn, MI. I recently completed a boot camp
              course through Michigan State University.
              <br />
              <br />
              I certainly enjoy the design aspect of front-end UX/UI development
              and the imagination it cultivates within me. At the end of the
              day, I'm just a creative guy who loves to solve problems, no
              matter what they may be.
              <br />
              <br />I enjoy biking, playing the piano, grilling, and long walks
              on the beach.
            </p>
          </Grid>
          <Grid item xl={3} lg={3} className={classes.headshotContainer}>
            <img className={classes.headshot} src={Headshot} alt="" />
          </Grid>
        </Grid>
      </Grid>
      <span className={classes.topLeftSpan}></span>
      <span
        className={classes.topRightSpan}
        ref={(element) => {
          backGroundRef.current[1] = element
        }}
      ></span>
      <span
        className={classes.bottomRightSpan}
        ref={(element) => {
          backGroundRef.current[2] = element
        }}
      ></span>
    </Grid>
  )
}

export default About

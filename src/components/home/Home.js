import React from "react"
import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"
import Hi from "./Hi"

const useStyles = makeStyles((theme) => ({
  home: {
    background: "#00081a",
    zIndex: 4,
    color: "white",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "20vh",
      left: "0",
      height: "100%",
      [theme.breakpoints.down("xs")]: {
        height: "90%",
      },
      width: "100%",
      content: "''",
      backgroundColor: "#00081a",
      transform: "skewY(5deg)",
      zIndex: 0,
    },
  },
  main: {
    perspective: "800px",
  },
  nameContainer: {
    marginTop: "15vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0vh",
    },
  },
  name: {
    fontSize: "120px",
    textAlign: "center",
    marginLeft: "10vw",

    [theme.breakpoints.down("lg")]: {
      fontSize: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "80px",
      marginLeft: "5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  titlesContainer: {
    backgroundImage: "linear-gradient(90deg, #0048f0 0%, #00b2f0 100%)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mozTextFillColor: "transparent",
  },
  titles: {
    fontSize: "80px",
    marginLeft: "10vw",
    [theme.breakpoints.down("lg")]: {
      fontSize: "4vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      marginLeft: "5vw",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  text: {
    fontSize: "80px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "4vw",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },
  cursor: {
    width: "2.75vw",
    height: "5vw",
    marginLeft: ".5vw",
    backgroundColor: "rgba(0,157,249,.65)",
  },
}))

const Home = () => {
  const classes = useStyles()

  const cursorRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      duration: 0.85,
    })

    let masterTl = gsap.timeline({ repeat: -1 })

    const words = ["Developer", "Designer", "Creator"]

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      tl.to(textRef.current, { duration: 1.5, text: word })
      masterTl.add(tl)
    })
  }, [])

  return (
    <Grid
      container
      item
      className={classes.home}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Navbar />
      <MobileNavbar />
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.main}
        id="home"
      >
        <Grid
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          container
          item
          className={classes.nameContainer}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item className={classes.name}>
            KEVIN
          </Grid>
          <Grid item className={classes.name}>
            SHANK
          </Grid>

          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            className={classes.titlesContainer}
          >
            <Grid item className={classes.titles}>
              The &nbsp;
            </Grid>
            <Grid item className={classes.text}>
              <p ref={textRef}></p>
            </Grid>
            <Grid item className={classes.cursor} ref={cursorRef}>
              <p></p>
            </Grid>
          </Grid>
        </Grid>
        <Hi />
      </Grid>
    </Grid>
  )
}

export default Home

import "./App.css"
import { useRef, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import Navbar from "./components/home/Navbar"
import Hi from "./components/home/Hi"
import Projects from "./components/projects/Projects"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const useStyles = makeStyles(() => ({
  home: {
    background: "#00081a",
    minHeight: "750px",
    color: "white",
    position: "relative",
    "&::before": {
      position: "absolute",
      top: "160px",
      left: "0",
      height: "90%",
      width: "100%",
      content: "''",
      backgroundColor: "#00081a",
      transform: "skewY(5deg)",
      zIndex: 0,
     
      
    },
    "&::after": {
      position: "absolute",
      top: "10650px",
      left: "0",
      height: "90%",
      width: "100%",
      content: "''",
      background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
      transform: "skewY(5deg)",
      
     
    },
  },
  main: {
    perspective: "800px",
  },
  nameContainer: {
    marginTop: "15vh",
  },
  name: {
    fontSize: "6vw",
    textAlign: "center",
    marginLeft: "10vw",
  },
  titlesContainer: {
    backgroundImage: "linear-gradient(90deg, #0048f0 0%, #00b2f0 100%)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    mozTextFillColor: "transparent",
  },
  titles: {
    fontSize: "4vw",
    marginLeft: "10vw",
  },
  text: {
    fontSize: "4vw",
  },
  thing: {},
  cursor: {
    width: "2.75vw",
    height: "5vw",
    marginLeft: ".5vw",
    backgroundColor: "rgba(0,157,249,.65)",
  },

  skills: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",
    color: "#01020f",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      top: "1150vh",
      left: "0",
      height: "90%",
      width: "100%",
      content: "''",
      background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
      transform: "skewY(-10deg)",
     
    },
    
  },
  skillsHeader: {
    color: 'white',
    zIndex: 2,
  },
  about: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",
    color: "#01020f",
  },
  contact: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",
    color: "#01020f",
  },
}))

function App() {
  const classes = useStyles()
  const cursorRef = useRef()
  const textRef = useRef()

  const words = ["Developer.", "Designer.", "Creator."]

  useEffect(() => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      duration: 0.85,
    })

    let masterTl = gsap.timeline({ repeat: -1 })

    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
      tl.to(textRef.current, { duration: 1.5, text: word })
      masterTl.add(tl)
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            item
            className={classes.home}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Navbar />
            <Grid
              container
              item
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={classes.main}
            >
              <Grid
                xl={6}
                lg={6}
                md={5}
                sm={5}
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
                <Grid item className={classes.thing}></Grid>
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
          <Projects />
          <Grid
            container
            item
            className={classes.skills}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          ><h1 className={classes.skillsHeader}>SKILLS</h1></Grid>
          <Grid
            container
            item
            className={classes.about}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          ></Grid>
          <Grid
            container
            item
            className={classes.contact}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          ></Grid>
        </Grid>
      </div>
    </BrowserRouter>
  )
}

export default App

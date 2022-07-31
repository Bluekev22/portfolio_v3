import "./App.css"
import { useRef, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import LocomotiveScroll from "locomotive-scroll"
import Navbar from "./components/home/Navbar"
import Hi from "./components/home/Hi"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const useStyles = makeStyles(() => ({
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
  },
  name: {
    fontSize: "6vw",
    textAlign: "center",
    marginLeft: "10vw",
  },
  titlesContainer: {
    backgroundImage: "linear-gradient(90deg, #0048f0 0%, #0091ff 100%)",
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
  cursor: {
    width: "2.75vw",
    height: "5vw",
    marginLeft: ".5vw",
    backgroundColor: "rgba(0,157,249,.65)",
  },
}))

function App() {
  const classes = useStyles()
  const cursorRef = useRef()
  const textRef = useRef()

  const words = ["Developer.", "Designer.", "Creator."]

  const scroll = new LocomotiveScroll()

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
          <Skills />
          <About />
          <Contact />
        </Grid>
      </div>
    </BrowserRouter>
  )
}

export default App

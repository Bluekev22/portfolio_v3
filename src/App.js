import "./App.css"
import { useRef, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5"
import { DiHtml5, DiReact, DiNodejsSmall } from "react-icons/di"
import {
  SiMaterialui,
  SiMysql,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiGreensock,
} from "react-icons/si"
import { FaNode } from "react-icons/fa"
import Navbar from "./components/home/Navbar"
import Hi from "./components/home/Hi"
import Projects from "./components/projects/Projects"

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
  cursor: {
    width: "2.75vw",
    height: "5vw",
    marginLeft: ".5vw",
    backgroundColor: "rgba(0,157,249,.65)",
  },

  skills: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",

    position: "relative",
    "&::before": {
      position: "absolute",
      bottom: "100px",
      left: "0",
      height: "90%",
      width: "100%",
      content: "''",
      background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
      transform: "skewY(-10deg)",
      zIndex: 0,
    },
    "&::after": {
      position: "absolute",
      bottom: "90%",
      left: "0",
      height: "90%",
      width: "100%",
      content: "''",
      background: "#e0e1e6",
      transform: "skewY(5deg)",
      zIndex: 0,
    },
  },

  //
  //here
  //
  skillsContainer: { marginTop: "40vh", color: "black", zIndex: 3 },
  skillsHeader: {
    fontSize: "6vw",
    color: "#01020f",
    marginBottom: "5vh",
  },

  skillContainer: {
    borderRadius: "40px",
    width: "calc(200px + 3vw)",
    background: "black",
    margin: "2.5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  skill: {
    backgroundColor: "white",
    borderRadius: "40px",
    padding: "10px",
    textAlign: "center",
    fontSize: "1.667vw",
    background:
      "linear-gradient(90deg, #ff7842, #f79022, #e5a800, #cabf00, #a4d500, #81de44)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  },
  skillIcon: { color: "#58e56d", fontSize: "1.667vw" },
  about: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",
    color: "#01020f",
  },
  contact: {
    background: "linear-gradient(90deg, #0048f0 0,#00b2f0 100%)",
    minHeight: "1080px",
    color: "#01020f",
    position: "relative",
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
          >
            <Grid
              container
              item
              className={classes.skillsContainer}
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              <h1 className={classes.skillsHeader}>Skills</h1>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>JavaScript</h1>
                    <IoLogoJavascript className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>CSS</h1>
                    <IoLogoCss3 className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>HTML</h1>
                    <DiHtml5 className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>React</h1>
                    <DiReact className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Redux</h1>
                    <SiRedux className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Node.js</h1>
                    <FaNode className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Express.js</h1>
                    <DiNodejsSmall className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MySQL</h1>
                    <SiMysql className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>GraphQL</h1>
                    <SiGraphql className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MongoDB</h1>
                    <SiMongodb className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>MaterialUI</h1>
                    <SiMaterialui className={classes.skillIcon} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.skillContainer}>
                    <h1 className={classes.skill}>Greensock</h1>
                    <SiGreensock className={classes.skillIcon} />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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

import React from "react"
import { gsap } from "gsap"
import { Grid } from "@material-ui/core"
import { ScrollTrigger } from "gsap/ScrollTrigger"
//
import { TextPlugin } from "gsap/TextPlugin"
import Home from "./components/home/Home"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

/* let smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
}) */

const Container = () => {
  return (
    /*  <div id="smooth-wrapper">
      <div id="smooth-content"> */
    <div className="App">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Home />
        <Projects id="projects" />
        <Skills id="skills" />
        <About id="about" />
        <Contact id="contact" />
      </Grid>
    </div>
    /*      </div>
    </div> */
  )
}

export default Container

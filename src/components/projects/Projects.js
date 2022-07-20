import React from "react"
import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import BetterBuyGIF from "../../assets/GIFs/BetterBuyGIF.gif"
import BetterBuy from "../../assets/img/BetterBuy.png"
import GoldenFlightsGIF from "../../assets/GIFs/GoldenFlightsGIF.gif"
import GoldenFlights from "../../assets/img/GoldenFlights.png"
import MoveTowardsTheMoviesGIF from "../../assets/GIFs/MoveTowardsTheMoviesGIF.gif"
import Movies from "../../assets/img/Movies.png"
import HatchwaysChatAppGIF from "../../assets/GIFs/HatchwaysChatAppGIF.gif"
import HatchwaysChatApp from "../../assets/img/HatchwaysChatApp.png"
import StudentProfilesGIF from "../../assets/GIFs/StudentProfilesGIF.gif"
import StudentProfiles from "../../assets/img/StudentProfiles.png"
import Go from "../projects/Go"
import Screenshot from "./Screenshot"
import Gif from "./Gif"

gsap.registerPlugin(ScrollTrigger, TextPlugin)

const useStyles = makeStyles(() => ({
  projects: {
    background: "white",
    minHeight: "110vh",
    color: "#01020f",
    zIndex: 3,
    position: "relative",
  },
  projectsHeader: { marginTop: "25vh", fontSize: "6vw", color: "#00081a" },
  projectContainer: {
    position: "absolute",
    top: "43vh",
    visibility: "hidden",
    marginTop: "10vh",
  },
}))

const Projects = () => {
  const classes = useStyles()
  const projectsRef = useRef()
  const betterBuyContainerRef = useRef()
  const projectsHeaderRef = useRef()
  const goldenFlightsContainerRef = useRef()
  const moviesContainerRef = useRef()
  const hatchwaysContainerRef = useRef()
  const studentProfilesContainerRef = useRef()

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "bottom 100%",
          end: "+=11250px",
          markers: "true",
          scrub: "true",
          pin: true,
          pinSpacing: true,
        },
      })
      .to(projectsRef.current, { background: "#9bb0d2" })
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Better Buy", type: "diff" },
          color: "#0b3278",
        },
        "-=0.5"
      )
      .to(betterBuyContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "black" })
      .to(betterBuyContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Golden Flights", type: "diff" },
          color: " rgba(176, 123, 16, 255)",
        },
        "-=0.5"
      )
      .to(goldenFlightsContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: " hsl(171, 100%, 41%)" })
      .to(goldenFlightsContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Move Towards The Movies", type: "diff" },
          color: "#4a4a4a",
        },
        "-=0.5"
      )
      .to(moviesContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "#e6f0ff" })
      .to(moviesContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Hatchways Chat App", type: "diff" },
          color: "#3A8DFF",
        },
        "-=0.5"
      )
      .to(hatchwaysContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "#e0e1e6" })
      .to(moviesContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Student Profiles", type: "diff" },
          color: "#8B5E3B",
        },
        "-=0.5"
      )
      .to(studentProfilesContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
  }, [])

  return (
    <Grid
      container
      item
      className={classes.projects}
      ref={projectsRef}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item>
        <h1 className={classes.projectsHeader} ref={projectsHeaderRef}>
          Projects
        </h1>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.projectContainer}
        ref={betterBuyContainerRef}
      >
        <Screenshot screenshot={BetterBuy} />
        <Go goColor="#f2f5ff" href="https://better-buy-shop.herokuapp.com/" />
        <Gif gif={BetterBuyGIF} />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.projectContainer}
        ref={goldenFlightsContainerRef}
      >
        <Screenshot screenshot={GoldenFlights} />
        <Go
          goColor="rgba(243, 215, 115, 255)"
          href="https://powerful-eyrie-53621.herokuapp.com/"
        />
        <Gif gif={GoldenFlightsGIF} />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.projectContainer}
        ref={moviesContainerRef}
      >
        <Screenshot screenshot={Movies} />
        <Go
          goColor="#ebfffc"
          href="https://mels065.github.io/move-towards-the-movies/"
        />
        <Gif gif={MoveTowardsTheMoviesGIF} />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.projectContainer}
        ref={hatchwaysContainerRef}
      >
        <Screenshot screenshot={HatchwaysChatApp} />
        <Go
          goColor="#00204d"
          href="https://hatchways-chat-app.herokuapp.com/"
        />
        <Gif gif={HatchwaysChatAppGIF} />
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.projectContainer}
        ref={studentProfilesContainerRef}
      >
        <Screenshot screenshot={StudentProfiles} />
        <Go
          goColor="#90278E"
          href="https://hatchways-student-profile.herokuapp.com/"
        />
        <Gif gif={StudentProfilesGIF} />
      </Grid>
    </Grid>
  )
}

export default Projects

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
import BookSearchEngineGIF from "../../assets/GIFs/BookSearchEngineGIF.gif"
import BookSearch from "../../assets/img/BookSearch.png"

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
  betterBuyContainer: {
    position: "absolute",
    top: "43vh",  
    visibility: "hidden",
    marginTop: "10vh",
  },
  goldenFlightsContainer: {
    position: "absolute",
    top: "43vh",  
    visibility: "hidden",
    marginTop: "10vh",
  },
  moviesContainer: {
    position: "absolute",
    top: "43vh",   
    visibility: "hidden",
    marginTop: "10vh",
  },
  bookSearchContainer: {
    position: "absolute",
    top: "43vh",
    visibility: "hidden",
    marginTop: "10vh",
  },
  studentProfilesContainer: {
    position: "absolute",
    top: "43vh",  
    visibility: "hidden",
    marginTop: "10vh",
  },
  betterBuyAnchor: {
    textDecoration: "none",
  
  },
  GoldenFlightsAnchor: { textDecoration: "none" },
  moviesAnchor: { textDecoration: "none" },
  bookSearchAnchor: { textDecoration: "none" },
  studentProfilesAnchor: { textDecoration: "none" },
  betterBuyGo: {
    fontSize: "6vw",
    color: "#f2f5ff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      
    },
  },
  goldenFlightsGo: {
    fontSize: "6vw",
    color: "rgba(243, 215, 115, 255)",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      
    },
  },
  moviesGo: {
    fontSize: "6vw",
    color: "#ebfffc",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      
    },
  },
  bookSearchGo: {
    fontSize: "6vw",
    color: "#01020f",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
     
    },
  },
  studentProfilesGo: {
    fontSize: "6vw",
    color: "#f2f5ff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      
    },
  },
}))

const Projects = () => {
  const classes = useStyles()
  const projectsRef = useRef()
  const betterBuyContainerRef = useRef()
  const projectsHeaderRef = useRef()
  const goldenFlightsContainerRef = useRef()
  const moviesContainerRef = useRef()
  const bookSearchContainerRef = useRef()
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
      .to(moviesContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Book Search Engine", type: "diff" },
          color: "yellow",
        },
        "-=0.5"
      )
      .to(moviesContainerRef.current, { autoAlpha: 1 }, "-=0.5")

      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "black" })
      .to(moviesContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Student Profiles", type: "diff" },
          color: " rgba(176, 123, 16, 255)",
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
        className={classes.betterBuyContainer}
        ref={betterBuyContainerRef}
      >
        <Grid item>
          <img
            className={classes.image}
            style={{ width: "30vw" }}
            src={BetterBuy}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            href="https://better-buy-shop.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.betterBuyAnchor}
          >
            <h5 className={classes.betterBuyGo}>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BetterBuyGIF}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.goldenFlightsContainer}
        ref={goldenFlightsContainerRef}
      >
        <Grid item>
          <img
            className={classes.image}
            style={{ width: "30vw" }}
            src={GoldenFlights}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            href="https://powerful-eyrie-53621.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.GoldenFlightsAnchor}
          >
            <h5 className={classes.goldenFlightsGo}>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={GoldenFlightsGIF}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.moviesContainer}
        ref={moviesContainerRef}
      >
        <Grid item>
          <img
            className={classes.image}
            style={{ width: "30vw" }}
            src={Movies}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            href="https://mels065.github.io/move-towards-the-movies/"
            target="_blank"
            rel="noreferrer"
            className={classes.moviesAnchor}
          >
            <h5 className={classes.moviesGo}>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={MoveTowardsTheMoviesGIF}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.bookSearchContainer}
        ref={bookSearchContainerRef}
      >
        <Grid item>
          <img
            className={classes.image}
            style={{ width: "30vw" }}
            src={BookSearch}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            href="https://hatchways-chat-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.bookSearchAnchor}
          >
            <h5 className={classes.bookSearchGo}>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BookSearchEngineGIF}
            alt=""
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.studentProfilesContainer}
        ref={studentProfilesContainerRef}
      >
        <Grid item>
          <img
            className={classes.image}
            style={{ width: "30vw" }}
           // src={BetterBuy}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            href="https://better-buy-shop.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className={classes.studentProfilesAnchor}
          >
            <h5 className={classes.studentProfilesGo}>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
          //  src={BetterBuyGIF}
            alt=""
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects

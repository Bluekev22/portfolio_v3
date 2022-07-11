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
  image: {
    marginTop: "10vh",
  },
  gif: {
    marginTop: "10vh",
  },
  betterBuyContainer: {
    position: "absolute",
    top: "43vh",
    zIndex: 4,
    visibility: "hidden",
    opacity: 0,
  },
  goldenFlightsContainer: {
    position: "absolute",
    top: "43vh",
    zIndex: 4,
    visibility: "hidden",
    opacity: 0,
  },
  moviesContainer: {
    position: "absolute",
    top: "43vh",
    zIndex: 4,
    visibility: "hidden",
    opacity: 0,
  },
  bookSearchContainer: {
    position: "absolute",
    top: "43vh",
    zIndex: 4,
    visibility: "hidden",
    opacity: 0,
  },
  betterBuyAnchor: {
    textDecoration: "none",
    cursor: "grab",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "red",
    },
  },
  GoldenFlightsAnchor: { textDecoration: "none" },
  moviesAnchor: { textDecoration: "none" },
  bookSearchAnchor: { textDecoration: "none" },
  betterBuyGo: {
    fontSize: "6vw",
    opactiy: "0",

    color: "#f2f5ff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#f2f5ff",
    },
  },
  goldenFlightsGo: {
    fontSize: "6vw",
    opactiy: "0",

    color: "#01020f",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "red",
    },
  },
  moviesGo: {
    fontSize: "6vw",
    opactiy: "0",

    color: "#01020f",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "red",
    },
  },
  bookSearchGo: {
    fontSize: "6vw",
    opactiy: "0",

    color: "#01020f",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "red",
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

  useEffect(() => {
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "bottom 100%",
          end: "+=9000px",
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
      .to(projectsRef.current, { background: "pink" })
      .to(betterBuyContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Golden Flights", type: "diff" },
          color: "gold",
        },
        "-=0.5"
      )
      .to(goldenFlightsContainerRef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "orange" })
      .to(goldenFlightsContainerRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Move Towards The Movies", type: "diff" },
          color: "green",
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
    </Grid>
  )
}

export default Projects

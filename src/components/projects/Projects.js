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
    zIndex: "-1",
    position: "relative",
  },
  projectsHeader: { marginTop: "20vh", fontSize: "6vw" },
  gif: {
    marginTop: "10vh",
    opactiy: "0",
    visibility: "hidden",
  },
  projectContainer: {
    position: "absolute",
    top: "35vh",
  },
  GO: {
    fontSize: "6vw",
    opactiy: "0",
    visibility: "hidden",
    color: "#01020f",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

const Projects = () => {
  const classes = useStyles()
  const projectsRef = useRef()
  const betterBuyRef = useRef()
  const betterBuyGIFRef = useRef()
  const betterBuyGORef = useRef()
  const projectsHeaderRef = useRef()
  const goldenFlightsRef = useRef()
  const goldenFlightsGIFRef = useRef()
  const goldenFlightsGORef = useRef()
  const MoviesRef = useRef()
  const MoveTowardsTheMoviesGIFRef = useRef()
  const MoviesGORef = useRef()
  const BookSearchRef = useRef()
  const BookSearchEngineGIFRef = useRef()
  const BookSearchGORef = useRef()

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
      .to(projectsRef.current, { background: "#0b3278" })
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Better Buy", type: "diff" },
        },
        "-=0.5"
      )

      .to(betterBuyGIFRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(betterBuyRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(betterBuyGORef.current, { autoAlpha: 1 }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "pink" })
      .to(betterBuyGIFRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(betterBuyRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(betterBuyGORef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Golden Flights", type: "diff" },
          color: "gold",
        },
        "-=0.5"
      )
      .to(goldenFlightsGIFRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(goldenFlightsRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(goldenFlightsGORef.current, { autoAlpha: 1, color: "gold" }, "-=0.5")
      .to({}, { duration: 2 })
      .to(projectsRef.current, { background: "orange" })
      .to(goldenFlightsGIFRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(goldenFlightsRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(goldenFlightsGORef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Move Towards The Movies", type: "diff" },
          color: "green",
        },
        "-=0.5"
      )
      .to(MoveTowardsTheMoviesGIFRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(MoviesRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(MoviesGORef.current, { autoAlpha: 1, color: "blue" }, "-=0.5")
      .to({}, { duration: 2 })
      .to(MoveTowardsTheMoviesGIFRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(MoviesRef.current, { autoAlpha: 0 }, "-=0.5")
      .to(MoviesGORef.current, { autoAlpha: 0 }, "-=0.5")
      .to(
        projectsHeaderRef.current,
        {
          text: { value: "Book Search Engine", type: "diff" },
          color: "yellow",
        },
        "-=0.5"
      )
      .to(BookSearchEngineGIFRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(BookSearchRef.current, { autoAlpha: 1 }, "-=0.5")
      .to(BookSearchGORef.current, { autoAlpha: 1, color: "pink" }, "-=0.5")
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
      >
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BetterBuy}
            ref={betterBuyRef}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            className={classes.GO}
            ref={betterBuyGORef}
            href="https://better-buy-shop.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h5>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BetterBuyGIF}
            ref={betterBuyGIFRef}
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
        className={classes.projectContainer}
      >
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={GoldenFlights}
            ref={goldenFlightsRef}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            className={classes.GO}
            ref={goldenFlightsGORef}
            href="https://powerful-eyrie-53621.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h5>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={GoldenFlightsGIF}
            ref={goldenFlightsGIFRef}
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
        className={classes.projectContainer}
      >
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={Movies}
            ref={MoviesRef}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            className={classes.GO}
            ref={MoviesGORef}
            href="https://powerful-eyrie-53621.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h5>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={MoveTowardsTheMoviesGIF}
            ref={MoveTowardsTheMoviesGIFRef}
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
        className={classes.projectContainer}
      >
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BookSearch}
            ref={BookSearchRef}
            alt=""
          />
        </Grid>
        <Grid item>
          <a
            className={classes.GO}
            ref={BookSearchGORef}
            href="https://powerful-eyrie-53621.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h5>GO</h5>
          </a>
        </Grid>
        <Grid item>
          <img
            className={classes.gif}
            style={{ width: "30vw" }}
            src={BookSearchEngineGIF}
            ref={BookSearchEngineGIFRef}
            alt=""
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Projects

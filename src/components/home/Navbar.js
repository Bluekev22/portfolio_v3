import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link, animateScroll as scroll } from "react-scroll"

const useStyles = makeStyles((theme) => ({
  linkContainer: { marginTop: "3vh" },
  link: {
    listStyle: "none",
    fontSize: "28px",
    marginRight: "60px",
    position: "relative",
    transition: " 0.35s ease",
    color: "white",
    [theme.breakpoints.down("lg")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    "&:active": {
      color: "white",
    },
    "&:visited": {
      color: "white",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-8px",
      backgroundColor: "#00b2f0",
      webkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      webkitTransformOrigin: "top left",
      transformOrigin: "top left",
      webkitTransition: "-webkit-transform 0.35s ease",
      transition: "transform 0.35s ease",
    },
    "&:hover": {
      color: "#00b2f0",
      cursor: "pointer",
      "&::before": {
        transform: "scale(1)",
        webkitTransform: "scale(1)",
      },
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      className={classes.linkContainer}
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item>
        <Link
          className={classes.link}
          to="projects"
          smooth="easeInOutQuint"
          duration={1500}
        >
          PROJECTS
        </Link>
      </Grid>
      <Grid item>
        <Link
          className={classes.link}
          to="skills"
          smooth="easeInOutQuint"
          offset={-125}
          duration={3000}
        >
          SKILLS
        </Link>
      </Grid>
      <Grid item>
        <Link
          className={classes.link}
          to="about"
          smooth="easeInOutQuint"
          offset={-100}
          duration={3500}
        >
          ABOUT
        </Link>
      </Grid>
      <Grid item>
        <Link
          className={classes.link}
          to="contact"
          smooth="easeInOutQuint"
          duration={4000}
        >
          CONTACT
        </Link>
      </Grid>
    </Grid>
  )
}

export default Navbar

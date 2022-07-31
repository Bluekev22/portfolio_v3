import React from "react"
import { useRef, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"
import { FaLinkedinIn, FaCodepen, FaGithub } from "react-icons/fa"

const useStyles = makeStyles(() => ({
  contact: {
    background: "#00081a",
    minHeight: "600px",
    color: "white",
    position: "relative",
  },
  rowContainer: { marginTop: "16vh", paddingLeft: "5vw" },
  emailHeader: {
    fontSize: "48px",
    borderRadius: "20px",
    padding: "3px",
  },
  emailLink: { textDecoration: "none" },
  email: {
    fontSize: "38px",
    color: "white",
    position: "relative",
    textDecoration: "none",
    "&::before": {
      content: '""',
      position: "absolute",
      dispaly: "block",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#0048f0",
      transform: "scaleX(0.16)",
      transformOrigin: "top left",
      transition: "transform 0.35s ease",
    },
    "&:hover": {
      "&::before": {
        transform: "scaleX(0.7)",
      },
    },
  },
  connectWithMeHeader: { fontSize: "38px" },
  icons: {
    fontSize: "42px",
    color: "white",

    transition: " 0.35s ease",

    "&:active": {
      color: "white",
    },
    "&:visited": {
      color: "white",
    },
    "&:hover": {
      color: "#0048f0",
    },
  },
  copywrite: {
    position: "absolute",
    bottom: "2%",
    fontSize: "20px",
  },
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      item
      className={classes.contact}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid
          container
          item
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          xl={4}
          lg={4}
          spacing={6}
        >
          <Grid item xl={12} lg={12}>
            <h1 className={classes.emailHeader}>Email me:</h1>
          </Grid>
          <Grid item xl={12} lg={12}>
            <a
              href="mailto:kevin@kevinshank.tech"
              className={classes.emailLink}
            >
              <h1 className={classes.email}>kevin@kevinshank.tech</h1>
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          xl={4}
          lg={4}
          spacing={6}
        >
          <Grid item className={classes.connectWithMeHeader}>
            Connect with me
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <a
                href="https://www.linkedin.com/in/shank-kevin/"
                target="_blank"
                rel="noreferrer"
                className={classes.icons}
              >
                <FaLinkedinIn />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://codepen.io/bluekev22"
                target="_blank"
                rel="noreferrer"
                className={classes.icons}
              >
                <FaCodepen />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://github.com/Bluekev22"
                target="_blank"
                rel="noreferrer"
                className={classes.icons}
              >
                <FaGithub />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.copywrite}>
        Made with love by Kevin Shank &copy;2022
      </Grid>
    </Grid>
  )
}

export default Contact

import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { FaLinkedinIn, FaCodepen, FaGithub } from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  contact: {
    background: "#00081a",
    minHeight: "600px",
    color: "white",
    position: "relative",
  },
  rowContainer: { marginTop: "16vh", paddingLeft: "5vw",
  [theme.breakpoints.down("md")]: {
  justifyContent: 'space-between',
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "0vh",
    paddingLeft: "7vw",
    }, 
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0vw",
    }, },
  emailContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column',
      },
  },
  emailHeader: {
    fontSize: "48px",
    borderRadius: "20px",
    padding: "3px",
    [theme.breakpoints.down("md")]: {
     
      fontSize: '40px',
    }, 
    [theme.breakpoints.down("xs")]: {
     
      fontSize: '30px',
    }, 
  },
  emailLink: { textDecoration: "none",},
  email: {
    fontSize: "38px",
    color: "white",
    position: "relative",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
     
      fontSize: '30px',
    }, 
    [theme.breakpoints.down("xs")]: {
     
      fontSize: '24px',
    }, 
    "&::before": {
      content: '""',
      position: "absolute",
      dispaly: "block",
      width: "100%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#0048f0",
      [theme.breakpoints.up("xl")]: {
        transform: "scaleX(0.16)"
      },
      [theme.breakpoints.up("lg")]: {
        transform: "scaleX(0.19)"
      },
      [theme.breakpoints.up("xs")]: {
        transform: "scaleX(0.22)"
      },
      transformOrigin: "top left",
      transition: "transform 0.35s ease",
    },
    "&:hover": {
      "&::before": {
        transform: "scaleX(0.7)",
      },
    },
  },
  connectWithMeHeader: { fontSize: "38px",
  [theme.breakpoints.down("md")]: {
    fontSize: '32px',
  },
  [theme.breakpoints.down("sm")]: {
   display: 'none',
  },   },
  iconContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: '20px',
      }, 
      [theme.breakpoints.down("xs")]: {
        marginTop: '35px',
        },
  },
  icons: {
    fontSize: "42px",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: '36px',
    }, 
    [theme.breakpoints.down("xs")]: {
      fontSize: '32px',
    },
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
    [theme.breakpoints.down("sm")]: {
      bottom: "10%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: '14px',
      bottom: "13%",
    },
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
      id="contact"
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
          lg={5}
          md={6}
          sm={12}
          spacing={6}
          className={classes.emailContainer}
        >
          <Grid item xl={12} lg={12} md={12} sm={12}>
            <h1 className={classes.emailHeader}>Email me:</h1>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12}>
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
          lg={5}
          md={6}
          sm={12}
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
            className={classes.iconContainer}
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

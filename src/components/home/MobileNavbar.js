import React from 'react'
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { FaAddressCard, FaProjectDiagram, FaBrain, FaEnvelope } from "react-icons/fa"
import { BiArrowToTop } from "react-icons/bi"

const useStyles = makeStyles((theme) => ({

    linkContainer: {
    position: "fixed",
    bottom: 0, 
    padding: '10px 10px 5px 10px', 
    backgroundColor: 'white'},

    link: {
    listStyle: "none",
    fontSize: "14px",
    width: "100%",
    transition: " 0.35s ease",
    color: "#00081a",
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    "&:active": {
      color: "#00081a",
    },
    "&:visited": {
      color: "#00081a",
    },

    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "-8px",
      backgroundColor: "#0091ff",
      webkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      webkitTransformOrigin: "top left",
      transformOrigin: "top left",
      webkitTransition: "-webkit-transform 0.35s ease",
      transition: "transform 0.35s ease",
    },
    "&:hover": {
      color: "#0091ff",
      cursor: 'pointer',
      "&::before": {
        transform: "scale(1)",
        webkitTransform: "scale(1)",
      },
    },
  },
}))

const MobileNavbar = () => {
    const classes = useStyles()
  return (
    <Grid
      container
      item
      className={classes.linkContainer}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item>
        <li className={classes.link}>
        <BiArrowToTop/>
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link}>
        <FaProjectDiagram/>
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link}>
        <FaBrain/>
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link}>
        <FaAddressCard/>
        </li>
      </Grid>
      <Grid item>
        <li className={classes.link}>
        <FaEnvelope />
        </li>
      </Grid>
    </Grid>
  )
}

export default MobileNavbar
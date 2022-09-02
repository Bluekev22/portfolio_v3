import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  gif: { width: "30vw",
  [theme.breakpoints.down("xs")]: {
    width: "45vw"
  }, },
}))

const Gif = (props) => {
  const classes = useStyles()
  return (
    <Grid item>
      <img className={classes.gif} src={props.gif} alt="" />
    </Grid>
  )
}

export default Gif

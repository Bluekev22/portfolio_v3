import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  screenshot: { width: "30vw",
  [theme.breakpoints.down("xs")]: {
    width: "45vw"
  },},
}))

const Screenshot = (props) => {
  const classes = useStyles()
  return (
    <Grid item>
      <img className={classes.screenshot} src={props.screenshot} alt="" />
    </Grid>
  )
}

export default Screenshot

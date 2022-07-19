import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  screenshot: { width: "30vw" },
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

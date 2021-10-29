import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: 600,
      height: 420
    },
  })
)

const Object = (logo, title, description) => {
  const classes = useStyles()
  return <>
    <Paper className={classes.root}>
      <img alt="logo" src={logo} />
      <Typography variant="h1" component="h2">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {description}
      </Typography>
    </Paper>
  </>
}

export default Object


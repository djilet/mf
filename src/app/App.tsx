import React from "react";
import { YMInitializer } from "react-yandex-metrika";
import { makeStyles } from "@material-ui/core";
import AppBody from "./components/appBody/AppBody";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F8FCFF"
  }
});


export const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <YMInitializer accounts={[77917144]} options={{ webvisor: true }} />
      <AppBody/>
    </div>
  );
};


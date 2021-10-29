import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import smart from "../../../images/Logo_-03.svg";
import minstroy from "../../../images/logom-01.svg";
import fkgs from "../../../images/Logo_-02.svg";
import logo from "../../../images/Logo_-01.svg"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ maxWidth: "550px", margin: "20px auto" }}>
      ©️ 2016 -  {new Date().getFullYear()}.Комфортная городская среда
    </Typography>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    marginTop: 20,
    backgroundColor: '#F8FCFF'
    // marginTop: theme.spacing(8),
  },
  imgBlock: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20
  }
}));

export const Footer = ({ width }) => {
  const classes = useStyles();
  const refresh = () => window.location.reload(false);
  const [isReselect, setIsReselect] = useState(true)
  useEffect(()=>{
    if (width === 'xs'){
      setIsReselect(false)
    }else {
      setIsReselect(true)
    }
  })
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.imgBlock}>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <img alt="logo" src={smart} onClick={refresh} style={{
            width: 158,
            height: 97,
            alignSelf: "center",
            cursor: "pointer",
            marginBottom: '18px'
          }} />
          {isReselect ? <a href="https://pdminstroy.ru/  "><img alt="logo1" src={minstroy} style={{
            width: 100,
            height: "100%",
            alignSelf: "center",
            cursor: "pointer"
          }} /></a>
            : <a href="https://pdminstroy.ru/  "><img alt="logo1" src={logo} style={{
            width: 164,
            alignSelf: "center",
            cursor: "pointer"
          }} /></a>}
          <a href="https://gorodsreda.ru/"><img alt="logo1" src={fkgs} style={{
            width: 225,
            height: 100,
            alignSelf: "center",
            cursor: "pointer",
            marginBottom: '7px'
          }} /></a>
        </div>
        <Copyright />
      </Container>
    </footer>
  );
};

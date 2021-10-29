import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import logo from "../../../images/objectsBlock/logo.png";
import smartCity from "../../../images/Logo_-03.svg";
import cityForm from "../../../images/Untitled-3.svg";

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: "#F8FCFF",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: 'auto',
      paddingTop: 100,
      margin: 17,
      '& > *': {
        boxSizing: 'border-box'
      },
    },
    logo: {
      [theme.breakpoints.down('xs')]: {
        minWidth: "310px",
        width: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        width: "580px",
        height: "139px",
      },
      [theme.breakpoints.up('md')]: {
        width: "758px",
        height: "182px",
      },
      transition: "all 1s ease-out",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    objectContainer: {
      width: "100%",
      marginTop: 43,
      display: "flex",
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      },
    },
    object: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down('xs')]: {
        margin: '0 0 10px 0',
        padding: "20px 5px 15px 10px",
      },
      [theme.breakpoints.down('sm')]: {
        margin: '0 0 10px 0',
      },
      width: '100%',
      height: 'auto',
      padding: "65px 38px 49px 64px",
      margin: "0 10px",
    },
    imgSmart: {
      [theme.breakpoints.down('xs')]: {
        width: 158*0.7,
        height: 87*0.7,
      },
      width: 158,
      height: 87,
    },
    cityForm: {
      [theme.breakpoints.down('xs')]: {
        width: 190*0.8,
        height: 67*0.8,
      },
      width: 190,
      height: 67,
      marginTop: 7,
      marginBottom: 13
    },
    title: {
      fontWeight: 500,
      lineHeight: "39px",
      fontSize: 26,
      color: "#46505B",
      margin: "17px 0 39px 0"
    },
    description: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "27px",
      color: "#777E86"
    }
  })
);

export const ObjectsContainer = () => {
  const classes = useStyles();
  return <>
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.objectContainer}>
        <Paper className={classes.object}>
          <img alt="logo" src={smartCity} className={classes.imgSmart} />
          <div className={classes.title}>
            Ведомственный проект <br />
            «Умный город»
          </div>
          <div className={classes.description}>
            Ведомственный проект «Умный город» способствует цифровизации и внедрению передовых технологий в городское
            хозяйство, делает города более комфортными и современными.
          </div>
        </Paper>
        <Paper className={classes.object}>
          <img alt="logo" src={cityForm} className={classes.cityForm} />
          <div className={classes.title}>
            Федеральный проект «Формирование <br />
            комфортной городской среды»
          </div>
          <div className={classes.description}>
            Федеральный проект «Формирование комфортной городской среды» направлен на благоустройство городов и
            исторических поселений, создание среды, учитывающей потребности всех горожан.
          </div>
        </Paper>
      </div>
    </div>
  </>;
};


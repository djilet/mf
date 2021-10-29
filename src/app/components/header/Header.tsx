import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import logo from "../../../images/Logo_-01.svg"

const useStyles = makeStyles((theme) =>
  createStyles({
      HeaderContainer: {
        display: "flex",
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
          maxWidth: 600,
          justifyContent: "space-around",
          height: 80,
        },
        [theme.breakpoints.up('sm')]: {
          maxWidth:1000,
          justifyContent: "space-around",
          height: 100,
        },
        [theme.breakpoints.up('md')]: {
          maxWidth:1200,
          height: 114,
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth:1200,
          height: 114,
          justifyContent: "space-between",
        },
        width: "100%",
        margin: "0 auto"
      },
      NavContainer: {
        display: 'flex',
        justifyContent: "space-between",
      },
      navButton: {
        alignSelf: "center",
        cursor: "pointer"
      },
      navButtonActive: {
        borderBottom: "1px solid cadetblue"
      },
      navButtonImage: {
        [theme.breakpoints.down('xs')]: {
          width: "90px",
          marginBottom: '7px'
        },
        [theme.breakpoints.up('sm')]: {
          width: "140px",
          marginBottom: '7px'
        },
        [theme.breakpoints.up('md')]: {
          width: "164px",
          marginBottom: '7px'
        },
      },
    text:{
      [theme.breakpoints.down('xs')]: {
        padding: '0',
        marginRight: 10,
        fontSize: '14px',
        lineHeight: '100% ',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
        lineHeight: '150% ',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '18px',
        lineHeight: '150% ',
      },
      fontFamily: 'Rubik',
      fontWeight: 500,
      color: '#46505B'
    }
    }
  ));

export const Header = () => {
  const classes = useStyles();
  const handler = () => window.location.reload(false);
  return <div className={classes.HeaderContainer}>
    <div className={classes.NavContainer}>
      <Link to="section 1" smooth="true" offset={-200} duration={500} className={classes.navButton}><Button
        size="large" className={classes.text}>О проекте</Button></Link>
      <Link to="section 2" smooth="true" offset={-20} duration={500} className={classes.navButton}>
        <Button size="large" className={classes.text}>Карта объектов</Button>
      </Link>
    </div>
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
    <img onClick={handler} className={`${classes.navButton} ${classes.navButtonImage}`}
         src={logo}
         alt="logo" />
  </div>;
};

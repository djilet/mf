import React from "react";
import { Button, Container, makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, Theme } from "@material-ui/core/styles";
import image from "../../../images/Main-01 1.png";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: "flex"
  },
  list: {
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0"
    },
    margin: "0 auto",
    textAlign: "center",
    padding: "70px 175px",
    fontWeight: 400,
    fontSize: "20px"
  },
  listLink: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "#68DF7E",
      boxShadow: "none"
    }
  },
  banner: {
    display: "flex",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: 'column',
      alignItems: 'center'

    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: 'row',
      justifyContent: "space-between",
      height: "420",
      padding: "20px 50px 30px 50px",
    },
  },
  bannerText: {
    [theme.breakpoints.down("xs")]: {
      alignSelf: 'center',
      textAlign: 'center',
      margin: "0"

    },
    [theme.breakpoints.up("sm")]: {
      textAlign: 'center',
      alignSelf: 'center',
      margin: "0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "42%",
    },
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bannerTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      lineHeight: "20px"
    },
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: 400,
    color: "#777E86"
  },
  bannerLink: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      lineHeight: "35px",
      textAlign: 'center'
    },
    color: "#46505B",
    lineHeight: "90px",
    fontSize: 60,
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      color: "#68DF7E",
      boxShadow: "none"
    }
  },
  bannerImage: {
    [theme.breakpoints.down("xs")]: {
      display: 'none',
      textAlign: 'center',
      height: 'auto',
      width: '100%',
      margin: '20px 0 0 0'
    },
    [theme.breakpoints.up("sm")]: {
      display: 'none',
      textAlign: 'center',
      maxWidth: 517,
      maxHeight: 329,
      height: 'auto',
      width: '100%',
      margin: '20px 0 0 0'
    },
    [theme.breakpoints.up("lg")]: {
      display: 'block',
      textAlign: 'center',
      maxWidth: 517,
      maxHeight: 329,
      height: 'auto',
      width: '100%',
    }
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      margin: '20px 0 20px 0',
      padding: '10px 0'
    },
    [theme.breakpoints.down("sm")]: {
      margin: '20px 0',
      alignSelf: 'center'
    },
    [theme.breakpoints.down("lg")]: {
      width: '80%',
      margin: '20px 0',
      alignSelf: 'center'
    },
    marginTop: 24,
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: "#68DF7E",
    padding: "15px 0",
    color: "white",
    "&:hover": {
      backgroundColor: "#49B170",
      borderColor: "#49B170",
      boxShadow: "none"
    }
  }
}));

export const Banner = () => {
  const classes = useStyles();
  return (<Container>
      <div className={classes.list}>
        Если хотите разместить проект на данном сайте, напишите нам на почту:
        <a href="mailto:mail@mail.ru" className={classes.listLink}> mail@mail.ru</a>
      </div>
      <Paper className={classes.banner}>
        <div className={classes.bannerText}>
          <div className={classes.bannerTitle}>
            Всероссийское голосование по выбору объектов для благоустройства
          </div>
          <a href="https://za.gorodsreda.ru" target="_blank" className={classes.bannerLink}
             rel="noreferrer"> za.gorodsreda.ru</a>
          <Button variant="contained" className={classes.button}
                  onClick={() => window.open("https://za.gorodsreda.ru")}>
            Голосовать
          </Button>
        </div>
        <div>
          <img src={image} alt="logo" className={classes.bannerImage} />
        </div>
      </Paper>
    </Container>
  );
};

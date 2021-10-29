import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { createStyles, makeStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import ImageList from "./ImageList";
import bg from "../../../images/objectsBlock/background.png";
import { actions } from "../map/mapSlice";
import { RootState } from "../../../store/RootReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    progress: {
      margin: "100px",
      color: "#45b97c"
    },
    content: {
      overflow: "auto",
      maxHeight: 600,
      // backgroundColor: "rgba(69,185,124,0.3)",
      // backgroundColor: "#f0f0f0",
      backgroundImage: `url(${bg})`
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 20
    },
    img: {
      maxWidth: "450px",
      maxHeight: "450px",
      width: "100%",
      height: "auto",
      objectFit: "cover"
    },
    typography: {
      backgroundColor: "#45b97c",
      color: "white",
      fontSize: 22,
      fontWeight: 400,
      paddingLeft: 15,
      textAlign: "center"
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    video: {
      maxWidth: "900px",
      maxHeight: "500px",
      width: "100%",
      height: "auto"
    },
    audio: {
      maxWidth: "900px",
      width: "100%",
      marginTop: 20
    }
  })
);

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    height: "600px"
  }
}))(MuiDialogContent);

export interface DialogTitleProps extends WithStyles {
  id: string;
  children: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onClose: (value: boolean) => void;
}


const DialogTitle = ((props: DialogTitleProps) => {
  const { children, onClose, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={() => onClose(false)}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const PopUp = ({ width, url }) => {
  const classes = useStyles();
  const [fullWidth, setFullWidth] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { object, error } = useSelector((state: RootState) => state.map);
  useEffect(() => {
    if (object !== null) {
      setFullWidth(true);
    }
  }, [object]);

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  useEffect(() => {
    if (url.location.pathname.length) {
      dispatch(actions.loadObject({ fetch: true, id: url.location.pathname.slice(1) }));
    }
  }, [url.location.pathname.slice(1)]);
  const onClose = () => {
    url.history.replace("");
    dispatch(actions.setError(false))
  };

  return <>
    {isError && <Dialog open fullWidth
                        maxWidth="xs">
      <DialogTitle id="customized-dialog-title" onClose={onClose} classes={classes}>
        Ошибка загрузки объекта
        <Typography variant="body2" color="textSecondary" style={{ display: "flex", flexDirection: "column" }}>
          Объект под номером {url.location.pathname.slice(1)} не существует
        </Typography>
      </DialogTitle>
    </Dialog>}
    {!isError && <Dialog open fullWidth={fullWidth}
            maxWidth="xl">
      <DialogTitle id="customized-dialog-title" onClose={onClose} classes={classes}>
        {object?.title}
        <Typography variant="body2" color="textSecondary" style={{ display: "flex", flexDirection: "column" }}>
          {object?.address}<br />{object?.type}
        </Typography>
      </DialogTitle>
      {/* {object === null && <LinearProgress className={classes.progress}  />} */}
      {object === null && <CircularProgress className={classes.progress} />}
      {object !== null && <DialogContent dividers className={classes.content}>
        {object.another_images.length !== 0 &&
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ImageList width={width} data={object.another_images} />
        </div>}
        {object.description!== null && object.description.length !== 0 &&
        <div style={{
          textAlign: 'justify',
          margin: '0 auto',
          marginBottom: "20px",
          maxWidth: "900px",
          fontFamily: 'Roboto'
        }}
             /* eslint-disable-next-line react/no-danger */
             dangerouslySetInnerHTML={{ __html: object.description }} />}
        <div className={classes.imgContainer}>
          {object.before_image && <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography className={classes.typography}>До:</Typography>
            <img className={classes.img} src={object.before_image} alt="img" />
          </div>}
          {object.after_image && <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography className={classes.typography}>После:</Typography>
            <img className={classes.img} src={object.after_image} alt="img" />
          </div>}
        </div>
        <div className={classes.contentContainer}>
          {object.video &&
          <video className={classes.video} loop muted playsInline autoPlay controls>
            {/* eslint-disable-next-line max-len */}
            <source src={object.video} />
          </video>}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          {object.audio && <audio className={classes.audio} controls src={object.audio} />}
        </div>
      </DialogContent>
      }
    </Dialog>}
  </>;
};


export default withRouter(PopUp);


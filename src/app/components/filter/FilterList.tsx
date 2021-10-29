import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/RootReducer";
import { actions } from "../map/mapSlice";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 320,
      height: 400,
      maxWidth: 320,
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 300
    },
    button: {
      backgroundColor: "#49B170",
      color: "white",
      "&:hover": {
        backgroundColor: "#68DF7E",
        borderColor: "#68DF7E",
        boxShadow: "none"
      }
    },
    buttonClose: {
      cursor: "pointer"
    },
    menuItem: {
      whiteSpace: "normal"
    }
  })
);
export const FilterList = ({ checked, localstate, setState, setStateMap }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { regions } = useSelector((state: RootState) => state.map);
  const dispatch = useDispatch();

  useEffect(() => {
    const newState: any[] = [];
    regions.map(region => newState.push({ id: region.id, title: region.title, checked: false }));
    setState(newState);
  }, [regions]);

  const handleChange = (id: number, value: boolean) => {
    setState(localstate.map(el => el.id === id ? { ...el, checked: !value } : el));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl !== null) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    const actionValue: number[] = [];
    localstate.forEach(el => (el.checked) ? actionValue.push(el.id) : null);
    const newState: any[] = [];
    localstate.forEach(el => (el.checked) ? newState.push({ id: el.id, title: el.title }) : null);
    setStateMap(newState);
    dispatch(actions.loadMarkers({ data: { id: actionValue, participant: checked || undefined }, fetch: true }));
  };
  const handleReset = () => {
    const newState: any[] = [];
    localstate.forEach(el => newState.push({ ...el, checked: false }));
    setState(newState);
  };

  return (
    <>
      <Button className={classes.button}
              onClick={handleClick}>
        Фильтр по субъекту
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClick}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={handleClick}
            size="large"
            className={classes.buttonClose}
            startIcon={<CloseIcon />}
          />
        </div>
        <div className={classes.root}>
          {localstate.map(region =>
            <MenuItem className={classes.menuItem} key={region.id}
                      onClick={() => handleChange(region.id, region.checked)}>
              <Checkbox
                checked={region.checked}
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
              <ListItemText primary={region.title} />
            </MenuItem>)}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          <Button className={classes.button} variant="contained" aria-controls="simple-menu" aria-haspopup="true"
                  onClick={handleClose}>
            Применить
          </Button>
          <Button className={classes.button} variant="contained" aria-controls="simple-menu" aria-haspopup="true"
                  onClick={handleReset}>
            Сброс
          </Button>
        </div>
      </Menu>
    </>
  );
};

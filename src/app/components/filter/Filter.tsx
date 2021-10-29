import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FilterList } from "./FilterList";
import { actions } from "../map/mapSlice";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "20px",
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        flexWrap: 'wrap'
      },
    },
    text:{
      fontSize: 14,
    }
  })
)

export const Filter = ({state, setState, setStateMap}) => {
  const dispatch = useDispatch();
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const actionValue:number[]=[]
    state.forEach(el=> (el.checked) ? actionValue.push(el.id) : null)
    dispatch(actions.loadMarkers({
      fetch: true,
      data: { id: actionValue.length ? actionValue : undefined, participant: !checked || undefined }
    }));
  };

  return <div className={classes.root}>
    <FilterList checked={checked} localstate={state} setState={setState} setStateMap={setStateMap} />
    <div className={classes.text}>
    <Checkbox
      onChange={e => handleChange(e)}
      checked={checked}
      color="default"
      inputProps={{ "aria-label": "checkbox with default color" }}
    />
    Проект-участник Всероссийского конкурса
      </div>
  </div>;
};

import React, { useState } from "react";
import withWidth from '@material-ui/core/withWidth';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Container } from "@material-ui/core";
import Map from "../map/Map";
import { Header } from "../header/Header";
import { Filter } from "../filter/Filter";
import { ObjectsContainer } from "../objects/ObjectsContainer";
import s from './appBodyStyle.module.css'
import { Footer } from "../footer/Footer";


export type localStateType = {
  id: number,
  title: string,
  checked: boolean
}

const ElevationScroll = (props: any) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const AppBody = (props: any) => {
  const [state, setState] = useState<localStateType[]>([]);
  const [stateMap, setStateMap] = useState<localStateType[]>([]);
  const { width } = props

  return <>
    <CssBaseline />
    <ElevationScroll {...props}>
      <AppBar style={{backgroundColor: '#F8FCFF'}}>
        <Header/>
      </AppBar>
    </ElevationScroll>
    <div id="section 1">
      <ObjectsContainer />
    </div>
    <div id="section 2" className={s.style}>
       <div className={s.circle}>&nbsp;</div>
      <Container>
        <div className={s.title}>
          Карта объектов
        </div>
        <Toolbar/>
        <Filter state={state} setState={setState} setStateMap={setStateMap} />
      </Container>
      <Map width={width} localState={stateMap} />
    </div>
    <Footer width={width}/>
  </>;
};

export default withWidth()(AppBody)

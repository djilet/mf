import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { RootState } from "../../../store/RootReducer";
import PopUp from "../popUp/PopUp";
import { actions } from "./mapSlice";
/* global ymaps */

const Map = ({ width, localState, ...props }) => {
  const { center, markers } = useSelector((state: RootState) => state.map);
  const [localMap, setLocalMap] = useState<any>(null);
  const urlId = props.location.pathname.slice(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loadMarkers({ fetch: true, data: { id: undefined, participant: undefined } }));
    dispatch(actions.loadRegion(true));
  }, [dispatch]);

  const openBalloon = (id) => {
    props.history.push(`/${id}`);
    dispatch(actions.loadObject({ fetch: true, id }));
  };

  // загружаем скрипт
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://api-maps.yandex.ru/2.1/?apikey=887ab375-2e3c-43b3-9fe1-db194a385894&lang=ru_RU";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // подписываемся на событие загрузки карты
  useEffect(() => {
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // handleLoad срабатывает после загрузки скрипта и загружает карту
  const handleLoad = () => {
    ymaps.ready(() => {
      setLocalMap(new ymaps.Map("map", {
        center: [center.latitude, center.longitude],
        zoom: 3,
        controls: ["zoomControl"]
      }, {
        restrictMapArea: [[-72.94382695837312,-84.12015553512114],[85.07835311199491,-84.12015553519146]],
        checkZoomRange: true,
        minZoom: 1
      }));
    });
  };

  const filterRegion = (item, data) => {
    let value = false;
    data.forEach(el => item.properties.name === el.title ? value = true : null);
    return value;
  };

  // создание регионов и  метки
  useEffect(() => {
    if (localMap !== null) {
      // сброс карты при использовании фильтра
      localMap.geoObjects.removeAll();
      ymaps.borders.load("RU", {
        lang: "ru",
        quality: 3
      }, {
        color: "000000"
      }).then((geojson) => {
        if (localState.length !== 0) {
          const newGeojson = geojson.features.filter(item => filterRegion(item, localState) ? item : null);
          for (let i = 0; i < newGeojson.length; i += 1) {
            const geoObject = new ymaps.GeoObject(newGeojson[i]);
            localMap.geoObjects.add(geoObject);
          }
        } else {
          for (let i = 0; i < geojson.features.length; i += 1) {
            const geoObject = new ymaps.GeoObject(geojson.features[i]);
            localMap.geoObjects.add(geoObject);
          }
        }
      });

      const placeMark: any[] = [];
      for (let i = 0; i < markers.length; i += 1) {
        placeMark[i] = new ymaps.Placemark([markers[i].latitude, markers[i].longitude], {
          hintContent: markers[i].title
        });
        placeMark[i].events.add("click", () => openBalloon(markers[i].id));
        localMap.geoObjects.add(placeMark[i]);
      }

      const clusterer = new ymaps.Clusterer;
      localMap.geoObjects.add(clusterer);
      clusterer.add(placeMark);

    }
  }, [localMap, markers, localState]);

  return <>
    <Container>
      {urlId && <PopUp width={width} url={props} />}
      {width !== null &&
      <div id="map" style={{ margin: "0 auto",
             width: "100%", height: '500px', border: "5px solid #ffffff",}} />
      }
    </Container>
  </>;
};


export default withRouter(Map);

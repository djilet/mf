import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  actionMarksType,
  actionObjectImageType,
  actionObjectType,
  IMark,
  IObject,
  IRegions,
  IState
} from "../../../types/mapType";


// };
// "id": number,
//   "title": string,
//   "address": string, - адрес объекта
// "type": string, - тип объекта
// "region": {
//   "id": number,
//     "title": string
// },
// "latitude": string,
//   "longitude": string,
//   "participant": boolean, - участник конкурса
// "main_image": string|null, - имя файла - главное фото
// "before_image": string|null,  - имя файла - фото "до"
// "after_image": string|null, - имя файла - фото "после"
// "another_images": [
//   string
// ], массив имен файлов - другие фото
// "video": string|null, - имя файла видео
// "audio": string|null - имя файла аудио

const initialState: IState = {
  regions: [],
  markers: [],
  center: {
    latitude: 69.5,
    longitude: 98.19521311718749
  },
  zoom: 0,
  object: null,
  isFetching: false,
  error: false
};


const mapPage = createSlice({
  name: "mapPage",
  initialState,
  reducers: {
    loadRegion(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    loadedRegion(state, action: PayloadAction<IRegions[]>) {
      state.regions = action.payload;
    },
    loadMarkers(state, action: PayloadAction<actionMarksType>) {
      state.isFetching = action.payload.fetch;
    },
    loadMarkersParticipant(state, action: PayloadAction<actionMarksType>) {
      state.isFetching = action.payload.fetch;
    },
    loadedMarkers(state, action: PayloadAction<IMark[]>) {
      state.markers = action.payload;
    },
    loadObject(state, action: PayloadAction<actionObjectType>) {
      state.object=null
      state.isFetching = action.payload.fetch;
    },
    loadedObject(state, action: PayloadAction<IObject>) {
      state.object = action.payload;
    },
    loadObjectImage(state, action: PayloadAction<actionObjectImageType>) {
      state.isFetching = action.payload.fetch;
    },
    loadedObjectImage(state, action: PayloadAction<IObject>) {
      state.object = action.payload;
    },
    loading(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    }
  }
});

export const { actions, reducer, name } = mapPage;


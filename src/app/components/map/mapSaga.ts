import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from './mapSlice';
import { actionMarksType, actionObjectType } from "../../../types/mapType";
import { mapApi } from "../../../api/api";




export function* loadRegion() {
    const result = yield call(mapApi.loadRegion)
    yield put(actions.loadedRegion(result.data))

}
export function* loadMarkers(action: PayloadAction<actionMarksType>) {
  // @ts-ignore
  const {id, participant} = action.payload.data
  const result = yield call(mapApi.loadMarkers, id, participant)

  if (result.success) {
    yield put(actions.loadedMarkers(result.data))
  }
}

export function* loadObject(action: PayloadAction<actionObjectType>) {
  try {
    const {id} = action.payload
    const result = yield call(mapApi.loadObject, id)
    yield put(actions.loadedObject(result.data))
  }
  catch (e) {
    yield put(actions.setError(true))
  }
}

export function* loadObjectImage(action: PayloadAction<actionObjectType>) {
  const {id} = action.payload
  const result = yield call(mapApi.loadObject, id)
  yield put(actions.loadedObject(result.data))
}

export function* watchMap() {
  yield takeEvery(actions.loadRegion, loadRegion)
  yield takeEvery(actions.loadMarkers, loadMarkers)
  yield takeEvery(actions.loadObject, loadObject)
}



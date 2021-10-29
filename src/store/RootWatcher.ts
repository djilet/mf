import {all} from "redux-saga/effects"
import { watchMap } from "../app/components/map/mapSaga"




export function* RootWatcher(){
    yield all([watchMap()])
}

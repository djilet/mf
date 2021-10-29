import {combineReducers} from "@reduxjs/toolkit"
import {reducer as mapReducer} from '../app/components/map/mapSlice'




const RootReducer = combineReducers({
  map: mapReducer,
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer

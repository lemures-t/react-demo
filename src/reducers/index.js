import {combineReducers} from 'redux';
import {FETCH_WEATHER} from '../actions/index';

function weather_reducer(state = [] , action){
  switch (action.type){
    case FETCH_WEATHER :
      return [action.payload.data,...state] // state.concat([action.payload.data])
  }
  return state;
}

const rootReducer = combineReducers({
  weather : weather_reducer
})


export default rootReducer;

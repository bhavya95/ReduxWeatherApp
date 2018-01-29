import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([action.payload.data]);
      //state.push will mutate our state or change while
      //state.concat will create a new arra with existing data
      return [action.payload.data, ...state]; //same as above
  }

  return state;
}
//to store data

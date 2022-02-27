import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import gamesReducer from "./gamesReducer";

const allReducers = combineReducers({
    games: gamesReducer,
    details: detailsReducer
});

export default allReducers;
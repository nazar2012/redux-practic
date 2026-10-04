import { createStore, combineReducers } from "redux";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    cards: cardReducer,
})

export const store = createStore(rootReducer)
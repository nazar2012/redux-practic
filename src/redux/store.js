import { createStore, combineReducers } from "redux";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
    cards: cardReducer,
})

export const store = createStore(rootReducer)

// store.subscribe(() => {
//     localStorage.setItem("cards", JSON.stringify(store.getState().cards))
// })

let prevStoreCards = store.getState().cards

store.subscribe(() => {
    const currentStoreCards = store.getState().cards
    if (currentStoreCards !== prevStoreCards) {
        localStorage.setItem("cards", JSON.stringify(currentStoreCards))
        prevStoreCards = currentStoreCards
    }
})
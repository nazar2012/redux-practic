import cards from "../data/card.json"
const savedCards = localStorage.getItem("cards")

const initialState = savedCards ? JSON.parse(savedCards): cards

const cardReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "DELETE_CARD":
            return state.filter((card) => card.id !== actions.payload)
        case "ADDCARD":
            return [...state, actions.payload]
        default:
            return state;
    }
}

export default cardReducer
export const deleteCard = (id) => {
    return {
        type: "DELETE_CARD",
        payload: id
    }
}

export const addCard = (card) => {
    return {
        type: "ADDCARD",
        payload: card
    }
}
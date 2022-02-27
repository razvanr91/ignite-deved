const initialState = {
    game: {}
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAILS":
            return {
                ...state,
                game: action.payload
            }
        default:
            return { ...state }
    }
}

export default detailsReducer;
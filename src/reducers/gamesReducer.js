
// Create initial state
const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state }
        default:
            return { ...state }
    }
}
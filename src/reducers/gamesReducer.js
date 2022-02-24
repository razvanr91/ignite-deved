
// Create initial state
const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: []
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popularGames: action.payload.popularGames,
                newGames: action.payload.newGames,
                upcomingGames: action.payload.upcomingGames
            }
        default:
            return { ...state }
    }
}

export default gamesReducer;
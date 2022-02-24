import axios from "axios";
import { newGamesUrl, popularGamesUrl, upcomingGamesUrl } from "../api";

// Action Creator
// Get data with thunk
export const loadGames = () => async (dispatch) => {
    // Axios Fetch
    const popularGamesData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcomingGames: upcomingGamesData.data.results
        }
    })
}
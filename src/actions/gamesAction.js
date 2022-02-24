import axios from "axios";
import { popularGamesUrl } from "../api";

// Action Creator
// Get data with thunk
export const loadGames = () => async (dispatch) => {
    // Axios Fetch
    const popularGamesData = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularGamesData.data.results
        }
    })
}
import axios from "axios";
import { gameDetailsUrl } from "../api";

const loadDetails = (id) => {
    return async (dispatch) => {
        const gameDetails = axios.get(gameDetailsUrl(id));

        dispatch({
            type: "GET_DETAILS",
            payload: {
                game: (await gameDetails).data
            }
        })
    }
}

export default loadDetails;
import axios from "axios";
import { gameDetailsUrl, gameScreenshotsUrl } from "../api";

const loadDetails = (id) => {
    return async (dispatch) => {
        const gameDetails = axios.get(gameDetailsUrl(id));
        const gameScreenshots = axios.get(gameScreenshotsUrl(id));

        dispatch({
            type: "GET_DETAILS",
            payload: {
                game: (await gameDetails).data,
                screenshots: (await gameScreenshots).data
            }
        })
    }
}

export default loadDetails;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    });


    return (
        <h1>Home</h1>
    );
}

export default Home;
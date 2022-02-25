import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
import { useSelector } from "react-redux";

const Home = () => {
    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, []);

    // Get data from store
    const {popularGames, newGames, upcomingGames} = useSelector(state => state.games);
    console.log(popularGames)
    return (
        <div>
            <h1>Home</h1>
            <h2>Popular Games</h2>
            {popularGames && popularGames.map(game => {
                return (
                    <Game />
                )
            })}
        </div>
    );
}

export default Home;
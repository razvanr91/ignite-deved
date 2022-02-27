import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
import { useSelector } from "react-redux";

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

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
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map(game => {
                    return (
                        <Game key={game.id} game={game} />
                    )
                })}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popularGames.map(game => {
                    return (
                        <Game key={game.id} game={game} />
                    )
                })}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game => {
                    return (
                        <Game key={game.id} game={game} />
                    )
                })}
            </Games>
        </GameList>
    );
}

export default Home;
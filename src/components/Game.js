import React from "react"
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadDetails from "../actions/detailsAction";

const Game = ({ game }) => {
    const dispatch = useDispatch();
    const loadGameDetails = () => {
        dispatch(loadDetails(game.id))
    }
    return (
        <StyledGame onClick={loadGameDetails}>
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <img src={game.background_image} alt={game.name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;
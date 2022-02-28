import React from "react";
// Styling and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
`;

const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 2rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;



const GameDetails = () => {
    const {screenshots, game} = useSelector(state => state.details);
    return (
        <CardShadow>
            <Details>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}/{game.rating_top}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data => {
                                return (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.name} />
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {screenshots.results.map(screen => {
                        return (
                            <img key={screen.id} src={screen.image} alt={game.name} />
                        )
                    })}
                </div>
            </Details>
        </CardShadow>
    )
}

export default GameDetails;
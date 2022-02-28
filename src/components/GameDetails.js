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

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;  
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
      margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;



const GameDetails = () => {
    const {screenshots, game} = useSelector(state => state.details);
    return (
        <CardShadow>
            <Details>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}/{game.rating_top}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(data => {
                                return (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                                )
                            })}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt={game.name} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
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
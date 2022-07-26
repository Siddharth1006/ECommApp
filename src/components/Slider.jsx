import React from 'react'
import styled from 'styled-components'

//For arrows in the slider
//Can find these in the Material UI website > Material Icons section > search for Arrows
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;

    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    //circle around the arrow
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    //Center vertically
    top: 0;
    bottom: 0;
    //Using Props to add left and right space
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;

    opacity: 0.5; // makes the arrow a little transparent.

    cursor: pointer;
`;

function Slider() {
  return (
    <Container>
        {/* We are using props to align the left and right arrow of the page */}
        <Arrow direction="left">
            <ArrowLeftTwoToneIcon />
        </Arrow>
        <Arrow direction="right">
            <ArrowRightTwoToneIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
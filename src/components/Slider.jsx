import React from 'react'
import styled from 'styled-components'
//For arrows in the slider
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    //space between this container and the Navbar container
    /* margin-top: px; */
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

    margin-top: 10px;
    margin-left: 10px;
`;

function Slider() {
  return (
    <Container>
        <Arrow>
            <ArrowLeftTwoToneIcon />
        </Arrow>
        <Arrow>
            <ArrowRightTwoToneIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
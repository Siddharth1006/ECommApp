import React , { useState } from 'react'
import styled from 'styled-components'

//For arrows in the slider
//Can find these in the Material UI website > Material Icons section > search for Arrows
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';

//For slider
import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    position: relative;
    overflow: hidden;
`;



const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fcfcfc;
    //circle around the arrow
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    :hover {
        background-color: #c1c3c7;
        transition: 0.2s;
    }

    //scales the Icon size
    transform: scale(1.2);

    //Center vertically
    top: 0;
    bottom: 0;
    //Using Props to add left and right space
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;

    opacity: 0.5; // makes the arrow a little transparent.
    z-index: 2;
    cursor: pointer;
`;

//==================================
const Wrapper = styled.div`
    height: 100%;
    display: flex;

    //causes a more smoother motion of sliding !!!
    transition: all 1.5s ease;
    //as you decrease by -100vw we shift to the right side of the flex giving 
    //us a new image. WE are using this concept and multiplying the constant 1 , 2 etc to -100vw to give
    // different images as the slider is clicked.
    transform: translateX(${props => props.slideIndex * (-100)}vw);
`;

const Slide = styled.div`
    width: 100vw; // will contain our entire container
    height: 100vh;
    display: flex;
    align-items: center;

    //background-color will change automatically as when we click the slider 
    //and new Images shows
    background-color: #${props => props.bg};
`;

const ImageContainer = styled.div`
    flex: 1;
`;

//Remember its a styled.img not .div
const Image = styled.img`
    height: 900px;
    /* width: 850px; */
    margin-left: 90px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

//Make a note of the tags being used. 
const Title = styled.h1`
    font-size: 80px;
    animation: fadeIn 2s infinite;
    @keyframes fadeIn {
        70% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: 'Helvetica neue' , 'Helvetica' , 'Arial' , 'sans-serif';
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;

    :hover {
        font-weight: 600;
        background-color: #d2dcec;
        transition: 0.2s;
    }

    cursor: pointer;
`;

//===================================

const Slider = () => {
    // React hook for the slide Arrays which will have the 3 images in the Slider
    const [slideIndex , setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
        {/* We are using props to align the left and right arrow of the page */}
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftTwoToneIcon />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                <Slide bg={item.bg}>
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    
                    <InfoContainer>
                        <Title> {item.title} </Title>
                        <Description> {item.desc} </Description>
                        <Button> SHOW MORE </Button>
                    </InfoContainer>
                </Slide>
            ))};
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right") }>
            <ArrowRightTwoToneIcon />
        </Arrow>
    </Container>
  )
}

export default Slider

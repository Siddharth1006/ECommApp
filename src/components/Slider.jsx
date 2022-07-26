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

//==================================
const Wrapper = styled.div`
    height: 100%;
    display: flex;
`;

const Slide = styled.div`
    width: 100vw; // will contain our entire container
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;
`;

//Remember its a styled.img not .div
const Image = styled.img`
    height: 80%;
      
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

//Make a note of the tags being used. 
const Title = styled.h1`
    font-size: 50px;
    animation: fadeIn 2s infinite;
    @keyframes fadeIn {
        70% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 30px;
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
  return (
    <Container>
        {/* We are using props to align the left and right arrow of the page */}
        <Arrow direction="left">
            <ArrowLeftTwoToneIcon />
        </Arrow>

        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src="https://cdn.cliqueinc.com/posts/287935/best-amazon-basics-287935-1593179476091-main.700x0c.jpg" />
                    {/* <Image src="https://images.pexels.com/photos/709803/pexels-photo-709803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                </ImageContainer>
                
                <InfoContainer>
                    <Title>SUMMER SALE!! </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>

            <Slide>
                <ImageContainer>
                    <Image src="https://cdn.cliqueinc.com/posts/287935/best-amazon-basics-287935-1593179476091-main.700x0c.jpg" />
                    {/* <Image src="https://images.pexels.com/photos/709803/pexels-photo-709803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                </ImageContainer>
                
                <InfoContainer>
                    <Title>SUMMER SALE!! </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>

            <Slide>
                <ImageContainer>
                    <Image src="https://cdn.cliqueinc.com/posts/287935/best-amazon-basics-287935-1593179476091-main.700x0c.jpg" />
                    {/* <Image src="https://images.pexels.com/photos/709803/pexels-photo-709803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                </ImageContainer>
                
                <InfoContainer>
                    <Title>SUMMER SALE!! </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right">
            <ArrowRightTwoToneIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
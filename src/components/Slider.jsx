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
    transform: scale(1.8);

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

    /* transform: translateX(-100vw); */
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
    margin-left: 130px;
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

    };

  return (
    <Container>
        {/* We are using props to align the left and right arrow of the page */}
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftTwoToneIcon />
        </Arrow>

        <Wrapper>
            <Slide bg="f5fafd">
                <ImageContainer>
                    <Image src="/photos/photo2.png" />
                    {/* <Image src="https://images.pexels.com/photos/709803/pexels-photo-709803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /> */}
                </ImageContainer>
                
                <InfoContainer>
                    <Title>SUMMER SALE!! </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>

            <Slide bg="fcf1ed">
                <ImageContainer>
                    <Image src="/photos/p5.png" />
                </ImageContainer>
                
                <InfoContainer>
                    <Title>WINTER SALE!! </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>

            <Slide bg="dae4f2">
                <ImageContainer>
                    <Image src="https://www.byrdie.com/thmb/3qs3aRnKhAMTLJr7NtJiAfBZdug=/735x0/spring2022trends-831704530c5f49fba41716c0df1d15b0.jpg" />
                </ImageContainer>
                
                <InfoContainer>
                    <Title>Trending Fashion </Title>
                    <Description> DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS. </Description>
                    <Button> SHOW MORE </Button>
                </InfoContainer>
            </Slide>
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right") }>
            <ArrowRightTwoToneIcon />
        </Arrow>
    </Container>
  )
}

export default Slider

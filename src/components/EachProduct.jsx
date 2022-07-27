import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//This is for the search icon , favourites icon and Shopping cat icon
const Info = styled.div`
    //the icons will show only when we bring the cursor on the productItems. 
    //For that we use "opacity" and "hover" animation
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgb(0 , 0 , 0 , 0.2);
    z-index: 3;

    //To bring icons to center and display horizontally
    display: flex;
    align-items: center;
    justify-content: center;
    //Animation
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 320px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;

    position: relative;

    //writing just hover makes the hover affect ONLY on the container
    //To affect all elements of Info when cursor is brought, its really easy
    //in STYLED components. Write info next to hover.

    //NOTE: if we are using a styled component, then it MUST BE defined earlier. HEnce
    // we are copying code above contaienr compoenent so that we can use it here.
    &:hover ${Info} {
        opacity: 1;
    };
`;

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
     height: 85%;
     z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    //To center the circles around the icons
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    //Animation
    transition: all 0.5s ease;

    //To change the color of the icon when we bring the cursor on it.
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
    }

    cursor: pointer;
`;

//item is the prop
const EachProduct = ({item}) => {
  return (
        <Container>
            {/* We will have background color for the container and we will
            have another background which will be the circle. */}
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>

                <Icon>
                    <SearchIcon />
                </Icon>

                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </Info>
        </Container>
  );
};

export default EachProduct;
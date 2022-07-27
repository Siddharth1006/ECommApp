import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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



//This is for the search icon , favourites icon and Shopping cat icon
const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: gray;
    z-index: 3;

    //To bring icons to center and display horizontally
    display: flex;
    align-items: center;
    justify-content: center;
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
  )
}

export default EachProduct
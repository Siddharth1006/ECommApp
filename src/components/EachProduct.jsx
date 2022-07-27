import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
`;

const Circle = styled.div`
`;

const Image = styled.img`
     height: 75%;
`;
const Info = styled.div``;
const Icon = styled.div``;

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
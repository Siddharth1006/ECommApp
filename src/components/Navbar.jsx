import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//We are creating our own style components and WILL NOT BE USING CSS
const Container = styled.div`
  height: 85px;
  // Change this value to see the Container component's thickness vary
`;

const Wrapper = styled.div`
  padding: 8px 20px;

  /*Using Flex box here to make the Wrapper contents horizontal*/
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Left , Right and Center have each been divided equally in the Wrapper Component
const Left = styled.div`
  flex: 1;
  display: flex; //to make horizontal
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  
  align-items: center; // aligns the search container to the center
  
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

//=============================================

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  /* font-size: 33px; */
`;

//===============================================

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 19px;
  cursor: pointer;
  /* For the spacing between the different menu ITEMS */
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
            {/* Wrapper component is used to Wrap the navbar components like login , register etc. */}
        <Wrapper>
            <Left> 
              <Language> EN </Language> 
              
              <SearchContainer> 
                <Input />
                {/* To customize the search icon in the search bar */}
                <SearchIcon style={{color:"gray" , fontSize:23}}/>
              </SearchContainer> 
            </Left>

            <Center>  
              <Logo> AVIATO </Logo>
            </Center>
            
            <Right> 
                <MenuItem> REGISTER/SIGNUP</MenuItem> 
                <MenuItem> SIGN IN </MenuItem> 
                <MenuItem> 
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </MenuItem> 
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar
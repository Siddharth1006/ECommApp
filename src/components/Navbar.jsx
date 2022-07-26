import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

//We are creating our own style components and WILL NOT BE USING CSS
const Container = styled.div`
  height: 65px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;

  /*Using Flex box here to make the Wrapper contents horizontal*/
  display: flex;
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
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
            {/* Wrapper component is used to Wrap the navbar components like login , register etc. */}
        <Wrapper>
            <Left> 
              <Language> EN </Language> 
              
              <SearchContainer> 
                {/* input= we are using material UI for ICONS */}
                <SearchIcon />
              </SearchContainer> 
            </Left>

            <Center> Center </Center>
            
            <Right> Right </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
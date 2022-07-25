import React from 'react'
import styled from 'styled-components';

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

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Navbar = () => {
  return (
    <Container>
            {/* Wrapper component is used to Wrap the navbar components like login , register etc. */}
        <Wrapper>
            <Left> Left </Left>
            <Center> Center </Center>
            <Right> Right </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
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

// Left , Right and Center have each been divided equally in the Wrapper Component
const Left = styled.div`
  flex = 1;
`;
const Center = styled.div`
  flex = 1;
`;
const Right = styled.div`
  flex = 1;
`;

const Navbar = () => {
  return (
    <Container>
            {/* Wrapper component is used to Wrap the navbar components like login , register etc. */}
        <Wrapper>
            <Left> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quos, distinctio fugiat. Expedita, praesentium optio, dicta veniam voluptas quod vitae voluptatem ipsum repellat cupiditate soluta 
              repellendus corporis est, illo error laboriosam. </Left>
            <Center> Center </Center>
            <Right> Right </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
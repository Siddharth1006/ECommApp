import React from 'react'
import styled from 'styled-components';

//We are creating our own style components and WILL NOT BE USING CSS
const Container = styled.div`
  height: 65px;
`

const Wrapper = styled.div`
  padding: 10px 20px
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          {/* Adds space from top and bottom */}
            navbar
        </Wrapper>
    </Container>
  )
}

export default Navbar
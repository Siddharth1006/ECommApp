import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 50px;
    background-color: teal;
    color:white;

    //To display the message in the top 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        AMAZING DEAL! Free Shipping on Orders over Rs 1000!
    </Container>
  )
}

export default Announcement
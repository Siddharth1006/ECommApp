//Newsletter for each of the product items displayed

import React from 'react'
import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 58vh;
    background-color: #fcf5f5;
    
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 72px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 24px;
`;

const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
        <Container>
            <Title> Newsletter </Title>
            <Description> Get timely updates from your favourite products! </Description>
            <InputContainer>
                <Input placeholder="Your email"/>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
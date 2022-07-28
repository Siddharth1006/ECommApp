//Newsletter for each of the product items displayed

import React from 'react'
import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 50vh;
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
    font-family: "sohne-var","Helvetica Neue","Arial","sans-serif";
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 24px;
`;

const InputContainer = styled.div`
    width: 40%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    margin-bottom: 20px;
`;

const Input = styled.input`
    border: none;
    font-size: 20px;
    flex: 7; // 8 units to the email part
    padding-left: 20px; // giving some space from the placeholder
`;

const Button = styled.button`
    flex: 1;// 2 units to the send button
    border: none;
    background-color: teal;
    color:white;
`;

const Newsletter = () => {
  return (
        <Container>
            <Title> Newsletter </Title>
            <Description> Get timely updates from your favourite products! </Description>
            <InputContainer>
                <Input placeholder="Your Name" />
            </InputContainer>
            
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
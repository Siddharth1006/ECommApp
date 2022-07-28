import React from 'react'
import styled from 'styled-components'
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Description = styled.p`
    margin: 20px 0px;
`;
const Logo = styled.h1`
    
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;  
    cursor: pointer;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

//Note : ul has its own margin and padding by default so
//by setting them to zero, we removed those default settings
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> AVIATO </Logo>
                <Description> There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humor, or radomized words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color="E4405F">
                        <LinkedIn />
                    </SocialIcon>
                    
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color="E60023">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title> Useful Links </Title>
                <List>
                    <ListItem> Home </ListItem>
                    <ListItem> Cart </ListItem>
                    <ListItem> Man Fashion </ListItem>
                    <ListItem> Woman Fashion </ListItem>
                    <ListItem> Accessories </ListItem>
                    <ListItem> My Account </ListItem>
                    <ListItem> Order Tracking </ListItem>
                    <ListItem> Wishlist </ListItem>
                    <ListItem> Terms and Conditions </ListItem>
                </List>
            </Center>
            
            <Right></Right>
        </Container>
    )
}

export default Footer
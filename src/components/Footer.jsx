import React from 'react'
import styled from 'styled-components'
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';

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
    /* color: white;   */
`;


const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
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
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon >
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon>
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
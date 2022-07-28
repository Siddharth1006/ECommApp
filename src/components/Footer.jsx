import React from 'react'
import styled from 'styled-components'
import { Facebook, GitHub, LinkedIn, Twitter, Phone, MailOutline, Room } from '@mui/icons-material';

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
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Payment = styled.img`
    width: 50%;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
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
            
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> #47 Rajajinagar , Near Forex Mall , Bangalore , Karnataka - 560010
                </ContactItem>
                
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +91 943583495
                </ContactItem>
                
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@aviato.dev
                </ContactItem>
                
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
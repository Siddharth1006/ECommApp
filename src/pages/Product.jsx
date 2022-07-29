import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add , Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div` 
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;

const UL = styled.ul``;
const LI = styled.li``;


const Product = () => {
  return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                A jumpsuit is a one-piece garment with sleeves and legs and typically without integral coverings for feet, hands or head.
                <UL>
                    <LI>100% Original Products. </LI>
                    <LI> Pay on delivery might be available. </LI>
                    <LI> Easy 30 days returns and exchanges. </LI>
                    <LI> Try & Buy might be available</LI>
                </UL>
                </Desc>
                <Price>Rs. 999</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        
        <Newsletter />
        <Footer />
      </Container>  
  );
};

export default Product
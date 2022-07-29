//If we click on a category like Casual jeans , Loungewear , Shirt Styles, we should be redirected to that page!

import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div``;
const Title = styled.h1``;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px; //give space between the 2 filters
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select``;
const Option = styled.option``;

function ProductList() {
  return (
        <Container>
            <Navbar />
            <Announcement />    
            <Title> Dresses </Title>

            {/* 2 filters - products filter and sorting filter */}
            <FilterContainer>
                <Filter> 
                    <FilterText> Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected> Color </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select>
                        <Option disabled selected> Size </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText> Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer> 

            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
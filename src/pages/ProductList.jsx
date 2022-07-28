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
                </Filter>

                <Filter>
                    <FilterText> Sort Products: </FilterText>
                </Filter>
            </FilterContainer> 

            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
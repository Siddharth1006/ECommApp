//If we click on a category like Casual jeans , Loungewear , Shirt Styles, we should be redirected to that page!

import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Container = styled.div``;

function ProductList() {
  return (
        <Container>
            <Navbar />
            <Announcement />
        </Container>
    )
}

export default ProductList
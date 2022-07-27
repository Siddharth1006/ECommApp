import React from 'react'
import styled from "@mui/material"
import { categories } from  "../data"
import { CategoryItem } from './CategoryItem';

const Container = styled.div`
`;

const Categories = () => {
  return ( 
    // For each item in "Categories Object" (key-value pair mapping) , we call the CategoryItem in in CategoryItem.jsx 
    <Container>
        { categories.map(item => (
            <CategoryItem />
        ))}
    </Container> );
}

export default Categories
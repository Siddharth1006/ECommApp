import React from 'react'
import styled from "styled-components"
import { categories } from  "../data"
import CategoryItem  from './CategoryItem';

const Container = styled.div`
     display: flex;
     padding: 30px;
     justify-content: space-between;
`;

const Categories = () => {
  return ( 
    // For each item in "Categories Object" (key-value pair mapping) , we call the CategoryItem in in CategoryItem.jsx 
    <Container>
        { categories.map(item => (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container> 
    );
}

export default Categories
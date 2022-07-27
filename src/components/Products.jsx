import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import EachProduct from './EachProduct';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const Products = () => {
  return (
        <Container>
            {popularProducts.map((item) => (
                <EachProduct item={item} key={item.id} />
            ))}
        </Container>
  )
}

export default Products
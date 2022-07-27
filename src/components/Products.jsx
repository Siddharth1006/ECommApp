import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import EachProduct from './EachProduct';

const Container = styled.div``;

const Products = () => {
  return (
        <Container>
            {popularProducts.map((item) => (
                <EachProduct item={item} />
            ))}
        </Container>
  )
}

export default Products
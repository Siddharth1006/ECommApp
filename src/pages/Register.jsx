import React from 'react'
import styled from 'styled-components'

const Container = styled.div``;
const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Agreeement = styled.span``;
const Button = styled.span``;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title></Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="lastname" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="Confirm Password" />
                <Agreement>
                    By creating this account, I consent to processing of my personal data in accordance with 
                    the <b> PRIVACY POLICY </b>
                </Agreement>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
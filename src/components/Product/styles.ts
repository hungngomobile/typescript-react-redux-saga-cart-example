import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  width: 250px;
  margin: 15px;
`

export const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 10px;
`

export const Price = styled.p`
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`

export const Image = styled.img`
  display: block;
  margin: 0 auto 10px auto;
  max-width: 100;
  max-height: 100px;
`

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: 300;
  border-radius: 3px;
  background-color: #1a73e8;
  border: 1px solid #1a73e8;
  color: #fff;
  margin: 0 auto;
  display: block;
  transition: all linear 0.1s;

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`

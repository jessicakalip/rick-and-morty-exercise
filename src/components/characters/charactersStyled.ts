import styled from 'styled-components'
import background from '../../assets/space.jpeg';

export const Wrapper = styled.div`
  background-image: url(${background});
  width: 100%;
  heigth: 100%;
`;

export const Title = styled.h1`
  color: white;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;
import React from 'react';
import Character from '../character/character';
import useGetData from '../../hooks/useGetData';
import { ContentWrapper, Title, Wrapper } from './charactersStyled';

//somehow getting undefined for data? 

const Characters = () => {
  const characters = useGetData();
  // const data = getCharacters();
  // console.log({data});
  // const { loading, error, data } = useQuery(getCharacters);
  // setCharacters(data.Characters);
  // if (loading) return <p>Loading ...</p>;
  // if (error) return <p>Error...</p>
  // console.log({characters});
  const charactersList = characters.map((character) => 
    <li>
      <Character 
        id={character.id}
        name={character.name}
        image={character.image}
      />
    </li>
  );
  
  return ( 
  <React.Fragment>
    <Wrapper>
      <Title>Jess' Rick and Morty Exercise!</Title>
      <ContentWrapper>
        {charactersList}
      </ContentWrapper>
    </Wrapper>
  </React.Fragment>  
  );
}
 
export default Characters;
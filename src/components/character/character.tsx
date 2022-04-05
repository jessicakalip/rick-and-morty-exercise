import React from 'react';
import { CharacterWrapper, Name } from './characterStyled';
import { ICharacter } from './interface'

const Character: React.FC<ICharacter> = ({
  id, name, image
}) => {

  return ( 
  <CharacterWrapper>
    <Name>{name}</Name>
    <img src={image} alt={id}/>
  </CharacterWrapper>  
  );
}
 
export default Character;
import { useEffect, useState } from 'react';
import {
 gql
} from "@apollo/client";
import client from '../config/apolloConfig'
import { ICharacter } from '../components/character/interface';

const useGetData = (): ICharacter[] => {
  const [characters, setCharacters] = useState<ICharacter[]>([]); 
  console.log({characters});

  useEffect(() => {
  client
  .query({
    query: gql`
      query Query {
        characters(page: 2) {
          results {
            id
            name
            image
          }
        }
      }
    `
  })
  .then((result) => setCharacters(result.data.characters.results));
  }, []);

  return characters  
}
 
export default useGetData;
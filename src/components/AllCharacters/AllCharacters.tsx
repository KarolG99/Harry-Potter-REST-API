import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowData from "../ShowData/ShowData";
import {
  AllCharactersWrapper,
  CharacterInfoWrapper,
} from "./AllCharacters.styles";

export interface ICharacter {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  image: string;
}

const AllCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then((res) => {
        setCharacters(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <AllCharactersWrapper as="article">
      {isLoading && <h1>Wait a sec ...</h1>}

      {!error &&
        characters &&
        characters.map((character: ICharacter, index) => (
          <CharacterInfoWrapper key={index}>
            <ShowData character={character} />
          </CharacterInfoWrapper>
        ))}

      {error && <h1>Something goes wrong</h1>}
    </AllCharactersWrapper>
  );
};

export default AllCharacters;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { ICharacter } from "../AllCharacters/AllCharacters";
import {
  AllCharactersWrapper,
  CharacterInfoWrapper,
} from "../AllCharacters/AllCharacters.styles";
import ShowData from "../ShowData/ShowData";

const StudentsCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters/students")
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

export default StudentsCharacters;

import axios from "axios";
import React, { useEffect, useState } from "react";

interface ICharacter {
  name?: string;
  species?: string;
  gender?: string;
  house?: string;
  dateOfBirth?: string;
  wizard?: boolean;
  ancestry?: string;
  eyeColour?: string;
  hairColour?: string;
  wand?: {
    wood: string;
    core: string;
    length: number;
  };
  patronus?: string;
  hogwartsStudent?: boolean;
  hogwartsStaff?: boolean;
  actor?: string;
  image?: string;
}

const AllCharacters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
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
    <article>
      {isLoading && <p>Wait a sec ...</p>}

      {!error &&
        characters &&
        characters.map((character: ICharacter, index) => (
          <div key={index}>
            <h3>{character.name}</h3>
            {character.image && (
              <img
                src={character.image}
                aria-hidden
                alt={`${character.name} image`}
              />
            )}
          </div>
        ))}
      {error && <p>Something goes wrong</p>}
    </article>
  );
};

export default AllCharacters;

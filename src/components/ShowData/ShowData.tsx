import React from "react";
import { ICharacter } from "../AllCharacters/AllCharacters";
import {
  CharacterImg,
  ImagePlaceholder,
} from "../AllCharacters/AllCharacters.styles";

const ShowData = ({ character }: { character: ICharacter }) => {
  return (
    <>
      <div className="image-and-name">
        <h2>{character.name}</h2>
        {character.image ? (
          <CharacterImg
            src={character.image}
            aria-hidden
            alt={`${character.name} image`}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>

      <div className="info">
        <p>
          <strong>Species: </strong>
          {character.species}
        </p>
        <p>
          <strong>Gender: </strong>
          {character.gender}
        </p>
        <p>
          <strong>House: </strong>
          {character.house ? character.house : "-"}
        </p>
        <p>
          <strong>Date of Birth: </strong>
          <br />
          {character.dateOfBirth ? character.dateOfBirth : "Unknown"}
        </p>
        <p>
          <strong>Wizard: </strong>
          {character.wizard ? <>Yes</> : <>No</>}
        </p>
        <p>
          <strong>Ancestry: </strong>
          {character.ancestry ? character.ancestry : "-"}
        </p>
        <p>
          <strong>Eye Colour: </strong>
          {character.eyeColour ? character.eyeColour : "Unknown"}
        </p>
        <p>
          <strong>Hair Colour: </strong>
          {character.hairColour ? character.hairColour : "Unknown"}
        </p>
        {(character.wand.wood ||
          character.wand.core ||
          character.wand.length) && (
          <>
            <p>
              <strong>Wand wood: </strong>
              {character.wand.wood ? character.wand.wood : "Unknown"}
            </p>
            <p>
              <strong>Wand core: </strong>
              {character.wand.core ? character.wand.core : "Unknown"}
            </p>
            <p>
              <strong>Wand length: </strong>
              {character.wand.length ? character.wand.length : "Unknown"}
            </p>
          </>
        )}
        <p>
          <strong>Patronus: </strong>
          {character.patronus ? character.patronus : "-"}
        </p>
        <p>
          <strong>Hogwarts Student: </strong>
          {character.hogwartsStudent ? "Yes" : "No"}
        </p>
        <p>
          <strong>Hogwarts Staff: </strong>
          {character.hogwartsStaff ? "Yes" : "No"}
        </p>
        <p>
          <strong>Actor: </strong>
          {character.actor ? character.actor : "Unknown"}
        </p>
      </div>
    </>
  );
};

export default ShowData;

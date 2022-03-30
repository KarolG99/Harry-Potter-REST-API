import React, { useState } from "react";
import AllCharacters from "../AllCharacters/AllCharacters";
import HouseCharacters from "../HouseCharacters/HouseCharacters";
import StaffCharacters from "../StaffCharacters/StaffCharacters";
import StudentsCharacters from "../StudentsCharacters/StudentsCharacters";
import {
  ButtonsWrapper,
  DisplayApiWrapper,
  DisplayCategoryHeader,
  Header,
} from "./DisplayAPI.styles";

const DisplayAPI = () => {
  const [showAll, setShowAll] = useState(true);
  const [showStudents, setShowStudents] = useState(false);
  const [showStaff, setShowStaff] = useState(false);
  const [showGryffindor, setShowGryffindor] = useState(false);
  const [showSlytherin, setShowSlytherin] = useState(false);
  const [showHufflepuff, setShowHufflepuff] = useState(false);

  const SwitchEndpoint = (type: string) => {
    switch (type) {
      case "ALL_CHARACTERS":
        setShowAll(true);
        setShowStudents(false);
        setShowStaff(false);
        setShowGryffindor(false);
        setShowSlytherin(false);
        setShowHufflepuff(false);
        break;

      case "STUDENTS":
        setShowStudents(true);
        setShowAll(false);
        setShowStaff(false);
        setShowGryffindor(false);
        setShowSlytherin(false);
        setShowHufflepuff(false);
        break;

      case "STAFF":
        setShowStaff(true);
        setShowAll(false);
        setShowStudents(false);
        setShowGryffindor(false);
        setShowSlytherin(false);
        setShowHufflepuff(false);
        break;

      case "GRYFFINDOR":
        setShowGryffindor(true);
        setShowSlytherin(false);
        setShowHufflepuff(false);
        setShowStaff(false);
        setShowAll(false);
        setShowStudents(false);
        break;

      case "SLYTHERIN":
        setShowSlytherin(true);
        setShowGryffindor(false);
        setShowHufflepuff(false);
        setShowStaff(false);
        setShowAll(false);
        setShowStudents(false);
        break;

      case "HUFFLEPUFF":
        setShowHufflepuff(true);
        setShowSlytherin(false);
        setShowGryffindor(false);
        setShowStaff(false);
        setShowAll(false);
        setShowStudents(false);
        break;
    }
  };

  return (
    <DisplayApiWrapper>
      <Header>Info about "Harry Potter" characters</Header>

      <ButtonsWrapper>
        <button onClick={() => SwitchEndpoint("ALL_CHARACTERS")}>
          All characters
        </button>
        <button onClick={() => SwitchEndpoint("STUDENTS")}>Students</button>
        <button onClick={() => SwitchEndpoint("STAFF")}>Staff</button>
        <button onClick={() => SwitchEndpoint("GRYFFINDOR")}>Gryffindor</button>
        <button onClick={() => SwitchEndpoint("SLYTHERIN")}>Slytherin</button>
        <button onClick={() => SwitchEndpoint("HUFFLEPUFF")}>Hufflepuff</button>
      </ButtonsWrapper>

      {showAll && (
        <>
          <DisplayCategoryHeader>
            {" "}
            All Hogwarts characters
          </DisplayCategoryHeader>
          <AllCharacters />
        </>
      )}
      {showStudents && (
        <>
          <DisplayCategoryHeader>Hogwarts students</DisplayCategoryHeader>
          <StudentsCharacters />
        </>
      )}
      {showStaff && (
        <>
          <DisplayCategoryHeader>Hogwarts staff</DisplayCategoryHeader>
          <StaffCharacters />
        </>
      )}
      {showGryffindor && (
        <>
          <DisplayCategoryHeader>Gryffindors characters</DisplayCategoryHeader>
          <HouseCharacters endpoint="gryffindor" />
        </>
      )}
      {showSlytherin && (
        <>
          <DisplayCategoryHeader>Slytherins characters</DisplayCategoryHeader>
          <HouseCharacters endpoint="slytherin" />
        </>
      )}
      {showHufflepuff && (
        <>
          <DisplayCategoryHeader>Hufflepuffs characters</DisplayCategoryHeader>
          <HouseCharacters endpoint="hufflepuff" />
        </>
      )}
    </DisplayApiWrapper>
  );
};

export default DisplayAPI;

import styled from "styled-components";

export const DisplayApiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  max-width: 60vw;
  margin: auto;
  padding: 30px 0;
  text-align: center;
  font-size: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  margin-bottom: 30px;

  button {
    padding: 10px;
    margin: 10px;
    border-radius: 20px;
    border: none;
    background-color: #eeba30;
    font-weight: 600;
    color: white;
    -webkit-box-shadow: 0px 3px 15px 0px rgba(247, 243, 111, 1);
    -moz-box-shadow: 0px 3px 15px 0px rgba(247, 243, 111, 1);
    box-shadow: 0px 3px 15px 0px rgba(247, 243, 111, 1);
  }
`;

export const DisplayCategoryHeader = styled.h1`
  margin: 10px 20px 30px 20px;
  color: #EEBA30;
`;

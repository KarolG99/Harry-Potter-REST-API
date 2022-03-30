import styled from "styled-components";
import { ReactComponent as ImgPlaceholder } from "../../assets/icons/image-placeholder.svg";

export const AllCharactersWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  flex-flow: wrap row;
`;

export const CharacterInfoWrapper = styled.div`
  margin: 20px;
  width: 80vw;
  max-width: 350px;
  border-radius: 15px;
  padding: 20px;
  -webkit-box-shadow: 0px 4px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 4px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 4px 24px 0px rgba(66, 68, 90, 1);

  .image-and-name {
    margin-right: 20px;

    h2 {
      margin: 0 0 20px 0;
      color: #ae0001;
    }
  }

  .info {
    margin-top: 20px;

    strong {
      font-size: 20px;
      color: black;
    }

    font-size: 18px;
  }
`;

export const CharacterImg = styled.img`
  width: 170px;
  height: 230px;
  object-fit: cover;
  border-radius: 20px;
`;

export const ImagePlaceholder = styled(ImgPlaceholder)`
  fill: gray;
`;

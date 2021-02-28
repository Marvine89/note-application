import styled from "styled-components";
import { APP_COLORS } from "../../config/colors";
import { device } from "../../styles/media-query";

export const NoteImageBlock = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 210px;
  background-color: ${APP_COLORS.grey};
  background-image: url(${({ imageUrl }) => imageUrl || 'https://via.placeholder.com/1440px288.png'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    height: 400px;
  }
`;

export const NoteTitle = styled.p`
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
`;

export const NoteSubTitle = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  margin: 0px;
`;

export const NoteTextWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: ${APP_COLORS.grey};
  min-height: 100px;
  margin: 25px 0px 90px;
  padding: 30px 20px;
  box-sizing: border-box;

  @media ${device.tablet} {
    margin: 40px 0px 50px;
  }
`;
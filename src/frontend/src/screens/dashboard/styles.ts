import styled from "styled-components";
import { device } from "../../styles/media-query";
import { Grid, TextField } from "@material-ui/core";

export const GridContainer = styled(Grid).attrs({
  container: true,
})`
    padding: 40px 4% 80px;

    @media ${device.laptop} {
      padding: 100px 4%;
    }
`;


export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 50px;
  }
`;

export const Input = styled(TextField)`
  width: 220px;

  @media ${device.tablet} {
    width: 400px;
  }
`;
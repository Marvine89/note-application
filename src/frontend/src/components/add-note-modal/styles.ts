import styled from "styled-components";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { device } from "../../styles/media-query";

export const Title = styled.h2`
  margin: 0px 0px 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const InputContainer = styled.form`
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
`;

export const Input = styled(TextField).attrs({
  variant: "outlined",
})`
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const ModalButton = styled(Button).attrs({
  variant: "contained"
})`
  min-width: 45%;

  &:last-child {
    margin-left: 30px;
  }

  @media ${device.tablet} {
    min-width: 150px;
  }
`;